import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

import StyleLintPlugin from 'stylelint-webpack-plugin';
import { DIST, SRC, APP_TITLE, resolvePath } from './paths';
import GLOBALS from './envVariables';
import rules from './rules';
import plugins from './rules/plugin';

export default {
  mode: 'development',
  context: SRC,

  entry: [
    'react-hot-loader/patch',
    // '@babel/polyfill',
    // 'whatwg-fetch',
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    './main',
  ],

  output: {
    filename: '[name].js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.less', '.css'],
    alias: {
      '@': resolvePath('src'),
      '@assets': resolvePath('src/assets'),
      '@page': resolvePath('src/page'),
      '@components': resolvePath('src/components'),
      '@constants': resolvePath('src/constants'),
      '@api': resolvePath('src/redux/api'),
      '@router': resolvePath('src/router'),
      '@action': resolvePath('src/redux/action'),
      '@utils': resolvePath('src/utils'),
      '@history': resolvePath('src/redux/history.js'),
    },
  },

  optimization: {
    minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
    noEmitOnErrors: true,
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      title: APP_TITLE,
      favicon: 'favicon.ico',
      eruda: '<script src="https://cdn.bootcss.com/eruda/1.5.4/eruda.min.js"></script>',
    }),
    new SpriteLoaderPlugin({ plainSprite: true }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css', '**/*.less'],
      emitErrors: false,
      fix: true,
      cache: true,
    }),
    ...plugins,
  ],

  devtool: 'eval-source-map',
  target: 'web',

  performance: {
    hints: false,
  },
};
