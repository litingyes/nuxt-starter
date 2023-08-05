module.exports = {
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
}
