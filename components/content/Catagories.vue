<template>
  <div class="shadow-xl">
    <div class="max-w-screen-xl mx-auto">
      <div class="h-[90px]">
        <div class="flex justify-between h-full items-center">
          <div class="font-normal flex items-center gap-3">
            <USelectMenu searchable v-model="selected" :options="options" />
          </div>
          <div>
            <UButton
              class="w-32 h-10 flex justify-center bg-[#2C686A] hover:bg-[#3A8486] font-bold"
            >
              Show More
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  options: string[];
}

const { data } = await useAsyncData<Category[]>(
  () => queryContent("categories").find() as unknown as Promise<Category[]>
);

console.log(data.value);

const options = data.value?.[0]?.options || [];

const selected = ref(options[0]);
</script>
