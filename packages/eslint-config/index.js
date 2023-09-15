module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:unicorn/recommended'
  ],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'no-unreachable': 1,

    // no-unused-vars 忽略下划线校验
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_$',
        varsIgnorePattern: '^_$',
        caughtErrorsIgnorePattern: '^_$'
      }
    ],
    'no-debugger': 1,
    'unicorn/prefer-module': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/require-number-to-fixed-digits-argument': 0
  }
}
