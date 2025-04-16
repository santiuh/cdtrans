<template>
  <div
    class="flex animate-gradient bg-gradient-to-l from-[#2E2E2E] to-[#000000] place-content-center pt-28 pb-20 z-40"
  >
    <div
      class="flex-col lg:flex-row gap-6 lg:gap-4 items-center text-center lg:text-start flex text-xl lg:justify-around w-full lg:max-w-[1440px] lg:px-32 px-4"
    >
      <NuxtImg
        class="w-3/4 lg:w-auto lg:!h-14 self-center"
        src="/img/logo.png"
      ></NuxtImg>
      <div class="hidden lg:flex h-full border-l"></div>
      <div class="flex flex-col py-4">
        <span>Ruta Provincial 16, Km 4,5 </span>
        <span>Alvear, Santa Fe, Argentina </span>
        <span>C2000, Rosario </span>
      </div>
      <div class="hidden lg:flex h-full border-l"></div>
      <div class="flex flex-row gap-4 items-center h-full">
        <svgo-tel class="!h-9 !w-auto"></svgo-tel>
        <span>0341 317-7400</span>
      </div>
      <div class="hidden lg:flex h-full border-l"></div>
      <div class="flex flex-row gap-4">
        <NuxtLink
          to="https://api.whatsapp.com/send?phone=5493417484539"
          target="_blank"
          class="p-3 bg-[#222222] rounded-xl flex items-center"
          ><svgo-wsp class="!h-7 !w-7"></svgo-wsp
        ></NuxtLink>
        <NuxtLink
          to="https://web.facebook.com/randonargentinaok"
          target="_blank"
          class="p-3 bg-[#222222] rounded-xl flex items-center"
          ><svgo-li class="!h-7 !w-7"></svgo-li
        ></NuxtLink>
        <NuxtLink
          to="https://www.instagram.com/rodaservice/"
          target="_blank"
          class="p-3 bg-[#222222] rounded-xl flex items-center"
          ><svgo-ig class="!h-7 !w-7"></svgo-ig
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=5493417484539", "_blank");
};
</script>
