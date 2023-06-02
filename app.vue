<script setup lang="ts">
const colorMode = useColorMode()

function switchTheme(e: MouseEvent) {
  const dark = colorMode.value === 'dark'

  // @ts-expect-error startViewTransition is a new API
  if (!document?.startViewTransition) {
    colorMode.preference = (dark ? 'light' : 'dark')
    return
  }

  // @ts-expect-error startViewTransition is a new API
  const transition = document?.startViewTransition(async () => {
    colorMode.preference = (dark ? 'light' : 'dark')
    await nextTick()
  })
  const x = e.clientX
  const y = e.clientY
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  transition?.ready?.then(() => {
    const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
    ]
    document?.documentElement?.animate(
      {
        clipPath: dark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: dark ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    )
  })
}
</script>

<template>
  <div class="h-screen w-screen bg-slate-50 text-slate-900" dark="bg-slate-800 text-slate-100">
    <nav class="fixed h-16 w-full flex items-center justify-between border-b-2 border-gray-1 border-solid px-8 backdrop-blur-md" dark="border-slate-700">
      <NuxtLink to="/">
        <span class="text-xl font-semibold">Nuxt Starter</span>
      </NuxtLink>
      <div class="cursor-pointer">
        <span v-show="$colorMode.value === 'light'" class="i-ic:outline-light-mode text-2xl" @click="switchTheme" />
        <span v-show="$colorMode.value === 'dark'" class="i-ic:outline-dark-mode text-2xl" @click="switchTheme" />
      </div>
    </nav>
    <main class="h-full overflow-y-auto pt-16">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
  </div>
</template>
