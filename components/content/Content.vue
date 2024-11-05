<template>
  <div class="h-[578px] relative">
    <div class="grid grid-cols-2 h-full w-full">
      <div class="col-span-1">
        <NuxtImg src="https://picsum.photos/300/200" class="h-fit w-full" />
      </div>
      <div class="col-span-1 flex flex-col mx-10 my-20 space-y-5">
        <div class="text-red-500 font-semibold">
          <slot name="info" />
        </div>
        <div class="text-5xl font-bold">
          <slot name="title" />
        </div>
        <div class="text-md w-[85%] text-start font-thin">
          <slot name="description" />
        </div>
        <div class="absolute w-[50%] -bottom-10 left-[40%] ">
          <div class="grid grid-cols-8">
            <div
              class="col-span-4 bg-[#2C686A] h-[250px] p-10 rounded-xl z-10"
            >
              <div
                class="absolute top-[20px] left-[20px] text-5xl text-white font-inika"
              >
                "
              </div>
              <div
                class="mx-auto flex items-center mt-5 text-justify text-white"
              >
                <slot name="paleceholer" />
              </div>
              <div class="mt-5 text-white">
                <slot name="author" />
                <p class="font-thin text-sm"><slot name="author-position" /></p>
              </div>
            </div>
            <div class="col-span-4 w-[140%]">
              <div class="text-md pl-10 pt-10 text-red-500 font-bold">Brand Ready</div>
              <div class="grid grid-cols-2 mt-5 pl-10 gap-7">
                <img src="../../assets/logo/logoipsum-321.svg">
                <img src="../../assets/logo/logoipsum-330.svg">
                <img src="../../assets/logo/logoipsum-332.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
