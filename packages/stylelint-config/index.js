module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'block-no-empty': [true,
      { severity: 'warning' }
    ],
    // eslint-disable-next-line unicorn/no-null
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ]
  }
}
