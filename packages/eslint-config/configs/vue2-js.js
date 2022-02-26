module.exports = {
  ...require('./base.js'),
  env: {
    ...require('./base.js').env,
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    ...require('./base.js').rules,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }]
  },
  overrides: [
    {
      files: ['**.js'],
      extends: [
        'standard',
        'plugin:unicorn/recommended'
      ]
    }
  ]
}
