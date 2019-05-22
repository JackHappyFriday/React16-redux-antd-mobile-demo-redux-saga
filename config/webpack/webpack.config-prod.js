import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin' // eslint-disable-line
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';



import { APP_TITLE, DIST, resolvePath, SRC } from './paths';
import GLOBALS from './envVariables';
import rules from './rules';
import plugins from './rules/plugin';

const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;


// const glob = require('glob-all');
// const path = require('path');

// const PurifyCSSPlugin = require('purifycss-webpack');

export default {
  mode: 'production',
  context: SRC,

  entry: [
    '@babel/polyfill',
    'whatwg-fetch',
    './main',
  ],

  output: {
    filename: 'js/[name].[chunkhash].js',
    path: DIST,
    publicPath: './',
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
    minimize: true,
    minimizer: [
      // 4.26版本 移除使用UglifyJsPlugin插件改用TerserPlugin插件
      // new UglifyJsPlugin({
      //   test: /\.jsx?$/i,
      //   cache: true,
      //   parallel: true, // 开启并行压缩，充分利用cpu
      //   extractComments: true, // 移除注释
      //   uglifyOptions: {
      //     compress: {
      //       unused: true,
      //       warnings: false,
      //       drop_debugger: true,
      //     },
      //     output: {
      //       comments: false,
      //     },
      //   },
      // }),
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            ecma: 5,
            comparisons: false,
            inline: 2,
          },
          parse: {
            ecma: 8,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCssAssetsPlugin({
        /* default css processor is cssnano */
        assetNameRegExp: /\.(css|less)$/g,
        cssProcessorOptions: {
          preset: 'default',
          safe: true,
          autoprefixer: {
            disable: true,
          }, // 这里是个大坑，稍后会提到
          mergeLonghand: false,
          discardComments: {
            removeAll: true, // 移除注释
          },
        },
        canPrint: true,
      }),
    ],
    moduleIds: 'hashed',
    chunkIds: 'size',
    sideEffects: true,
    noEmitOnErrors: true,
    runtimeChunk: true,
    nodeEnv: 'production',
    concatenateModules: true,
    // 方式 1
    // splitChunks: {
    //   chunks: 'all',
    // },

    // 方式 2
    // 下面设置是合并了所有的css 和 js 导致verdor文件夹比较大 暂时不使用
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 30000,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   name: true,
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //     main: {
    //       chunks: 'all',
    //       minChunks: 2,
    //       reuseExistingChunk: true,
    //       enforce: true,
    //     },
    //   },
    // },

    // 方式 3
    splitChunks: {
      chunks: 'async', // 异步加载chunk initial | async | all
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~', // 文件名中chunk分隔符
      name: true,
      cacheGroups: {
        default: false,
        vendors: false,
        // vendors: {
        //   chunks: 'async',
        //   test: /[\\/]node_modules[\\/]/, //
        //   name: 'vendor',
        //   priority: -10,
        // },
        // default: {
        //   minChunks: 2, // 最小的共享chunk数
        //   priority: -20,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          enforce: true,
          priority: 10,
          // name: 'vendor',
        },
        common: {
          chunks: 'all',
          minChunks: 2,
          name: 'common',
          enforce: true,
          priority: 5,
        },
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: 'favicon.ico',
      title: APP_TITLE,
      eruda: '<script src="https://cdn.bootcss.com/eruda/1.5.4/eruda.min.js"></script>',
      inject: true,
      // hash: true,
      chunksSortMode: 'none',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
      minFileSize: 10000,
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
      pngquant: {
        quality: '70-80',
      },
      optipng: {
        optimizationLevel: 6,
      },
      svgo: null,
    }),
    new CompressionPlugin({
      test: /\.(js|html|css|jsx)$/,
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      // analyzerMode: 'static',
      // reportFilename: 'bundle-analyzer-report.html',
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
    new WebpackDeepScopeAnalysisPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    // Make sure this is after MiniCssExtractPlugin! 有可能会勿删了其他的css 20190320 Add
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync([
    //     path.join(__dirname, '../../src/index.html'),
    //     path.join(__dirname, '../../src/*/*.jsx'),
    //     path.join(__dirname, '../../src/*/*.js'),
    //   ]),
    // }),
  ],

  devtool: false,
  target: 'web',

  performance: {
    hints: 'warning',
  },
};
