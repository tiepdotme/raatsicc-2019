module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/no-unused-vars": ["warn"],
    "vue/require-prop-types": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // https://github.com/prettier/eslint-plugin-prettier/issues/94
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
