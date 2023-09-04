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
  plugins: ['babel'],
  rules: {
    camelcase: 0,
    'babel/semi': 1,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'max-len': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/interactive-supports-focus': 0,
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
    'react/no-multi-comp': 0,
    semi: 'error',
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'react/jsx-fragments': 0,
    'no-console': 'warn',
  },
};
