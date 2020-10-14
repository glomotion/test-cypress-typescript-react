module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    "no-unused-expressions": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    "react/jsx-props-no-spreading": 0,
    // @TODO: HOLY-SH*T ESlint "indent" is a VERY hard rule to get just right!
    // I wish there was a setting here to have it match what prettier 
    // does automatically, and leave it at that. :(
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1,
    //     flatTernaryExpressions: true,
    //     offsetTernaryExpressions: true,
    //   },
    // ],
  },
};
