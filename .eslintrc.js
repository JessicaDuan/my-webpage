module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    '@typescript-eslint/explicit-function-return-type': [0, { allowTypedFunctionExpressions: true }],
    '@typescript-eslint/explicit-module-boundary-types': [0, { allowTypedFunctionExpressions: true }],
    'react/state-in-constructor': 0,
    'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never' }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-nested-ternary': 0,
    'react/static-property-placement': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'prefer-promise-reject-errors': 0,
    'react/jsx-one-expression-per-line': 0,
    'prefer-destructuring': [2, { array: false }],
    'no-console': 1,
    'no-unused-vars': 1,
    camelcase: 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-undef': 0,
    'react/jsx-wrap-multilines': ['error', { arrow: true, return: true, declaration: true }],
    'no-empty': 1,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/require-default-props': 0,
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-empty-function': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
};
