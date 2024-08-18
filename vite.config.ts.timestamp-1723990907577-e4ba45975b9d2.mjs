// vite.config.ts
import { defineConfig } from "file:///Users/pfzhu/D/github/chrome-extensions/skin-url/node_modules/.pnpm/vite@5.4.1_@types+node@22.4.0/node_modules/vite/dist/node/index.js";
import { resolve as resolve2 } from "path";
import preact from "file:///Users/pfzhu/D/github/chrome-extensions/skin-url/node_modules/.pnpm/@preact+preset-vite@2.9.0_@babel+core@7.25.2_preact@10.23.2_vite@5.4.1_@types+node@22.4.0_/node_modules/@preact/preset-vite/dist/esm/index.mjs";

// scripts/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// package.json
var package_default = {
  name: "skin-extension",
  version: "0.0.1",
  description: "Chrome extension template with Preact, Tailwind CSS, Vite and Typescript preconfigured.",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/zhuzhuyule/skin-extension.git"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon",
    test: "jest",
    "test:cov": "jest --coverage",
    format: "prettier src/ scripts/ --write"
  },
  type: "module",
  packageManager: "pnpm@9.1.1",
  devDependencies: {
    "@babel/core": "^7.25.2",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/plugin-transform-react-jsx": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "@preact/preset-vite": "^2.9.0",
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/preact": "^3.2.4",
    "@types/chrome": "^0.0.270",
    "@types/jest": "^29.5.12",
    "@types/node": "^22.4.0",
    "@types/qrcode": "^1.5.5",
    "@typescript-eslint/eslint-plugin": "^8.1.0",
    "@typescript-eslint/parser": "^8.1.0",
    autoprefixer: "^10.4.20",
    "babel-jest": "^29.7.0",
    eslint: "^9.9.0",
    "eslint-config-preact": "^1.4.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.9.0",
    "eslint-plugin-prettier": "^5.2.1",
    jest: "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "jest-preset-preact": "^4.1.1",
    nodemon: "^3.1.4",
    postcss: "^8.4.41",
    preact: "^10.23.2",
    "preact-render-to-string": "^6.5.9",
    prettier: "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.6",
    tailwindcss: "^3.4.10",
    typescript: "^5.5.4",
    vite: "^5.4.1",
    "vite-plugin-svgr": "^4.2.0"
  },
  eslintConfig: {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      "preact",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: [
      "@typescript-eslint"
    ],
    globals: {
      chrome: "readonly"
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: "es5",
          arrowParens: "avoid"
        }
      ]
    }
  },
  dependencies: {
    qrcode: "^1.5.4"
  }
};

// src/manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.name,
  version: package_default.version,
  description: package_default.description,
  options_page: "src/options/index.html",
  background: { service_worker: "src/background/index.js" },
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "icon-34.png"
  },
  permissions: [
    "storage",
    "tabs"
  ],
  icons: {
    "128": "icon-128.png"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/content/index.js"]
    }
  ],
  web_accessible_resources: [
    {
      resources: ["icon-128.png", "icon-34.png"],
      matches: []
    }
  ]
};
var manifest_default = manifest;

// scripts/color-log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// scripts/make-manifest.ts
var __vite_injected_original_dirname = "/Users/pfzhu/D/github/chrome-extensions/skin-url/scripts";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "public");
function makeManifest() {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest_default, null, 2));
      colorLog(`
Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// vite.config.ts
import svgr from "file:///Users/pfzhu/D/github/chrome-extensions/skin-url/node_modules/.pnpm/vite-plugin-svgr@4.2.0_rollup@4.20.0_typescript@5.5.4_vite@5.4.1_@types+node@22.4.0_/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname2 = "/Users/pfzhu/D/github/chrome-extensions/skin-url";
var src = resolve2(__vite_injected_original_dirname2, "src");
var assetsDir = resolve2(src, "assets");
var outDir2 = resolve2(__vite_injected_original_dirname2, "dist");
var publicDir = resolve2(__vite_injected_original_dirname2, "public");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": src,
      "@assets": assetsDir
    }
  },
  plugins: [makeManifest(), svgr(), preact()],
  publicDir,
  build: {
    outDir: outDir2,
    rollupOptions: {
      input: {
        content: resolve2(src, "content", "index.ts"),
        background: resolve2(src, "background", "index.ts"),
        popup: resolve2(src, "popup", "index.html"),
        newtab: resolve2(src, "newtab", "index.html"),
        devtools: resolve2(src, "devtools", "index.html"),
        options: resolve2(src, "options", "index.html")
      },
      output: {
        entryFileNames: (chunk) => `src/${chunk.name}/index.js`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9tYWtlLW1hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiIsICJzcmMvbWFuaWZlc3QudHMiLCAic2NyaXB0cy9jb2xvci1sb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wZnpodS9EL2dpdGh1Yi9jaHJvbWUtZXh0ZW5zaW9ucy9za2luLXVybC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBwcmVhY3QgZnJvbSAnQHByZWFjdC9wcmVzZXQtdml0ZSc7XG5pbXBvcnQgbWFrZU1hbmlmZXN0IGZyb20gJy4vc2NyaXB0cy9tYWtlLW1hbmlmZXN0JztcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5cbmNvbnN0IHNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XG5jb25zdCBhc3NldHNEaXIgPSByZXNvbHZlKHNyYywgJ2Fzc2V0cycpO1xuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG5jb25zdCBwdWJsaWNEaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAc3JjJzogc3JjLFxuICAgICAgJ0Bhc3NldHMnOiBhc3NldHNEaXIsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW21ha2VNYW5pZmVzdCgpLCBzdmdyKCkscHJlYWN0KCldLFxuICBwdWJsaWNEaXIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGNvbnRlbnQ6IHJlc29sdmUoc3JjLCAnY29udGVudCcsICdpbmRleC50cycpLFxuICAgICAgICBiYWNrZ3JvdW5kOiByZXNvbHZlKHNyYywgJ2JhY2tncm91bmQnLCAnaW5kZXgudHMnKSxcbiAgICAgICAgcG9wdXA6IHJlc29sdmUoc3JjLCAncG9wdXAnLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBuZXd0YWI6IHJlc29sdmUoc3JjLCAnbmV3dGFiJywgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgZGV2dG9vbHM6IHJlc29sdmUoc3JjLCAnZGV2dG9vbHMnLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBvcHRpb25zOiByZXNvbHZlKHNyYywgJ29wdGlvbnMnLCAnaW5kZXguaHRtbCcpLFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogY2h1bmsgPT4gYHNyYy8ke2NodW5rLm5hbWV9L2luZGV4LmpzYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Bmemh1L0QvZ2l0aHViL2Nocm9tZS1leHRlbnNpb25zL3NraW4tdXJsL3NjcmlwdHMvbWFrZS1tYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvc2NyaXB0cy9tYWtlLW1hbmlmZXN0LnRzXCI7aW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYW5pZmVzdCBmcm9tICcuLi9zcmMvbWFuaWZlc3QnO1xuaW1wb3J0IGNvbG9yTG9nIGZyb20gJy4vY29sb3ItbG9nJztcblxuY29uc3QgeyByZXNvbHZlIH0gPSBwYXRoO1xuXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTWFuaWZlc3QoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21ha2UtbWFuaWZlc3QnLFxuICAgIGJ1aWxkRW5kKCkge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKG91dERpcikpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKG91dERpcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHJlc29sdmUob3V0RGlyLCAnbWFuaWZlc3QuanNvbicpO1xuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpKTtcblxuICAgICAgY29sb3JMb2coYFxcbk1hbmlmZXN0IGZpbGUgY29weSBjb21wbGV0ZTogJHttYW5pZmVzdFBhdGh9YCwgJ3N1Y2Nlc3MnKTtcbiAgICB9LFxuICB9O1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwic2tpbi1leHRlbnNpb25cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNocm9tZSBleHRlbnNpb24gdGVtcGxhdGUgd2l0aCBQcmVhY3QsIFRhaWx3aW5kIENTUywgVml0ZSBhbmQgVHlwZXNjcmlwdCBwcmVjb25maWd1cmVkLlwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aHV6aHV5dWxlL3NraW4tZXh0ZW5zaW9uLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImRldlwiOiBcIm5vZGVtb25cIixcbiAgICBcInRlc3RcIjogXCJqZXN0XCIsXG4gICAgXCJ0ZXN0OmNvdlwiOiBcImplc3QgLS1jb3ZlcmFnZVwiLFxuICAgIFwiZm9ybWF0XCI6IFwicHJldHRpZXIgc3JjLyBzY3JpcHRzLyAtLXdyaXRlXCJcbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDkuMS4xXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMjUuMlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzXCI6IFwiXjcuMTguNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcmVhY3QtanN4XCI6IFwiXjcuMjUuMlwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy4yNS4zXCIsXG4gICAgXCJAcHJlYWN0L3ByZXNldC12aXRlXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuNC44XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3ByZWFjdFwiOiBcIl4zLjIuNFwiLFxuICAgIFwiQHR5cGVzL2Nocm9tZVwiOiBcIl4wLjAuMjcwXCIsXG4gICAgXCJAdHlwZXMvamVzdFwiOiBcIl4yOS41LjEyXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMi40LjBcIixcbiAgICBcIkB0eXBlcy9xcmNvZGVcIjogXCJeMS41LjVcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjguMS4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjguMS4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgIFwiYmFiZWwtamVzdFwiOiBcIl4yOS43LjBcIixcbiAgICBcImVzbGludFwiOiBcIl45LjkuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmVhY3RcIjogXCJeMS40LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl42LjkuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjIuMVwiLFxuICAgIFwiamVzdFwiOiBcIl4yOS43LjBcIixcbiAgICBcImplc3QtZW52aXJvbm1lbnQtanNkb21cIjogXCJeMjkuNy4wXCIsXG4gICAgXCJqZXN0LXByZXNldC1wcmVhY3RcIjogXCJeNC4xLjFcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMy4xLjRcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQxXCIsXG4gICAgXCJwcmVhY3RcIjogXCJeMTAuMjMuMlwiLFxuICAgIFwicHJlYWN0LXJlbmRlci10by1zdHJpbmdcIjogXCJeNi41LjlcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJwcmV0dGllci1wbHVnaW4tdGFpbHdpbmRjc3NcIjogXCJeMC42LjZcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjUuNFwiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnclwiOiBcIl40LjIuMFwiXG4gIH0sXG4gIFwiZXNsaW50Q29uZmlnXCI6IHtcbiAgICBcImVudlwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogdHJ1ZSxcbiAgICAgIFwiZXM2XCI6IHRydWUsXG4gICAgICBcIm5vZGVcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJleHRlbmRzXCI6IFtcbiAgICAgIFwicHJlYWN0XCIsXG4gICAgICBcImVzbGludDpyZWNvbW1lbmRlZFwiLFxuICAgICAgXCJwbHVnaW46QHR5cGVzY3JpcHQtZXNsaW50L3JlY29tbWVuZGVkXCIsXG4gICAgICBcInBsdWdpbjpwcmV0dGllci9yZWNvbW1lbmRlZFwiXG4gICAgXSxcbiAgICBcInBhcnNlclwiOiBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIixcbiAgICBcInBhcnNlck9wdGlvbnNcIjoge1xuICAgICAgXCJlY21hRmVhdHVyZXNcIjoge1xuICAgICAgICBcImpzeFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJlY21hVmVyc2lvblwiOiBcImxhdGVzdFwiLFxuICAgICAgXCJzb3VyY2VUeXBlXCI6IFwibW9kdWxlXCJcbiAgICB9LFxuICAgIFwicGx1Z2luc1wiOiBbXG4gICAgICBcIkB0eXBlc2NyaXB0LWVzbGludFwiXG4gICAgXSxcbiAgICBcImdsb2JhbHNcIjoge1xuICAgICAgXCJjaHJvbWVcIjogXCJyZWFkb25seVwiXG4gICAgfSxcbiAgICBcInJ1bGVzXCI6IHtcbiAgICAgIFwicHJldHRpZXIvcHJldHRpZXJcIjogW1xuICAgICAgICBcIndhcm5cIixcbiAgICAgICAge1xuICAgICAgICAgIFwic2luZ2xlUXVvdGVcIjogdHJ1ZSxcbiAgICAgICAgICBcImpzeFNpbmdsZVF1b3RlXCI6IHRydWUsXG4gICAgICAgICAgXCJ0cmFpbGluZ0NvbW1hXCI6IFwiZXM1XCIsXG4gICAgICAgICAgXCJhcnJvd1BhcmVuc1wiOiBcImF2b2lkXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicXJjb2RlXCI6IFwiXjEuNS40XCJcbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvc3JjL21hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wZnpodS9EL2dpdGh1Yi9jaHJvbWUtZXh0ZW5zaW9ucy9za2luLXVybC9zcmMvbWFuaWZlc3QudHNcIjtpbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IE1hbmlmZXN0VHlwZSB9IGZyb20gJ0BzcmMvbWFuaWZlc3QtdHlwZSc7XG5cbmNvbnN0IG1hbmlmZXN0OiBNYW5pZmVzdFR5cGUgPSB7XG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXG4gIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXG4gIGRlc2NyaXB0aW9uOiBwYWNrYWdlSnNvbi5kZXNjcmlwdGlvbixcbiAgb3B0aW9uc19wYWdlOiAnc3JjL29wdGlvbnMvaW5kZXguaHRtbCcsXG4gIGJhY2tncm91bmQ6IHsgc2VydmljZV93b3JrZXI6ICdzcmMvYmFja2dyb3VuZC9pbmRleC5qcycgfSxcbiAgYWN0aW9uOiB7XG4gICAgZGVmYXVsdF9wb3B1cDogJ3NyYy9wb3B1cC9pbmRleC5odG1sJyxcbiAgICBkZWZhdWx0X2ljb246ICdpY29uLTM0LnBuZycsXG4gIH0sXG4gIHBlcm1pc3Npb25zOiBbXG4gICAgJ3N0b3JhZ2UnLFxuICAgICd0YWJzJyxcbiAgXSxcbiAgaWNvbnM6IHtcbiAgICAnMTI4JzogJ2ljb24tMTI4LnBuZycsXG4gIH0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFsnaHR0cDovLyovKicsICdodHRwczovLyovKicsICc8YWxsX3VybHM+J10sXG4gICAgICBqczogWydzcmMvY29udGVudC9pbmRleC5qcyddLFxuICAgIH0sXG4gIF0sXG4gIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xuICAgIHtcbiAgICAgIHJlc291cmNlczogWydpY29uLTEyOC5wbmcnLCAnaWNvbi0zNC5wbmcnXSxcbiAgICAgIG1hdGNoZXM6IFtdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYW5pZmVzdDtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Bmemh1L0QvZ2l0aHViL2Nocm9tZS1leHRlbnNpb25zL3NraW4tdXJsL3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wZnpodS9EL2dpdGh1Yi9jaHJvbWUtZXh0ZW5zaW9ucy9za2luLXVybC9zY3JpcHRzL2NvbG9yLWxvZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGZ6aHUvRC9naXRodWIvY2hyb21lLWV4dGVuc2lvbnMvc2tpbi11cmwvc2NyaXB0cy9jb2xvci1sb2cudHNcIjt0eXBlIENvbG9yVHlwZSA9ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCBrZXlvZiB0eXBlb2YgQ09MT1JTO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvckxvZyhtZXNzYWdlOiBzdHJpbmcsIHR5cGU/OiBDb2xvclR5cGUpIHtcbiAgbGV0IGNvbG9yOiBzdHJpbmcgPSB0eXBlIHx8IENPTE9SUy5GZ0JsYWNrO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdHcmVlbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2luZm8nOlxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdCbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdSZWQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgIGNvbG9yID0gQ09MT1JTLkZnWWVsbG93O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZyhjb2xvciwgbWVzc2FnZSk7XG59XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgUmVzZXQ6ICdcXHgxYlswbScsXG4gIEJyaWdodDogJ1xceDFiWzFtJyxcbiAgRGltOiAnXFx4MWJbMm0nLFxuICBVbmRlcnNjb3JlOiAnXFx4MWJbNG0nLFxuICBCbGluazogJ1xceDFiWzVtJyxcbiAgUmV2ZXJzZTogJ1xceDFiWzdtJyxcbiAgSGlkZGVuOiAnXFx4MWJbOG0nLFxuICBGZ0JsYWNrOiAnXFx4MWJbMzBtJyxcbiAgRmdSZWQ6ICdcXHgxYlszMW0nLFxuICBGZ0dyZWVuOiAnXFx4MWJbMzJtJyxcbiAgRmdZZWxsb3c6ICdcXHgxYlszM20nLFxuICBGZ0JsdWU6ICdcXHgxYlszNG0nLFxuICBGZ01hZ2VudGE6ICdcXHgxYlszNW0nLFxuICBGZ0N5YW46ICdcXHgxYlszNm0nLFxuICBGZ1doaXRlOiAnXFx4MWJbMzdtJyxcbiAgQmdCbGFjazogJ1xceDFiWzQwbScsXG4gIEJnUmVkOiAnXFx4MWJbNDFtJyxcbiAgQmdHcmVlbjogJ1xceDFiWzQybScsXG4gIEJnWWVsbG93OiAnXFx4MWJbNDNtJyxcbiAgQmdCbHVlOiAnXFx4MWJbNDRtJyxcbiAgQmdNYWdlbnRhOiAnXFx4MWJbNDVtJyxcbiAgQmdD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LEVBQ1IsU0FBUztBQUNYOzs7QUgvQ0EsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxFQUFFLFFBQVEsSUFBSTtBQUVwQixJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNLFFBQVE7QUFFakMsU0FBUixlQUFnQztBQUNyQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQ1QsVUFBSSxDQUFJLGNBQVcsTUFBTSxHQUFHO0FBQzFCLFFBQUcsYUFBVSxNQUFNO0FBQUEsTUFDckI7QUFFQSxZQUFNLGVBQWUsUUFBUSxRQUFRLGVBQWU7QUFFcEQsTUFBRyxpQkFBYyxjQUFjLEtBQUssVUFBVSxrQkFBVSxNQUFNLENBQUMsQ0FBQztBQUVoRSxlQUFTO0FBQUEsK0JBQWtDLFlBQVksSUFBSSxTQUFTO0FBQUEsSUFDdEU7QUFBQSxFQUNGO0FBQ0Y7OztBRHBCQSxPQUFPLFVBQVU7QUFKakIsSUFBTUMsb0NBQW1DO0FBTXpDLElBQU0sTUFBTUMsU0FBUUMsbUNBQVcsS0FBSztBQUNwQyxJQUFNLFlBQVlELFNBQVEsS0FBSyxRQUFRO0FBQ3ZDLElBQU1FLFVBQVNGLFNBQVFDLG1DQUFXLE1BQU07QUFDeEMsSUFBTSxZQUFZRCxTQUFRQyxtQ0FBVyxRQUFRO0FBRTdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLGFBQWEsR0FBRyxLQUFLLEdBQUUsT0FBTyxDQUFDO0FBQUEsRUFDekM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQUFDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxTQUFTRixTQUFRLEtBQUssV0FBVyxVQUFVO0FBQUEsUUFDM0MsWUFBWUEsU0FBUSxLQUFLLGNBQWMsVUFBVTtBQUFBLFFBQ2pELE9BQU9BLFNBQVEsS0FBSyxTQUFTLFlBQVk7QUFBQSxRQUN6QyxRQUFRQSxTQUFRLEtBQUssVUFBVSxZQUFZO0FBQUEsUUFDM0MsVUFBVUEsU0FBUSxLQUFLLFlBQVksWUFBWTtBQUFBLFFBQy9DLFNBQVNBLFNBQVEsS0FBSyxXQUFXLFlBQVk7QUFBQSxNQUMvQztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLFdBQVMsT0FBTyxNQUFNLElBQUk7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIm91dERpciJdCn0K
