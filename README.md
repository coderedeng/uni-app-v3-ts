# 🌈 uni-app Vue3 Vite4 pinia2 TypeScript

<p align="center">
    <img src="https://img.shields.io/badge/-Vue3.2-34495e?logo=vue.js" />
    <img src="https://img.shields.io/badge/-Vite4-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia2-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript4.9-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint8-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm7-F69220?logo=pnpm&logoColor=white" />
</p>

## 简介

- uni-app Vue3 Vite4 pinia2 TypeScript
- cli创建的Vue3/Vite项目 与 使用HBuilderX导入插件 的包有差异,请直接导入此项目。
- 访问[uniapp插件](https://ext.dcloud.net.cn/plugin?id=8559)


### 说明
- 框架完全基于Vue3 SFC `<script setup>` 写法,不支持Vue2;
- 可用于学习与交流;
- 目前测试H5、微信小程序,APP(Android),支付宝小程序通过;
- 其他平台暂未测试,后续会增加;
- 如发现问题或建议可在评论区留言, 或提[Issues](https://gitee.com/h_mo/uniapp-vue3-vite-ts-template/issues)及[PR](https://gitee.com/h_mo/uniapp-vue3-vite-ts-template/pulls),会及时处理;
- 如有需求亦可在评论区留言,或在此项目基础上增加;
-   [代码规范 & 详细解释 husky、prettier、eslint、lint-staged 的作用和使用](https://blog.csdn.net/cookcyq__/article/details/125457031)

## 特性

- **最新技术栈**：使用 Vue3/Vite4/pinia ,TypeScript 等前端前沿技术开发;
- **[Unocss](https://github.com/unocss/unocss)**: 原子化CSS, [iconify](https://github.com/iconify/iconify)图标
- **Eslint/Prettier**: 规范代码格式,统一编码;
- **路由拦截**: 基于uni.addInterceptor进行路由拦截;
- **请求拦截**: 核心使用 [luch-request](https://ext.dcloud.net.cn/plugin?id=392),支持请求和响应拦截等;
- **缓存加密**: 使用AES加密缓存,可设置区分在开发或生成环境中是否加密;

## 目录结构

```shell
.
├─ src
│   ├─assets # 静态资源目录
│   │
│   ├─components # 组件目录
│   │   ├─ BasicButton
│   │   │    ├─index.vue
│   │   │    └─prpos.ts
│   │   └─...
│   │ 
│   ├─enums # 枚举/常量
│   │   ├─ cacheEnum.ts
│   │   └─...
│   │ 
│   ├─pages # 页面
│   │   ├─ index
│   │   │    └─index.vue
│   │   └─...
│   │ 
│   ├─services # 接口相关
│   │   ├─ api # api  
│   │   │    ├─auth.ts
│   │   │    └─...
│   │   │
│   │   └─ model # 数据模型  
│   │        ├─authModel.d.ts
│   │        └─...
│   │ 
│   ├─settings # 设置
│   │   └─ encryptionSetting # 加密设置  
│   │
│   ├─state # 状态管理模式(pinia)
│   │   ├─ modules # 数据模块  
│   │   │    ├─auth.ts
│   │   │    └─...
│   │   │
│   │   └─ index.ts
│   │ 
│   ├─static # 静态公共文件
│   │   ├─ images # 图片  
│   │   │    ├─avatar.png
│   │   │    └─...
│   │   │
│   │   └─ ...
│   │   
│   ├─types # 类型文件
│   │   ├─ http.d.ts
│   │   └─ ...
│   │
│   └─utils # 工具类
│       ├─ cache # 缓存相关目录
│       ├─ http  # request相关目录
│       ├─ interceptors  # 拦截器相关目录
│       └─ ...
│
├─ .env
├─ .env.development
├─ .env.production
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ favicon.ico
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tree.txt
├─ tsconfig.json
└─ vite.config.ts

```



## 安装使用

- 安装依赖

```bash
pnpm install
```

- 运行

```bash
# 其他端请查看 package.json script
pnpm dev:h5
```

- 打包

```bash
# 其他端请查看 package.json script
pnpm build:h5
```

- 更新依赖到最新（新手请忽略）

```bash
pnpm up
# 打开HBuilder X alpha桌面程序-->点击上面的帮助-->历次更新说明-->获取最新版本号（如：3.7.2.20230217-alpha）
npx @dcloudio/uvm 3.7.2.20230217-alpha
```
## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中