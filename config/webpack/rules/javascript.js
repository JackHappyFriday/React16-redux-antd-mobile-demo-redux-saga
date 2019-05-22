import { SRC } from '../paths';
import { isProd, isCover, isTest } from '../envVariables';

let targets = {
  browsers: [
    'last 2 versions',
    'not dead',
    'not Explorer 11',
    'not ExplorerMobile 11',
  ],
};

if (isTest) {
  targets = {
    node: 'current',
  };
}

const rules = [
  {
    test: /\.jsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
          compact: true,
          cacheDirectory: true,
          cacheCompression: false,
          sourceMaps: true,
          presets: [
            ['@babel/preset-env', {
              targets,
              modules: false,
              // debug: true,
              useBuiltIns: 'usage',
              shippedProposals: true,
            }],
            '@babel/preset-react',
          ],
          plugins: [
            /* https://github.com/gaearon/react-hot-loader#getting-started */
            'react-hot-loader/babel',

            // Stage 0
            '@babel/plugin-proposal-function-bind',

            // Stage 1
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-logical-assignment-operators',
            ['@babel/plugin-proposal-optional-chaining', { loose: false }],
            ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
            ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
            '@babel/plugin-proposal-do-expressions',

            // Stage 2
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',

            // Stage 3
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            ['@babel/plugin-proposal-class-properties', { loose: false }],
            '@babel/plugin-proposal-json-strings',
          ],
        },
      },
    ],
  },
];

if (isProd) {
  rules.push({
    test: /\.jsx?$/,
    include: SRC,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  });
}

/* https://github.com/zinserjan/mocha-webpack/blob/master/docs/guides/code-coverage.md */
if (isCover) {
  rules.unshift({
    test: /\.jsx?$/,
    include: SRC,
    enforce: 'post',
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
  });
}

export default rules;
