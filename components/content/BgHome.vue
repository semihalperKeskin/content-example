<template>
  <div
  v-for="item in bgHome"
    class="h-[742px] w-full bg-gradient-to-r from-[#2C686A] from-6% via-[#33363F] via-100% to-[#D9D9D9] to-100%"
  >
    <div class="max-w-screen-xl mx-auto text-white flex items-center h-full">
      <div class="w-[50%]">
        <div class="text-red-500 text-sm">{{ item.info}}</div>
        <div class="text-5xl font-bold tracking-wider leading-tight">
          {{ item.title }}
        </div>
        <div class="text-sm font-thin tracking-tight">
          {{ item.description }}
        </div>
        <div class="bg-white w-full h-[84px] mt-6 rounded-md">
          <div class="flex justify-between h-full py-2 pr-2">
            <div class="flex items-center w-full">
              <div class="h-full w-32 bg-[#2C686A] py-1 ">
                <UIcon name="i-mdi-magnify" class="text-white h-full w-full" />
              </div>
              <p class="text-black px-10">{{ item.paleceholer }}</p>
            </div>
            <UButton class="font-bold w-44 flex justify-center col-span-1 bg-[#2C686A] hover:bg-[#3A8486]"
              >{{ item.button }}</UButton
            > 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface BgHome {
  title: string
  description: string
  info: string
  paleceholer: string
  button: string 
}

const { data: data } = await useAsyncData(() => queryContent('bghome').find())

const bgHome = (data.value || []) as unknown as BgHome[]

</script>
