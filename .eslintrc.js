module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    node: true,
    mocha: true,
  },

  globals: {
    __DEV__: false,
    __PROD__: false,
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webstorm.config.js',
        'config-index': 1,
      },
    },
  },


  rules: {
    /* eslint-plugin-import */
    // 'import/extensions': [2, 'never'], // 校验文件扩展名
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [1, {
      devDependencies: [
        'tools/**',
        'config/**',
        './*.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
    }],
    /* eslint-plugin-react */
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.less', '.css'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,

    'import/no-named-as-default': 0,

    /* core */
    'valid-jsdoc': 0, // jsdoc规则
    'arrow-body-style': 0,
    'func-names': 0,
    'implicit-arrow-linebreak': 0,
    'max-len': [1, 120],
    'no-param-reassign': 0,
    'no-unexpected-multiline': 2,
    'no-useless-escape': 0,
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-nested-ternary': 0, // 禁止使用嵌套的三目运算
    'no-redeclare': 2, // 禁止重复声明变量
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-undef': 1, // 不能有未定义的变量
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-use-before-define': 2, // 未定义前不能使用
    'no-var': 0, // 禁用var，用let和const代替
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'brace-style': [1, '1tbs'], // 大括号风格
    'default-case': 2, // switch语句最后必须有default
    'dot-notation': [0, { allowKeywords: true }], // 避免不必要的方括号
    eqeqeq: 2, // 必须使用全等
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    'guard-for-in': 0, // for in循环要用if语句过滤
    'handle-callback-err': 0, // nodejs 处理错误
    quotes: [1, 'single'], // 引号类型 `` "" ''
    radix: 2, // parseInt必须指定第二个参数
    'id-match': 0, // 命名检测
    'require-yield': 0, // 生成器函数必须有yield
    semi: [2, 'always'], // 语句强制分号结尾
    'semi-spacing': [0, { before: false, after: true }], // 分号前后空格
    'sort-vars': 0, // 变量声明时排序
    strict: 2, // 使用严格模式
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, // 必须使用合法的typeof的值
    'no-catch-shadow': 2, // 禁止catch子句参数与外部作用域变量同名
    'object-curly-newline': 0,
    'prefer-arrow-callback': 0,
    // semi: [2, 'never'],
    'linebreak-style': [0, 'error', 'windows'],
    // 关闭语句强制分号结尾
    // semi: [0],
    // 空行最多不能超过10行
    'no-multiple-empty-lines': [0, { max: 10 }],
    // 关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    camelcase: 0, // 1,2表示强制驼峰法命名
    'no-return-assign': [2, 'except-parens'],
  },

  overrides: [
    {
      files: '**/*.test.js',
      globals: {
        expect: false,
        sinon: false,
        shallow: false,
        mount: false,
        render: false,
      },
      rules: {
        /* https://github.com/eslint/eslint/issues/2102 */
        'no-unused-expressions': 0,
      },
    },
  ],
};
