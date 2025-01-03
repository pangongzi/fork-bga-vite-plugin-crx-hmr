# bga-vite-plugin-crx-hmr

[![npm](https://img.shields.io/npm/v/@bgafe/vite-plugin-crx-hmr.svg) ![npm](https://img.shields.io/npm/dm/@bgafe/vite-plugin-crx-hmr.svg)](https://www.npmjs.com/package/@bgafe/vite-plugin-crx-hmr)

用于开发 Chromium manifest v3 插件的 Vite 热更新插件

## 功能介绍

1. 主要提供开发期间的热重载能力，监听文件变化后自动编译浏览器插件，并通知插件 background（Service Worker）自动重新加载、自动刷新页面
2. 该 Vite 插件内部添加了浏览器插件开发常用多入口配置
3. 已自测该 Vite 插件支持使用 React 和 Vue 来开发浏览器插件

## 基本使用

1. 安装依赖

```shell
pnpm add @bgafe/vite-plugin-crx-hmr -D
```

2. 在 vite.config.ts 中使用 crxHmrPlugin

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import crxHmrPlugin from '@bgafe/vite-plugin-crx-hmr'

export default defineConfig(async ({ mode }) => {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    plugins: [react(), crxHmrPlugin({ mode, isDev })],
  }
})
```

3. 根据截图里的说明信息新建你业务所需的入口、新建并配置 public/manifest.json、配置 package.json 的 scripts

![usage](https://github.com/bingoogolapple/bga-vite-plugin-crx-hmr/assets/8949716/55344f19-4c68-4032-9d98-f163225eb82b)

## 扩展配置

1. 如果要新增 iife 脚本，直接新建对应入口，在 package.json 的 script 中添加相应的 build:xxx 即可

2. 插件内部针对 build:page（构建所有页面入口命令）预置了这些入口「newtab、history、bookmarks、popup、options、side-panel、devtools、devtools-panel、elements-sidebar-pane、recorder、update-version、sandbox、main」

![usage](https://github.com/user-attachments/assets/3fa8e298-a0c6-4fde-aaef-8e80bc6b89e2)

如果这些默认页面入口名称不能满足你的业务需求，可在 vite.config.ts 中初始化 crxHmrPlugin 时通过 pageInput 参数指定新的页面入口

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import crxHmrPlugin from '@bgafe/vite-plugin-crx-hmr'
import { resolve } from 'path'

export default defineConfig(async ({ mode }) => {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    plugins: [
      react(),
      crxHmrPlugin({
        mode,
        isDev,
        // 通过 pageInput 增加新的页面入口
        // 仅需指定页面名称记录，例如指定 ['page1']，则插件内部会自动添加 resolve(process.cwd(), 'src/entries/page1/page1.html')
        pageInput: ['page1', 'page2'],
      }),
    ],
  }
})
```

## 作者联系方式

| 个人主页 | 邮箱 |
| ------------- | ------------ |
| <a  href="https://www.bingoogolapple.cn" target="_blank">bingoogolapple.cn</a>  | <a href="mailto:bingoogolapple@gmail.com" target="_blank">bingoogolapple@gmail.com</a> |

| 个人微信号 | 微信群 | 公众号 |
| ------------ | ------------ | ------------ |
| <img width="180" alt="个人微信号" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/BGAQrCode.png"> | <img width="180" alt="微信群" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/WeChatGroup1QrCode.jpg"> | <img width="180" alt="公众号" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/GongZhongHao.png"> |

| 个人 QQ 号 | QQ 群 |
| ------------ | ------------ |
| <img width="180" alt="个人 QQ 号" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/BGAQQQrCode.jpg"> | <img width="180" alt="QQ 群" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/QQGroup1QrCode.jpg"> |

## 打赏支持作者

如果您觉得 BGA 系列开源库或工具软件帮您节省了大量的开发时间，可以扫描下方的二维码打赏支持。您的支持将鼓励我继续创作，打赏后还可以加我微信免费开通一年 [上帝小助手浏览器扩展/插件开发平台](https://github.com/bingoogolapple/bga-god-assistant-config) 的会员服务

| 微信 | QQ | 支付宝 |
| ------------- | ------------- | ------------- |
| <img width="180" alt="微信" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/donate-wechat.jpg"> | <img width="180" alt="QQ" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/donate-qq.jpg"> | <img width="180" alt="支付宝" src="https://github.com/bingoogolapple/bga-god-assistant-config/raw/main/images/donate-alipay.jpg"> |

## 作者项目推荐

* 欢迎您使用我开发的第一个独立开发软件产品 [上帝小助手浏览器扩展/插件开发平台](https://github.com/bingoogolapple/bga-god-assistant-config)
