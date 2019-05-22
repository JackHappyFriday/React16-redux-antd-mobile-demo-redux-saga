# webpack4-React16-redux-antd-mobile2-demo-redux-saga-iconfont

## 如果你觉得不错，请送个我一个star(❤)

:rocket: Modern starter kit for React projects.
>1.React(16.8)  
2.redux  
3.antd-mobile（最新版16.8）  
4.组件封装demo(封装部分组件，可以直接使用)  
5.多语言支持（react-intl-universal，即所谓的多语言可以用在任何地方，而react-intl只能用在component中 ) 
6.redux-saga  
7.react-loadable 实现异步加载  
8.css module的使用（再也不用担心css出现混搅）  
9.iconfont集成使用，再也不用担心没有可用的图标  
10.图片预览（支持放缩）  
11.简单的使用demo     
12.date-fns替换了moment的使用，减小文件打包体积  
13.…… 

## 别名说明
 - 需要在Webstorm中配置根目录中的webstorm.config.js，来识别别名，不然Webstorm会提示警告或者错误 (Mac举例)
 > **`webstorm -> Preferences -> Languages & FrameWorks -> JavaScript -> webpack `** 将上面的文件配置到该目录

## Features

- **Every** dependency in project devDependencies is listed in the README and has a description with it's **purpose** explanation
> *NOTE: Work in progress. See [DEMO](#demo)*

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) installed. Optionally you can install and use [Yarn](https://yarnpkg.com/) as package manager, but it's possible to use **npm** instead, which ships with **Node.js**.

## Installation

- 1.得到当前镜像地址

 >* **`npm get registry`**
  >* $~: https://registry.npmjs.org/

 >* 将npm设成淘宝镜像(加快插件下载速度，非必须)

> **`npm config set registry http://registry.npm.taobao.org/`**

> **`yarn config set registry http://registry.npm.taobao.org/`**


- 2.换成原来的镜像

> **`npm config set registry https://registry.npmjs.org/`**

- Run **`yarn install`** (or **`npm install`**) to install project dependencies

## Usage

- Run **`npm run dev -s`** (or **`yarn dev`**) to start development server

  > *NOTE: The `-s` flag is optional. It enables silent mode, which suppresses unnecessary messages from npm, and so we get cleaner output.*
  
- Stop development server

  >  *NOTE: In most cases it could be done by hitting `Ctrl+C` in the terminal*


- Run **`npm run build -s`** (or **`yarn build`**) to bundle project.
- Run **`npm start -s`** (or **`yarn start`**) to serve files from **dist** folder, so you can test production version of the app.
- If build was successful, `webpack-bundle-analyzer` will start to serve report file at `http://127.0.0.1:3000`. You can go to that address in the browser to look at and analyse bundle structure.

## Acknowledgements

This project is inspired by Cory House [coryhouse/react-slingshot](https://github.com/coryhouse/react-slingshot)

Some ideas are taken from following starter kits:
- Michael Pevzner [mihap/webpack-react-hot-bolerplate](https://github.com/mihap/webpack-react-hot-bolerplate)
- Dmitriy Haponov [sunstorymvp/playground](https://github.com/sunstorymvp/playground)

Juho Vepsäläinen ["SurviveJS - Webpack"](http://survivejs.com/webpack/introduction/) book was a huge help.


## DEMO
- [ ] Add an demo app that will utilize such technologies as:
  - [ ] react-router v4 react-router-dom
  - [ ] redux
  - [ ] redux-saga
  - [ ] iconfont
  - [ ] react-loadable
  - [ ] ……
- [ ] Write test suites that will demonstrate all test tools, which are used in the project, in action
