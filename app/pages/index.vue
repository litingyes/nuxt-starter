<script lang="ts" setup>
const options = [
  {
    label: 'Development modules',
    items: [
      {
        label: 'Nuxt UI',
        link: 'https://ui.nuxt.com/',
      },
      {
        label: 'Nuxt Icon',
        link: 'https://nuxt.com/modules/icon',
      },
      {
        label: 'VueUse',
        link: 'https://vueuse.org/',
      },
    ],
  },
  {
    label: 'CI & CD',
    items: [
      {
        label: '@antfu/eslint-config',
        link: 'https://github.com/antfu/eslint-config',
      },
      {
        label: 'commitlint',
        link: 'https://commitlint.js.org/',
      },
    ],
  },
]

const themes = [
  {
    label: 'System',
    value: 'system',
  },
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
]
</script>

<template>
  <div class="flex justify-center pt-16">
    <UCard legend="Nuxt Starter">
      <template #header>
        <h1 class="font-bold text-2xl">
          Nuxt Starter
        </h1>
      </template>
      <ul class="flex flex-col gap-6">
        <li v-for="item in options" :key="item.label">
          <h2 class="text-xl font-semibold">
            {{ item.label }}
          </h2>
          <ul class="flex flex-col gap-2 mt-4">
            <li v-for="option in item.items" :key="option.label" class="text-base">
              <NuxtLink :href="option.link" target="_blank" class="hover:underline">
                {{ option.label }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <template #footer>
        <USelect v-model="$colorMode.preference" :items="themes" placeholder="Toggle theme" />
      </template>
    </UCard>
  </div>
</template>
