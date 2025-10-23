export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: {
    enabled: true,
  },
  pages: {
    pattern: ['**\/*.vue', '!**\/components\/*.vue'],
  },

  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/eslint',
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
})
