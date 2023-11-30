module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
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
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }],
    complexity: ['error', 20]
  }
}
