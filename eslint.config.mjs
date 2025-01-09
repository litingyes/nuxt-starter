import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    ignores: ['.nuxt', '.output', 'pnpm-lock.yaml'],
    formatters: true,
    vue: true,
  }),
  ...tailwind.configs['flat/recommended'],
)
