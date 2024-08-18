<h1 align="center">🔗 Sink 短链接生成器</h1>

<p align="center">
  <button onclick="toggleLanguage('zh')">🇨🇳 中文</button>
  <button onclick="toggleLanguage('en')">🇺🇸 English</button>
</p>

<br/>

<div id="content-zh" style="display:none;">

这是一个 Chrome 扩展程序，可以配合 [Sink](https://github.com/ccbikai/Sink) 快速生成并预览短链接。

### ✨ 功能

* 一键将当前网页链接缩短为 Sink 短链接。
* 可自定义短链接后缀。
* 预览缩短后的链接，并提供快速复制功能。
* 支持登录 Sink 账户，管理已生成的短链接。

### ☀️ 截屏

#### Popup Page
![popupPage](./doc/popup.png)

#### QRCode Page
![QRCodePage](./doc/QRCode.png)

#### Setting Page
![optionPage](./doc/option.png)

### 🚀 使用方法

1. 安装 Sink 服务：参考 [https://github.com/ccbikai/Sink](https://github.com/ccbikai/Sink)
2. 安装扩展程序到 Chrome 浏览器。
3. 浏览到您想要缩短 URL 的网页。
4. 点击扩展程序图标，自定义短链接后缀（可选）。
5. 点击生成按钮，预览并复制短链接。

### 🛠️ 技术栈

* **Preact:** 轻量级 UI 库，用于构建用户界面。
* **TypeScript:** 提供类型检查，增强代码可读性和可维护性。
* **Vite:** 快速的开发服务器和构建工具。
* **Tailwind CSS:** 快速构建现代化界面的实用工具集。
* **ESLint:** 代码风格检查，保证代码质量。
* **Prettier:** 代码格式化工具，保持代码风格一致性。
* **Jest:** JavaScript 测试框架，用于单元测试和集成测试。
* **Chrome Extension Manifest Version 3:**  最新版本的 Chrome 扩展程序规范。

### 🤝 贡献

欢迎提交 issue 和 pull request！

### 📄 License

Distributed under the [MIT License](https://github.com/zhuzhuyule/skin-extension/LICENSE).

</div>

<div id="content-en">

This is a Chrome extension that allows for quick generation and preview of short links using [Sink](https://github.com/ccbikai/Sink).

### ✨ Features

* Instantly shorten the current webpage URL into a Sink short link.
* Customizable short link suffix.
* Preview shortened links with quick copy functionality.
* Log in to your Sink account to manage generated short links.

### ☀️ Screenshots

#### Popup Page
![popupPage](./doc/popup.png)

#### QRCode Page
![QRCodePage](./doc/QRCode.png)

#### Setting Page
![optionPage](./doc/option.png)

### 🚀 Usage

1. Install Sink service: refer to [https://github.com/ccbikai/Sink](https://github.com/ccbikai/Sink)
2. Install the extension into the Chrome browser.
3. Navigate to the webpage you want to shorten.
4. Click the extension icon, customize the short link suffix (optional).
5. Click the generate button, preview, and copy the short link.

### 🛠️ Tech Stack

* **Preact:** Lightweight UI library for building user interfaces.
* **TypeScript:** Adds type checking for better readability and maintainability.
* **Vite:** Fast development server and build tool.
* **Tailwind CSS:** Utility-first CSS framework for building modern interfaces.
* **ESLint:** Code style checker to ensure code quality.
* **Prettier:** Code formatter to maintain consistent style.
* **Jest:** JavaScript testing framework for unit and integration tests.
* **Chrome Extension Manifest Version 3:** The latest version of Chrome Extension spec.

### 🤝 Contributing

Feel free to submit issues and pull requests!

### 📄 License

Distributed under the [MIT License](https://github.com/zhuzhuyule/skin-extension/LICENSE).

</div>

<script>
function toggleLanguage(lang) {
    document.getElementById('content-zh').style.display = (lang === 'zh') ? 'block' : 'none';
    document.getElementById('content-en').style.display = (lang === 'en') ? 'block' : 'none';
}
</script>
