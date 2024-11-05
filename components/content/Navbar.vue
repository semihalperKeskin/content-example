<template>
  <div class="h-[90px]">
    <div v-for="item in navSection" class="max-w-screen-xl mx-auto h-full">
      <div class="flex justify-between h-full">
        <div class="flex items-center justify-center gap-4 text-2xl col-span-2">
          <UIcon class="text-5xl" name="i-mdi-weather-night-partly-cloudy" />
          <p class="font-bold">{{ item.title }}</p>
        </div>
        <div
          class="flex items-center justify-center text-2xl font-bold"
        >
          <div class="flex justify-between gap-4" :class="`grid-cols-${item.selection.length}`">
            <div v-for="option in item.selection">{{ option }}</div>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4 col-span-1">
          <Icon class="text-2xl" name="i-mdi-arrow-expand-up" />
          <p class="font-bold">Sign In</p>
        </div>
        <div class="flex items-center justify-center col-span-1">
          <UButton class="font-bold px-10 py-3">{{ item.button }}</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface NavItem {
  title: string
  selection: string[]
  button: string
}

const { data: data } = await useAsyncData(() => queryContent('navbar').find())

const navSection = (data.value || []) as unknown as NavItem[];
</script>
