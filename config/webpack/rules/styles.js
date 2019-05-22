/* post-css settings are in postcss.config.js */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { SRC } from '../paths';
import { isProd, isDev } from '../envVariables';

const autoprefixer = require('autoprefixer');

const theme = require('../../../package').theme; // eslint-disable-line

const postCssPlugin = () => {
  return [
    require('postcss-flexbugs-fixes'),  // eslint-disable-line
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
    require('postcss-plugin-px2rem')({ rootValue: 100 }), // eslint-disable-line
    require('perfectionist')({}), // eslint-disable-line
  ];
};

export default [
  {
    test: /\.module\.css$/, // xxx.module.css文件命名,会开启css module模式
    include: SRC,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]',
          sourceMap: isDev,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDev,
          ident: 'postcss',
          plugins: postCssPlugin, // postcss plugins end
        },
      },
    ],
  },

  {
    test: /^((?!\.module\.).)*\.css$/, // 非module字符文件命名，不会开启css module模式
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDev,
          ident: 'postcss',
          plugins: postCssPlugin, // postcss plugins end
        },
      },
    ],
  },
  {
    test: /\.(less)$/,
    include: /node_modules/,
    use: [
      { loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: postCssPlugin, // postcss plugins end
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: isDev,
          modifyVars: theme,
          javascriptEnabled: true,
        },
      },
    ],
  },
  {
    test: /\.(less)$/,
    exclude: /node_modules/,
    use: [
      { loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader' },
      { loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]',
          sourceMap: isDev,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: postCssPlugin, // postcss plugins end
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: isDev,
          modifyVars: theme,
          javascriptEnabled: true,
        },
      },
    ],
  },
];
