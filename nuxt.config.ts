export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
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
