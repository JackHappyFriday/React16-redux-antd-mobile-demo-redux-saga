/**
 * @description:
 * @author jack
 * @date 2019/4/16
 *
  // 这两个插件只是在测试阶段，官方对他们期望很大，不过暂时不稳定，不建议使用
  import PrepackWebpackPlugin from 'prepack-webpack-plugin';
  import ClosureCompilerPlugin from 'webpack-closure-compiler';
  new ClosureCompilerPlugin({
    compiler: {
      language_in: 'ECMASCRIPT6',
      language_out: 'ECMASCRIPT5',
      compilation_level: 'ADVANCED',
    },
    concurrency: 3,
  }),
  new PrepackWebpackPlugin({}),
*/

import webpack from 'webpack';

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const supportedLocales = ['en-US', 'zh-TW', 'zh-CN', 'ja'];

export default [
  new webpack.ContextReplacementPlugin(
    /date\-fns\/esm\/locale\/[\/\\]/,
    new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`),
  ),
  new ProgressBarPlugin([
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 80,
    }),
  ]),
  new OpenBrowserPlugin({ url: 'http://127.0.0.1:3000' }),

];
