module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
      "plugin:@typescript-eslint/recommended",
      // "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
  },
  rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "array-bracket-spacing": ["error", "always"],
      // "object-curly-spacing": ["error", "always"],
      // "space-before-blocks": ["error", "always"],
      // "arrow-parens": ["error", "as-needed"],
      // "arrow-spacing": ["error", { "before": true, "after": true}],
      // "comma-spacing": ["error", { "before": false, "after": true }],
      // "indent": ["error", 4],
      // "no-used-vars": ["warn"],
      // "no-empty-function": "off",
      // "@typescript-eslint/no-empty-function": ["error", {"allow": ["constructors"]}]
  },
};