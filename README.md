<div align="right">Language: :us:
<a title="Chinese" href="doc/cn/README.md">:cn:</a></div>

<h1 align="center">🔗 Sink Short URL Extension</h1>

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

#### Setting Page - Login

![optionPage](./doc/login.png)

### 🛠 Development and Debugging

1. Clone the repository to your local machine
```bash
git clone https://github.com/zhuzhuyule/sink-extension.git
```
2. Enter the project directory
```bash
cd sink-extension
```
3. Install dependencies
```bash
pnpm install
```
4. Start the development server
```bash
pnpm dev
# or
pnpm build
```
5. Open Chrome browser and navigate to the Extensions page (chrome://extensions/).
6. Enable Developer mode.
7. Click the `Load unpacked extension` button.
8. Select the root directory of the extension `./sink-tool`.

### 📦 Manual Installation

You can install the extension using the following steps:

1. Download the [sink-tool.zip](https://github.com/zhuzhuyule/sink-extension/releases/) file.
2. Extract the zip file.
3. Open Chrome browser and navigate to the Extensions page (chrome://extensions/).
4. Enable Developer mode.
5. Click the `Load unpacked extension` button.
6. Select the root directory of the extension `sink-tool`.


### 📦 Installation

1. Clone the repository: `git clone https://github.com/zhuzhuyule/sink-extension.git`
2. Navigate to the project directory: `cd sink-extension`
3. Install dependencies: `pnpm install`
4. Build the extension: `pnpm build`
5. Load the extension into Chrome: `chrome://extensions/` > `Load unpacked` > select the project directory

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

Distributed under the [MIT License](https://github.com/zhuzhuyule/sink-extension/LICENSE).

