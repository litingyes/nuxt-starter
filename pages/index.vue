<script lang="ts" setup>
const list = [
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
      <h1>
        Nuxt Starter
      </h1>
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
