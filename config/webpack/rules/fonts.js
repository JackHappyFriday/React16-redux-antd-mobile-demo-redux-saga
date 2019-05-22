import path from 'path';

import { SRC } from '../paths';
import { isProd } from '../envVariables';

export default [
  {
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: path.join(
            '[path]',
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
          publicPath: '../', /* 替换CSS引用的图片路径 可以替换成爱拍云上的路径 */
          // outputPath: './', /* 生成之后存放的路径 */
        },
      },
    ],
  },
];
