<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (val) => {
    if (val)
      colorMode.value = 'dark'
    else
      colorMode.value = 'light'
  },
})

const list = [
  {
    label: '@nuxthq/ui',
    link: 'https://nuxt.com/modules/nuxtlabs-ui',
  },
  {
    label: '@nuxtjs/eslint-module',
    link: 'https://nuxt.com/modules/eslint',
  },
  {
    label: '@nuxtjs/stylelint-module',
    link: 'https://nuxt.com/modules/stylelint',
  },
  {
    label: '@nuxtjs/fontaine',
    link: 'https://nuxt.com/modules/fontaine',
  },
  {
    label: '@vueuse/nuxt',
    link: 'https://nuxt.com/modules/vueuse',
  },
  {
    label: 'nuxt-lodash',
    link: 'https://nuxt.com/modules/lodash',
  },
]
</script>

<template>
  <div class="flex justify-center pt-16">
    <div class="prose dark:prose-invert">
      <h1 class="font-smiley">
        Nuxt Starter
      </h1>
      <UToggle
        v-model="isDark" off-icon="i-material-symbols-light-mode-outline"
        on-icon="i-material-symbols-dark-mode-outline"
      />
      <p>A nuxt project startup template</p>
      <h2>Installed Modules</h2>
      <ul>
        <NuxtLink v-for="item in list" :key="item.label" :to="item.link" target="__blank">
          <li>
            {{ item.label }}
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
