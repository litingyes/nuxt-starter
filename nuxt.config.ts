export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
    '@nuxthq/ui',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/devtools',
  ],
  eslint: {
    lintOnStart: false,
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
    '@/assets/styles/base.scss',
  ],
  devtools: {
    enabled: true,
  },
  ui: {
    global: true,
    icons: 'all',
  },
  stylelint: {
    lintOnStart: false,
  },
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  },
})
