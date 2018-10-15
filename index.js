module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['class-property'],
  rules: {
    camelcase: 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': false,
    'react/jsx-filename-extension': false,
    'react/no-array-index-key': false,
    'max-len': 0,
    'react/prop-types': false,
    'react/prefer-stateless-function': false,
    'jsx-a11y/click-events-have-key-events': false,
    'jsx-a11y/no-static-element-interactions': false,
    'jsx-a11y/interactive-supports-focus': false,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/no-multi-comp': false,
    skipBlankLines: true,
    semi: 'error',
    'arrow-body-style': 0,
    'no-console': 'warn',
  },
};
