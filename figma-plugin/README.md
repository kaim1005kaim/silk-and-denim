# 🤖 Figma to AI Bridge - MCP Converter

購入したFigmaファイルや既存のデザインをAIが理解しやすい構造化データに変換する汎用プラグインです。

## 🎯 主な機能

### 1. **完全なデザイン構造の抽出**
- レイヤー階層とネスト構造
- スタイル情報（色、フォント、エフェクト）
- レイアウト情報（位置、サイズ、制約）
- Auto Layout設定
- コンポーネントとインスタンス

### 2. **デザインシステムの自動検出**
- カラーパレットの抽出
- タイポグラフィスタイル
- スペーシングシステム
- 繰り返しパターン

### 3. **AIセマンティック分析**
- 要素の意味的な役割を推論（ヘッダー、フッター、ボタンなど）
- コンテンツタイプの識別（テキスト、画像、アイコン）
- 重要度の推定
- インタラクティブ要素の検出

### 4. **改善提案の自動生成**
- コンポーネント化の候補
- デザインシステムの統一提案
- アクセシビリティの改善点

### 5. **MCP (Model Context Protocol) 対応**
- 構造化データをMCPサーバーへ送信
- AIツール（Claude、ChatGPT等）との連携
- リアルタイムでの分析結果共有

## 📦 インストール方法

### 方法1: 開発者モードでテスト
1. Figmaデスクトップアプリを開く
2. メニュー → Plugins → Development → New Plugin...
3. 「Link existing plugin」を選択
4. `manifest.json`ファイルを選択

### 方法2: ビルドして配布
```bash
# TypeScriptをJavaScriptにコンパイル
cd figma-plugin
npm init -y
npm install --save-dev @figma/plugin-typings typescript
npx tsc code.ts --outFile code.js
```

## 🚀 使い方

### 基本的な使用方法
1. Figmaでファイルを開く
2. Plugins → Figma to AI Bridge を起動
3. 解析オプションを選択
4. 「解析開始」をクリック
5. JSONファイルをエクスポートまたはMCPサーバーへ送信

### MCPサーバーとの連携
1. MCPサーバーのURLを入力（例: `http://localhost:3000/mcp`）
2. 「MCPサーバーへ送信」にチェック
3. 解析実行で自動的に送信

## 📊 出力データ形式

```json
{
  "version": "1.0.0",
  "timestamp": "2024-01-01T00:00:00Z",
  "file": {
    "name": "Design File",
    "key": "file_key",
    "lastModified": "2024-01-01T00:00:00Z"
  },
  "structure": {
    "id": "root",
    "name": "Document",
    "type": "DOCUMENT",
    "children": [...]
  },
  "designSystem": {
    "colors": [...],
    "typography": [...],
    "spacing": [...],
    "components": [...],
    "patterns": [...]
  },
  "analytics": {
    "totalNodes": 1234,
    "componentUsage": {...},
    "colorUsage": {...}
  },
  "aiSuggestions": {
    "components": [...],
    "improvements": [...],
    "accessibility": [...]
  }
}
```

## 🔧 カスタマイズ

### セマンティック推論のカスタマイズ
`code.ts`の`inferSemantics`関数を編集して、独自の推論ルールを追加：

```typescript
// 例: 日本語の要素名に対応
if (name.includes('ヘッダー') || name.includes('ナビ')) {
  metadata.semanticType = 'header';
}
```

### MCPサーバーエンドポイント
独自のMCPサーバーを実装する場合：

```typescript
// MCPサーバー側の実装例
app.post('/mcp', async (req, res) => {
  const figmaData = req.body;
  
  // AIへ転送
  const aiResponse = await sendToAI(figmaData);
  
  // コード生成
  const generatedCode = await generateCode(figmaData);
  
  res.json({ 
    success: true, 
    aiResponse,
    generatedCode 
  });
});
```

## 🤝 連携可能なツール

- **Claude Desktop** (MCP対応)
- **ChatGPT** (カスタムアクション)
- **GitHub Copilot** (コンテキスト提供)
- **VS Code** (拡張機能経由)
- **カスタムAIツール** (API経由)

## 📝 ユースケース

### 1. 購入したUIキットの解析
- ThemeForestやUI8で購入したFigmaファイル
- 構造を理解してコード化

### 2. 既存デザインのリバースエンジニアリング
- 競合サイトのデザイン分析
- ベストプラクティスの抽出

### 3. デザインシステムの構築
- 既存デザインからシステム化
- コンポーネントライブラリの生成

### 4. アクセシビリティ監査
- セマンティック構造の確認
- WCAG準拠のチェック

### 5. 自動コード生成
- React/Vue/Angular コンポーネント
- Tailwind CSSクラス
- デザイントークン

## 🐛 トラブルシューティング

### プラグインが動作しない
- Figmaデスクトップアプリを使用しているか確認
- Developer modeが有効か確認
- コンソールログでエラーを確認

### MCPサーバーに接続できない
- CORSが設定されているか確認
- ファイアウォールの設定を確認
- ローカルサーバーが起動しているか確認

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエスト歓迎！
1. Fork
2. Feature branch作成
3. Commit
4. Push
5. Pull Request

## 📧 サポート

Issues: https://github.com/your-repo/issues