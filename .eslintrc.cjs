module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:prettier/recommended",
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': "off",
    'react/react-in-jsx-scope': "off",
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
    curly: [2, 'all']
  },
  settings: {
    react: {
      version: 'detect'
    },
   }
};
