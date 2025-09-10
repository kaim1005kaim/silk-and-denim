// Figma File Analyzer
// Figmaファイルを分析して改善提案を生成

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  visible?: boolean;
  locked?: boolean;
  constraints?: any;
  layoutMode?: string;
  itemSpacing?: number;
}

interface AnalysisReport {
  naming: NamingSuggestion[];
  grouping: GroupingSuggestion[];
  components: ComponentSuggestion[];
  autoLayout: AutoLayoutSuggestion[];
}

interface NamingSuggestion {
  currentName: string;
  suggestedName: string;
  nodeId: string;
  reason: string;
}

interface GroupingSuggestion {
  nodes: string[];
  suggestedGroupName: string;
  reason: string;
}

interface ComponentSuggestion {
  nodeId: string;
  nodeName: string;
  duplicateCount: number;
  reason: string;
}

interface AutoLayoutSuggestion {
  nodeId: string;
  nodeName: string;
  suggestedSettings: {
    layoutMode: 'HORIZONTAL' | 'VERTICAL';
    itemSpacing: number;
    padding: number;
  };
}

export class FigmaAnalyzer {
  private figmaToken: string;
  private fileKey: string;

  constructor(figmaToken: string, fileKey: string) {
    this.figmaToken = figmaToken;
    this.fileKey = fileKey;
  }

  async fetchFile(): Promise<any> {
    const response = await fetch(
      `https://api.figma.com/v1/files/${this.fileKey}`,
      {
        headers: {
          'X-Figma-Token': this.figmaToken
        }
      }
    );
    return response.json();
  }

  analyzeNaming(node: FigmaNode, suggestions: NamingSuggestion[] = []): NamingSuggestion[] {
    // 不適切な命名パターンを検出
    const badPatterns = [
      /^Frame \d+$/,
      /^Rectangle \d+$/,
      /^Group \d+$/,
      /^Component \d+$/,
    ];

    if (badPatterns.some(pattern => pattern.test(node.name))) {
      const suggestedName = this.generateSmartName(node);
      suggestions.push({
        currentName: node.name,
        suggestedName,
        nodeId: node.id,
        reason: '汎用的な名前を意味のある名前に変更'
      });
    }

    // 日本語と英語の混在をチェック
    if (/[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(node.name) && /[a-zA-Z]/.test(node.name)) {
      suggestions.push({
        currentName: node.name,
        suggestedName: this.standardizeName(node.name),
        nodeId: node.id,
        reason: '言語の統一'
      });
    }

    // 子要素を再帰的に分析
    if (node.children) {
      node.children.forEach(child => this.analyzeNaming(child, suggestions));
    }

    return suggestions;
  }

  private generateSmartName(node: FigmaNode): string {
    const typeMap: Record<string, string> = {
      'FRAME': 'Container',
      'TEXT': 'Text',
      'RECTANGLE': 'Box',
      'ELLIPSE': 'Circle',
      'VECTOR': 'Icon',
      'COMPONENT': 'Component',
      'INSTANCE': 'Instance'
    };

    const prefix = typeMap[node.type] || node.type;
    
    // 子要素から内容を推測
    if (node.children && node.children.length > 0) {
      const hasText = node.children.some(child => child.type === 'TEXT');
      const hasImages = node.children.some(child => child.type === 'RECTANGLE' && child.name.includes('image'));
      
      if (hasText && hasImages) return `${prefix}_Card`;
      if (hasText) return `${prefix}_TextBlock`;
      if (hasImages) return `${prefix}_Gallery`;
    }

    return `${prefix}_${node.id.slice(0, 8)}`;
  }

  private standardizeName(name: string): string {
    // 日本語を英語に変換する簡単なマッピング
    const translations: Record<string, string> = {
      'ヘッダー': 'Header',
      'フッター': 'Footer',
      'ナビゲーション': 'Navigation',
      'ボタン': 'Button',
      'テキスト': 'Text',
      '画像': 'Image',
      'カード': 'Card',
      'セクション': 'Section'
    };

    let standardized = name;
    Object.entries(translations).forEach(([jp, en]) => {
      standardized = standardized.replace(jp, en);
    });

    return standardized;
  }

  analyzeGrouping(node: FigmaNode): GroupingSuggestion[] {
    const suggestions: GroupingSuggestion[] = [];
    
    if (node.children && node.children.length > 3) {
      // 同じタイプの要素が複数ある場合
      const typeGroups = new Map<string, FigmaNode[]>();
      
      node.children.forEach(child => {
        if (!typeGroups.has(child.type)) {
          typeGroups.set(child.type, []);
        }
        typeGroups.get(child.type)!.push(child);
      });

      typeGroups.forEach((nodes, type) => {
        if (nodes.length >= 3) {
          suggestions.push({
            nodes: nodes.map(n => n.id),
            suggestedGroupName: `${type}_Group`,
            reason: `${nodes.length}個の${type}要素をグループ化`
          });
        }
      });
    }

    return suggestions;
  }

  findComponentCandidates(node: FigmaNode, allNodes: FigmaNode[] = []): ComponentSuggestion[] {
    // すべてのノードを収集
    this.collectAllNodes(node, allNodes);
    
    // 構造の類似性を分析
    const suggestions: ComponentSuggestion[] = [];
    const analyzed = new Set<string>();

    allNodes.forEach(node1 => {
      if (analyzed.has(node1.id)) return;
      
      const similar = allNodes.filter(node2 => 
        node1.id !== node2.id &&
        !analyzed.has(node2.id) &&
        this.isSimilarStructure(node1, node2)
      );

      if (similar.length >= 2) {
        suggestions.push({
          nodeId: node1.id,
          nodeName: node1.name,
          duplicateCount: similar.length + 1,
          reason: `${similar.length + 1}個の類似構造を検出`
        });
        
        analyzed.add(node1.id);
        similar.forEach(s => analyzed.add(s.id));
      }
    });

    return suggestions;
  }

  private collectAllNodes(node: FigmaNode, collection: FigmaNode[]): void {
    collection.push(node);
    if (node.children) {
      node.children.forEach(child => this.collectAllNodes(child, collection));
    }
  }

  private isSimilarStructure(node1: FigmaNode, node2: FigmaNode): boolean {
    if (node1.type !== node2.type) return false;
    
    const children1 = node1.children || [];
    const children2 = node2.children || [];
    
    if (children1.length !== children2.length) return false;
    
    // 子要素のタイプが同じ順序で並んでいるかチェック
    return children1.every((child, index) => 
      child.type === children2[index]?.type
    );
  }

  suggestAutoLayout(node: FigmaNode): AutoLayoutSuggestion[] {
    const suggestions: AutoLayoutSuggestion[] = [];

    if (node.type === 'FRAME' && node.children && node.children.length > 1) {
      // Auto Layoutが適用されていない場合
      if (!node.layoutMode) {
        const isHorizontal = this.detectLayoutDirection(node);
        
        suggestions.push({
          nodeId: node.id,
          nodeName: node.name,
          suggestedSettings: {
            layoutMode: isHorizontal ? 'HORIZONTAL' : 'VERTICAL',
            itemSpacing: 16,
            padding: 24
          }
        });
      }
    }

    // 子要素を再帰的に分析
    if (node.children) {
      node.children.forEach(child => {
        suggestions.push(...this.suggestAutoLayout(child));
      });
    }

    return suggestions;
  }

  private detectLayoutDirection(node: FigmaNode): boolean {
    // 簡易的な判定（実際にはbounding boxの位置を分析する必要がある）
    return node.name.toLowerCase().includes('row') || 
           node.name.toLowerCase().includes('horizontal');
  }

  async generateReport(): Promise<AnalysisReport> {
    const fileData = await this.fetchFile();
    const document = fileData.document;

    return {
      naming: this.analyzeNaming(document),
      grouping: this.analyzeGrouping(document),
      components: this.findComponentCandidates(document),
      autoLayout: this.suggestAutoLayout(document)
    };
  }

  formatReportAsMarkdown(report: AnalysisReport): string {
    let markdown = '# Figma File Analysis Report\n\n';

    markdown += '## 📝 命名の改善提案\n\n';
    report.naming.forEach(s => {
      markdown += `- **${s.currentName}** → **${s.suggestedName}**\n`;
      markdown += `  - 理由: ${s.reason}\n`;
    });

    markdown += '\n## 📦 グループ化の提案\n\n';
    report.grouping.forEach(s => {
      markdown += `- **${s.suggestedGroupName}**\n`;
      markdown += `  - 理由: ${s.reason}\n`;
    });

    markdown += '\n## 🔧 コンポーネント化の提案\n\n';
    report.components.forEach(s => {
      markdown += `- **${s.nodeName}**\n`;
      markdown += `  - ${s.duplicateCount}個の重複\n`;
      markdown += `  - 理由: ${s.reason}\n`;
    });

    markdown += '\n## 📐 Auto Layoutの提案\n\n';
    report.autoLayout.forEach(s => {
      markdown += `- **${s.nodeName}**\n`;
      markdown += `  - 方向: ${s.suggestedSettings.layoutMode}\n`;
      markdown += `  - 間隔: ${s.suggestedSettings.itemSpacing}px\n`;
      markdown += `  - パディング: ${s.suggestedSettings.padding}px\n`;
    });

    return markdown;
  }
}

// 使用例
export async function analyzeFigmaFile(token: string, fileKey: string) {
  const analyzer = new FigmaAnalyzer(token, fileKey);
  const report = await analyzer.generateReport();
  console.log(analyzer.formatReportAsMarkdown(report));
  return report;
}