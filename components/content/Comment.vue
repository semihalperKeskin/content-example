<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="max-w-screen-sm mx-auto space-y-5">
      <h1 class="text-5xl font-bold text-center">
        My bedroom reflects my personal haven.
      </h1>
      <div class="text-sm text-center font-thin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
    </div>

    
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-1/4	', wrapper: 'mt-10 p-5'  }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <div class="relative w-[333px] rounded-3xl overflow-hidden shadow-xl m-5 py-5 px-2">
        <div class="flex items-center justify-center">
          <img
          class="rounded-full w-32"
          src="https://picsum.photos/202?random=3"
          alt="Sunset in the mountains"
        />
        </div>
        <div class="px-6 py-4 flex flex-col items-center">
          <div class="font-bold text-xl mb-2">Bedroom number one</div>
          <div class="flex items-center w-full justify-center gap-5">
            <UIcon name="i-logos-instagram-icon" class="text-3xl" />
            <UIcon name="i-logos-twitter" class="text-3xl" />
            <UIcon name="i-logos-facebook" class="text-3xl" />
          </div>
          
        </div>
        <div class="flex items-center gap-5 px-6 pt-4 pb-2">
          <p class="text-gray-700 text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
</script>
