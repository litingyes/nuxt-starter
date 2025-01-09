import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  compatibilityDate: '2025-01-09',
})
