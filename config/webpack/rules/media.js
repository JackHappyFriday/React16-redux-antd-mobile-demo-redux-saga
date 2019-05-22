import path from 'path';

import { SRC } from '../paths';
import { isProd } from '../envVariables';

const svgDirs = [
  path.resolve(`${SRC}/assets/images`), // 2. 自己私人的 svg 存放目录
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件, 现在发现不能加这行，否则样式有问他
];

export default [
  {
    test: /\.(gif|jpe?g|png|webp)$/i,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: path.join(
            '[path]',
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
          limit: 8096,
        },
      },
    ],
  },
  {
    test: /\.(svg)$/i,
    include: svgDirs, // SRC
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          // extract: true,
          spriteFilename: isProd ? 'icons.[hash].svg' : 'icons.svg',
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { removeTitle: true },
            { convertColors: { shorthex: false } },
            { convertPathData: false },
          ],
        },
      },
    ],
  },

  {
    test: /\.(mp4|m4a|webm|ogv|oga|ogg|mp3|wav)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: path.join(
            '[path]',
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
];
