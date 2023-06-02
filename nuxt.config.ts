// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@nuxt/image-edge',
    '@nuxthq/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    'nuxt-lodash',
  ],
  colorMode: {
    storageKey: 'nuxt-color-mode',
  },
  image: {
    screens: {
      sm: 676,
      md: 960,
      lg: 1440,
    },
    provider: 'ipx',
  },
  css: [
    '@unocss/reset/tailwind-compat.css',
    '@/assets/styles/root.scss',
  ],
})
