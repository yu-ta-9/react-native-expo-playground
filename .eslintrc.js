module.exports = {
  root: true,
  env: { 'react-native/react-native': true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks', 'prettier', 'unused-imports', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    eqeqeq: ['error', 'always'],
    'prefer-template': 'error',
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'index', 'type', 'sibling', 'parent'],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            fixWith: 'object',
            message: 'Use Record<string, unknown> or EmptyObject instead',
          },
          object: {
            fixWith: 'object',
            message: 'Use Record<string, unknown> or EmptyObject instead',
          },
        },
      },
    ],
  },
  settings: {
    react: { version: 'detect' }, // React version. "detect" automatically picks the version you have installed.
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },
      typescript: { alwaysTryTypes: true, config: 'tsconfig.json' },
    },
  },
};
