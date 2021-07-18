module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
};
