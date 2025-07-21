# LRC Creator - 動態歌詞產生器

一個免費的線上工具，用於產生同步歌詞檔案 (LRC 格式)。

## 功能特色

- 🎵 支援 MP3 音檔上傳
- ⏱️ 即時時間標記
- ⌨️ 鍵盤快捷鍵支援
- 🌐 多語言支援 (英文/繁體中文)
- ♿ 無障礙設計
- 📱 響應式設計

## 技術架構

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **音訊處理**: WaveSurfer.js
- **UI 框架**: 自定義 CSS 框架
- **安全性**: Content Security Policy (CSP)

## 快速開始

1. 克隆專案
```bash
git clone <repository-url>
cd LRCreator
```

2. 安裝依賴
```bash
npm install
```

3. 啟動本地伺服器
```bash
# 使用 Python
python -m http.server 3000

# 或使用 Node.js
npx serve .
```

4. 開啟瀏覽器訪問 `http://localhost:3000`

## 開發工具

### 程式碼品質檢查
```bash
# ESLint 檢查
npm run lint

# ESLint 自動修復
npm run lint:fix

# Prettier 格式化
npm run format

# Prettier 檢查格式
npm run format:check
```

### Lighthouse 審計
```bash
# 安裝 Lighthouse
npm install -g lighthouse

# 執行審計
lighthouse http://localhost:3000 --output json --output-path ./lighthouse-report.json
```

## 無障礙性

本專案遵循 WCAG 2.1 AA 標準：

- ✅ 所有圖片都有替代文字
- ✅ 所有按鈕都有可識別的文字
- ✅ 適當的 ARIA 標籤
- ✅ 鍵盤導航支援
- ✅ 高對比度設計

## 安全性

- Content Security Policy (CSP) 標頭
- 本地音檔處理，不上傳到伺服器
- 安全的第三方資源載入

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權

MIT License

## 貢獻

歡迎提交 Issue 和 Pull Request！

## 聯絡資訊

- 開發者: StreetVoice
- 網站: https://lrc-generator.streetvoice.com 