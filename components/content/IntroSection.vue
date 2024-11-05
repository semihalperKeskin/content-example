<template>
  <div class="max-w-screen-xl mx-auto mt-10">
    <div class="grid grid-cols-5 relative">

      <div class="flex flex-col col-span-2 gap-10 justify-center relative -right-1/4">
        <div class=" flex items-center gap-10 bg-white p-5 rounded-3xl w-full shadow-2xl">
          <UIcon name="i-logos-instagram-icon" class="text-3xl" />
           <div class="space-y-2">
            <h1 class="font-bold text-base"><slot name="first-title" /></h1>
            <p class="text-sm"> <slot name="first-description" /> </p>
           </div>
        </div>

        <div class=" flex items-center gap-10 bg-white p-5 rounded-3xl w-full shadow-2xl">
          <UIcon name="i-logos-instagram-icon" class="text-3xl" />
           <div class="space-y-2">
            <h1 class="font-bold text-base"><slot name="second-title" /></h1>
            <p> <slot name="second-description" /></p>
           </div>
        </div>

        <div class=" flex items-center gap-10 bg-white p-5 rounded-3xl w-full shadow-2xl">
          <UIcon name="i-logos-instagram-icon" class="text-3xl" />
           <div class="space-y-2">
            <h1 class="font-bold text-base"><slot name="third-title" /></h1>
            <p> <slot name="third-description" /> </p>
           </div>
        </div>
      </div>

      <div class="h-[681px] col-span-3 bg-gray-500 rounded-3xl shadow-2xl">
        
      </div>

    </div>
  </div>
</template>