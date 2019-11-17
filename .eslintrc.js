module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true //ignore eslint error: 'import' and 'export' may only appear at the top level
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  plugins: ["html", "vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "quotes": [2, "double", "avoid-escape"],
    indent: ["off", 4],
    "vue/script-indent": [
      "off",
      4,
      {
        baseIndent: 1
      }
    ]
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
