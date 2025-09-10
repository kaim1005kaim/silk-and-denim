/// <reference types="@figma/plugin-typings" />

// Figma to AI Bridge - MCP Converter Plugin
// 汎用的なFigmaファイル→AI理解可能形式変換プラグイン

interface NodeStructure {
  id: string;
  name: string;
  type: string;
  visible: boolean;
  locked: boolean;
  opacity?: number;
  children?: NodeStructure[];
  
  // スタイル情報
  styles?: {
    fills?: any[];
    strokes?: any[];
    effects?: any[];
    layoutMode?: string;
    itemSpacing?: number;
    padding?: any;
  };
  
  // テキスト情報
  text?: {
    characters?: string;
    fontSize?: number;
    fontName?: any;
    textAlignHorizontal?: string;
    lineHeight?: any;
  };
  
  // レイアウト情報
  layout?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    constraints?: any;
    layoutAlign?: string;
    layoutGrow?: number;
  };
  
  // コンポーネント情報
  component?: {
    isInstance: boolean;
    mainComponent?: string;
    overrides?: any[];
  };
  
  // AI理解用メタデータ
  aiMetadata?: {
    semanticType?: string; // header, footer, card, button, etc.
    contentType?: string; // text, image, icon, etc.
    importance?: number; // 1-10
    interactive?: boolean;
    repeatable?: boolean;
  };
}

interface DesignSystem {
  colors: Map<string, { hex: string; usage: string[] }>;
  typography: Map<string, any>;
  spacing: number[];
  components: Map<string, ComponentInfo>;
  patterns: PatternInfo[];
}

interface ComponentInfo {
  id: string;
  name: string;
  instances: number;
  variants?: any[];
  props?: any[];
}

interface PatternInfo {
  type: string; // grid, list, card-layout, etc.
  frequency: number;
  nodes: string[];
}

interface ExportFormat {
  version: string;
  timestamp: string;
  file: {
    name: string;
    key: string;
    lastModified: string;
  };
  structure: NodeStructure;
  designSystem: DesignSystem;
  assets: {
    images: string[];
    icons: string[];
  };
  analytics: {
    totalNodes: number;
    componentUsage: Map<string, number>;
    colorUsage: Map<string, number>;
    textStyles: number;
    missingFonts: string[];
  };
  aiSuggestions: {
    components: string[];
    improvements: string[];
    accessibility: string[];
  };
}

class FigmaToAIConverter {
  private designSystem: DesignSystem;
  private exportData: ExportFormat;

  constructor() {
    this.designSystem = {
      colors: new Map(),
      typography: new Map(),
      spacing: [],
      components: new Map(),
      patterns: []
    };

    this.exportData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      file: {
        name: figma.root.name,
        key: figma.root.id,
        lastModified: new Date().toISOString()
      },
      structure: null as any,
      designSystem: this.designSystem,
      assets: {
        images: [],
        icons: []
      },
      analytics: {
        totalNodes: 0,
        componentUsage: new Map(),
        colorUsage: new Map(),
        textStyles: 0,
        missingFonts: []
      },
      aiSuggestions: {
        components: [],
        improvements: [],
        accessibility: []
      }
    };
  }

  // ノードを再帰的に解析
  private analyzeNode(node: SceneNode): NodeStructure {
    const structure: NodeStructure = {
      id: node.id,
      name: node.name,
      type: node.type,
      visible: node.visible,
      locked: node.locked,
      opacity: 'opacity' in node ? node.opacity : undefined
    };

    // スタイル情報を抽出
    if ('fills' in node) {
      const fills = node.fills;
      if (fills && typeof fills !== 'symbol') {
        structure.styles = {
          fills: [...fills] as any[]
        };
        this.extractColors(fills as Paint[]);
      }
    }
    
    if ('strokes' in node) {
      const strokes = node.strokes;
      if (strokes && typeof strokes !== 'symbol') {
        if (!structure.styles) structure.styles = {};
        structure.styles.strokes = [...strokes];
      }
    }
    
    if ('effects' in node) {
      const effects = node.effects;
      if (effects && typeof effects !== 'symbol') {
        if (!structure.styles) structure.styles = {};
        structure.styles.effects = [...effects];
      }
    }

    // Auto Layout情報
    if ('layoutMode' in node && node.layoutMode !== 'NONE') {
      structure.styles = {
        ...structure.styles,
        layoutMode: node.layoutMode,
        itemSpacing: node.itemSpacing,
        padding: {
          top: node.paddingTop,
          right: node.paddingRight,
          bottom: node.paddingBottom,
          left: node.paddingLeft
        }
      };
    }

    // テキスト情報
    if (node.type === 'TEXT') {
      const textNode = node as TextNode;
      structure.text = {
        characters: textNode.characters,
        fontSize: typeof textNode.fontSize === 'symbol' ? undefined : textNode.fontSize,
        fontName: typeof textNode.fontName === 'symbol' ? undefined : textNode.fontName,
        textAlignHorizontal: textNode.textAlignHorizontal,
        lineHeight: textNode.lineHeight
      };
      this.extractTypography(textNode);
    }

    // レイアウト情報
    structure.layout = {
      x: node.x,
      y: node.y,
      width: node.width,
      height: node.height,
      constraints: 'constraints' in node ? node.constraints : undefined
    };

    // コンポーネント情報
    if (node.type === 'INSTANCE') {
      const instance = node as InstanceNode;
      structure.component = {
        isInstance: true,
        mainComponent: instance.mainComponent?.id,
        overrides: []
      };
      this.trackComponentUsage(instance.mainComponent?.name || 'Unknown');
    }

    // AI用セマンティック分析
    structure.aiMetadata = this.inferSemantics(node);

    // 子要素を再帰的に処理
    if ('children' in node) {
      structure.children = node.children.map(child => this.analyzeNode(child));
    }

    this.exportData.analytics.totalNodes++;

    return structure;
  }

  // 色情報を抽出
  private extractColors(fills: Paint[]) {
    fills.forEach(fill => {
      if (fill.type === 'SOLID' && fill.visible !== false) {
        const color = fill.color;
        const hex = this.rgbToHex(color);
        
        if (!this.designSystem.colors.has(hex)) {
          this.designSystem.colors.set(hex, {
            hex,
            usage: []
          });
        }
        
        const usage = this.designSystem.colors.get(hex)!;
        usage.usage.push('fill');
      }
    });
  }

  // タイポグラフィ情報を抽出
  private extractTypography(node: TextNode) {
    if (typeof node.fontSize === 'symbol' || typeof node.fontName === 'symbol') {
      return; // mixedの場合はスキップ
    }
    
    const fontNameStr = JSON.stringify(node.fontName);
    const key = `${node.fontSize}-${fontNameStr}`;
    if (!this.designSystem.typography.has(key)) {
      this.designSystem.typography.set(key, {
        fontSize: node.fontSize,
        fontFamily: node.fontName,
        lineHeight: node.lineHeight,
        letterSpacing: node.letterSpacing,
        textDecoration: node.textDecoration,
        instances: 0
      });
    }
    
    const typo = this.designSystem.typography.get(key)!;
    typo.instances++;
  }

  // コンポーネント使用状況を追跡
  private trackComponentUsage(componentName: string) {
    const current = this.exportData.analytics.componentUsage.get(componentName) || 0;
    this.exportData.analytics.componentUsage.set(componentName, current + 1);
  }

  // セマンティック情報を推論
  private inferSemantics(node: SceneNode): any {
    const metadata: any = {
      importance: 5,
      interactive: false,
      repeatable: false
    };

    // 名前からセマンティックタイプを推論
    const name = node.name.toLowerCase();
    
    if (name.includes('header') || name.includes('nav')) {
      metadata.semanticType = 'header';
      metadata.importance = 9;
    } else if (name.includes('footer')) {
      metadata.semanticType = 'footer';
      metadata.importance = 7;
    } else if (name.includes('button') || name.includes('btn')) {
      metadata.semanticType = 'button';
      metadata.interactive = true;
      metadata.importance = 8;
    } else if (name.includes('card')) {
      metadata.semanticType = 'card';
      metadata.repeatable = true;
    } else if (name.includes('hero')) {
      metadata.semanticType = 'hero';
      metadata.importance = 10;
    } else if (name.includes('icon')) {
      metadata.contentType = 'icon';
      metadata.importance = 3;
    }

    // タイプからコンテンツタイプを推論
    if (node.type === 'TEXT') {
      metadata.contentType = 'text';
    } else if (node.type === 'RECTANGLE' && 'fills' in node) {
      const fills = node.fills as Paint[];
      if (fills.some(f => f.type === 'IMAGE')) {
        metadata.contentType = 'image';
      }
    }

    return metadata;
  }

  // パターンを検出
  private detectPatterns(node: SceneNode) {
    if (!('children' in node)) return;

    const children = (node as any).children;
    
    // グリッドパターンの検出
    if (children.length > 2) {
      const widths = children.map((c: SceneNode) => c.width);
      const heights = children.map((c: SceneNode) => c.height);
      
      if (new Set(widths).size === 1 && new Set(heights).size === 1) {
        this.designSystem.patterns.push({
          type: 'grid',
          frequency: children.length,
          nodes: children.map((c: SceneNode) => c.id)
        });
      }
    }

    // リストパターンの検出
    if (children.length > 3) {
      const types = children.map((c: SceneNode) => c.type);
      if (new Set(types).size <= 2) {
        this.designSystem.patterns.push({
          type: 'list',
          frequency: children.length,
          nodes: children.map((c: SceneNode) => c.id)
        });
      }
    }
  }

  // AIへの提案を生成
  private generateAISuggestions() {
    // コンポーネント化の提案
    this.exportData.analytics.componentUsage.forEach((count, name) => {
      if (count > 3) {
        this.exportData.aiSuggestions.components.push(
          `"${name}"を${count}回使用しています。コンポーネント化を検討してください。`
        );
      }
    });

    // 改善提案
    if (this.designSystem.colors.size > 20) {
      this.exportData.aiSuggestions.improvements.push(
        `色が${this.designSystem.colors.size}種類使用されています。デザインシステムの統一を検討してください。`
      );
    }

    if (this.designSystem.typography.size > 10) {
      this.exportData.aiSuggestions.improvements.push(
        `テキストスタイルが${this.designSystem.typography.size}種類あります。統一を検討してください。`
      );
    }

    // アクセシビリティの提案
    this.exportData.aiSuggestions.accessibility.push(
      'コントラスト比の確認をしてください',
      'alt属性の設定を確認してください',
      'フォーカス順序の確認をしてください'
    );
  }

  // RGBをHEXに変換
  private rgbToHex(color: { r: number; g: number; b: number }): string {
    const toHex = (n: number) => {
      const hex = Math.round(n * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  }

  // メイン実行関数
  async analyze(): Promise<ExportFormat> {
    try {
      const pages = figma.root.children;
      
      // 全ページを解析
      const structures: NodeStructure[] = [];
      for (const page of pages) {
        if (page.type === 'PAGE') {
          for (const node of page.children) {
            try {
              structures.push(this.analyzeNode(node));
              this.detectPatterns(node);
            } catch (nodeError) {
              console.error(`Error analyzing node ${node.name}:`, nodeError);
              // エラーが発生したノードをスキップして続行
            }
          }
        }
      }

      this.exportData.structure = {
        id: 'root',
        name: figma.root.name,
        type: 'DOCUMENT',
        visible: true,
        locked: false,
        children: structures
      };

      // AI提案を生成
      this.generateAISuggestions();

      // Map/Setを通常のオブジェクト/配列に変換
      const serializedExport = {
        ...this.exportData,
        designSystem: {
          colors: Array.from(this.designSystem.colors.entries()).map(([hex, data]) => {
            const { hex: _hex, ...rest } = data as any;
            return { hex, ...rest };
          }),
          typography: Array.from(this.designSystem.typography.entries()).map(([key, data]) => ({
            key,
            ...data
          })),
          spacing: this.designSystem.spacing,
          components: Array.from(this.designSystem.components.entries()).map(([name, data]) => {
            const { name: _name, ...rest } = data as any;
            return { name, ...rest };
          }),
          patterns: this.designSystem.patterns
        },
        analytics: {
          ...this.exportData.analytics,
          componentUsage: Array.from(this.exportData.analytics.componentUsage.entries()).map(([name, count]) => ({
            name,
            count
          })),
          colorUsage: Array.from(this.exportData.analytics.colorUsage.entries()).map(([color, count]) => ({
            color,
            count
          }))
        }
      };

      return serializedExport as any;
    } catch (error) {
      console.error('Analysis error:', error);
      throw error;
    }
  }

  // MCPサーバーへ送信
  async sendToMCP(data: ExportFormat, serverUrl: string) {
    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`MCP送信エラー: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('MCP送信失敗:', error);
      throw error;
    }
  }
}

// プラグインのメイン処理
figma.showUI(__html__, { width: 400, height: 600 });

// UIからのメッセージを処理
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'analyze') {
    const converter = new FigmaToAIConverter();
    
    try {
      // 解析実行
      figma.ui.postMessage({ type: 'status', message: '解析中...' });
      const data = await converter.analyze();
      
      // 結果をUIに送信
      figma.ui.postMessage({ 
        type: 'analysis-complete', 
        data: data 
      });

      // MCPサーバーへ送信（オプション）
      if (msg.sendToMCP && msg.serverUrl) {
        figma.ui.postMessage({ type: 'status', message: 'MCPサーバーへ送信中...' });
        await converter.sendToMCP(data, msg.serverUrl);
        figma.ui.postMessage({ type: 'status', message: '送信完了！' });
      }

    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      figma.ui.postMessage({ 
        type: 'error', 
        message
      });
    }
  }

  if (msg.type === 'export-json') {
    // JSONファイルとしてエクスポート
    figma.ui.postMessage({
      type: 'download-json',
      data: msg.data
    });
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
