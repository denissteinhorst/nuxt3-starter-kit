module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "vue-eslint-parser",
    "overrides": [
    ],
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "ecmaVersion": "latest",
        "sourceType": "module",
        "extraFileExtensions": [".vue"]
    },
    "extends": [
        "standard-with-typescript",
        "@nuxtjs/eslint-config-typescript",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        'vue',
    ],
    "rules": {
        "quotes": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
              "avoidEscape": true,
              "allowTemplateLiterals": true
            }
          ],
        "eol-last": ["error", "always"],
        "vue/no-multiple-template-root": "off",
    }
}