module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ["standard-with-typescript", "plugin:react/recommended"],
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
  },
};
