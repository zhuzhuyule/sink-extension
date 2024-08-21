<div align="right">语言: <a title="英语" href="../../README.md">:us:</a>
:cn:</div>

<h1 align="center">🔗 Sink 短链接生成器</h1>

这是一个 Chrome 扩展程序，可以配合 [Sink](https://github.com/ccbikai/Sink) 快速生成并预览短链接。

### ✨ 功能

* 一键将当前网页链接缩短为 Sink 短链接。
* 可自定义短链接后缀。
* 预览缩短后的链接，并提供快速复制功能。
* 支持登录 Sink 账户，管理已生成的短链接。


### 🛠 开发调试
1. 克隆仓库到本地
```bash
git clone https://github.com/zhuzhuyule/sink-extension.git
```
2. 进入项目目录
```bash
cd sink-extension
```
3. 安装依赖
```bash
pnpm install
```
4. 启动开发服务器
```bash
pnpm dev
# or
pnpm build
```
5. 打开 Chrome 浏览器，进入扩展程序页面（chrome://extensions/）。
6. 打开开发者模式。
7. 点击`加载已解压的扩展程序`按钮。
8. 选择扩展程序的根目录 `./sink-tool`。

### 📦 手动安装

您可以通过以下方式安装扩展程序：

1. 下载 [sink-tool.zip](https://github.com/zhuzhuyule/sink-extension/releases/) 文件。
2. 解压 zip 文件。
3. 打开 Chrome 浏览器，进入扩展程序页面（chrome://extensions/）。
4. 打开开发者模式。
5. 点击`加载已解压的扩展程序`按钮。
6. 选择扩展程序的根目录`sink-tool` 。

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

Distributed under the [MIT License](https://github.com/zhuzhuyule/sink-extension/LICENSE).
