module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals"
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "EXAMPLE_PATH" }]
  },
};
