module.exports = {
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': [
      1,
      {
        ignoredKeys: ['primary'],
        whitelist: [
          '\!?(decoration|text|ring-offset|ring|outline|divide|border|from|bg|caret|accent|shadow)-primary-(50|100|200|300|400|500|600|700|800|900|950)(/([0-9]|[1-9][0-9]|100))?',
        ],
      },
    ],
  },
}
