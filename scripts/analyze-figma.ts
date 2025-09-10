#!/usr/bin/env node

// Figmaファイル分析スクリプト
// 使い方: npx tsx scripts/analyze-figma.ts

import { FigmaAnalyzer } from '../utils/figma-analyzer';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// .env.localを読み込み
dotenv.config({ path: '.env.local' });

async function main() {
  // 環境変数から設定を読み込み
  const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
  const FILE_KEY = process.env.FIGMA_FILE_KEY;

  if (!FIGMA_TOKEN || !FILE_KEY) {
    console.error('❌ 環境変数を設定してください:');
    console.error('FIGMA_ACCESS_TOKEN: Figmaのアクセストークン');
    console.error('FIGMA_FILE_KEY: 分析したいファイルのキー');
    console.error('\n例:');
    console.error('FIGMA_ACCESS_TOKEN=figd_xxx FIGMA_FILE_KEY=abc123 npx tsx scripts/analyze-figma.ts');
    process.exit(1);
  }

  console.log('🔍 Figmaファイルを分析中...');
  console.log(`📁 ファイルキー: ${FILE_KEY}`);
  
  try {
    const analyzer = new FigmaAnalyzer(FIGMA_TOKEN, FILE_KEY);
    const report = await analyzer.generateReport();
    
    // レポートをMarkdown形式で保存
    const reportPath = path.join(process.cwd(), 'figma-analysis-report.md');
    const markdown = analyzer.formatReportAsMarkdown(report);
    fs.writeFileSync(reportPath, markdown);
    
    console.log('✅ 分析完了！');
    console.log(`📄 レポート: ${reportPath}`);
    
    // サマリーを表示
    console.log('\n📊 サマリー:');
    console.log(`- 命名改善: ${report.naming.length}件`);
    console.log(`- グループ化提案: ${report.grouping.length}件`);
    console.log(`- コンポーネント化提案: ${report.components.length}件`);
    console.log(`- Auto Layout提案: ${report.autoLayout.length}件`);
    
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

main();