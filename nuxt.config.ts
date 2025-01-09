export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/devtools',
    '@nuxt/eslint',
  ],

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

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2025-01-09',
})
