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
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'no-unreachable': 1,
    'no-unused-vars': 1,
    'no-debugger': 1,
    'unicorn/prefer-module': 0
  }
}
