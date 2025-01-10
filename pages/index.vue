<script lang="ts" setup>
const options = [
  {
    label: 'Development modules',
    items: [
      {
        label: 'PRIMEVUE',
        link: 'https://primevue.org/',
      },
      {
        label: 'Nuxt Icon',
        link: 'https://nuxt.com/modules/icon',
      },
      {
        label: 'Nuxt Color Mode',
        link: 'https://color-mode.nuxtjs.org/',
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
    <Fieldset legend="Nuxt Starter">
      <p>A nuxt project startup template</p>
      <Divider />
      <Listbox :options="options" option-group-label="label" option-group-children="items" option-label="label" list-style="max-height:none;">
        <template #option="{ option }">
          <NuxtLink :href="option?.link" target="_blank">
            {{ option?.label }}
          </NuxtLink>
        </template>
      </Listbox>
      <Divider />
      <Select v-model="$colorMode.preference" :options="themes" option-label="label" option-value="value" placeholder="Toggle theme" />
    </Fieldset>
  </div>
</template>
