/*
   browser-sync 配置请看
   http://www.browsersync.cn/docs/options/#option-browser
*/

/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */

import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import os from 'os';
import chalk from 'chalk';

import webpackConfig from '../config/webpack/webpack.config-dev';


const env = process.env.NODE_ENV;
const bs = browserSync.create();
const compiler = webpack(webpackConfig);

const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    all: false,
    timings: true,
    warnings: true,
    errors: true,
    colors: true,
    chunks: false,
  },
  debug: true,
  hot: true,
  lazy: false,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  noInfo: false, // 显示无信息到控制台（仅警告和错误
};

/* 代理中间件
 * 具体只用文档参考 https://www.jianshu.com/p/a248b146c55a
*/

// 获取本地真实ip,该函数是可以使用的
function getIP() { // eslint-disable-line
  const ifaces = os.networkInterfaces();
  let ip = '127.0.0.1';
  for (const dev in ifaces) { // eslint-disable-line
    if (ifaces.hasOwnProperty(dev)) { // eslint-disable-line
      ifaces[dev].forEach((details) => { // eslint-disable-line
        if (ip === '127.0.0.1' && details.family === 'IPv4') {
          ip = details.address;
        }
      });
    }
  }
  return ip;
}

bs.init({
  server: {
    baseDir: ['src'],

    middleware: [
      webpackDevMiddleware(compiler, devMiddlewareOptions),
      webpackHotMiddleware(compiler),
    ],
  },
  // https: true,
  port: 3000,

  ui: {
    port: 3001,
  },
  // 定义host
  // host: getIP(),
  // 项目启动时使用定义的host
  // open: 'external',
  open: false, // 该启动为localhost,设置不启动，使用插件启动127.0.0.1得方式，不然api调用不了
  reloadOnRestart: true, // 刷新每个浏览器时Browsersync重新启动。
  single: true,
  // files: ['**'], 这一行打开速度会很慢
});

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `
[Browsersync]  Browsersync server is running.
[Browsersync]  NODE_ENV is set to ${chalk.white.bold(env)}.
[Browsersync]  Access URLs are listed below.
    `
  ));
});
