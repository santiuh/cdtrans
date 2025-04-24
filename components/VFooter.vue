<template>
  <div
    class="flex animate-gradient bg-primary place-content-center pt-28 pb-20 z-40 text-white"
  >
    <div
      class="flex-col lg:flex-row gap-6 lg:gap-4 items-center text-center lg:text-start flex text-xl lg:justify-around w-full lg:max-w-[1440px] lg:px-32 px-4"
    >
      <NuxtImg
        class="w-3/4 lg:w-auto lg:!h-[46px] self-center"
        src="/img/logoblanco.png"
      ></NuxtImg>
      <NuxtImg
        class="w-3/4 lg:w-auto lg:!h-[40px] self-center"
        src="/img/logo2blanco.png"
      ></NuxtImg>
      <div class="hidden lg:flex h-full border-l border-white"></div>
      <div class="flex flex-col py-4">
        <span>Colón 150 </span>
        <span>Susana, Santa Fe, Argentina </span>
        <span>C2301, Castellanos </span>
      </div>
      <div class="hidden lg:flex h-full border-l border-white"></div>
      <div class="flex flex-row gap-4 items-center h-full">
        <svgo-tel class="!h-9 !w-auto"></svgo-tel>
        <span>03492 27-2390</span>
      </div>
      <div class="hidden lg:flex h-full border-l border-white"></div>
      <div class="flex flex-row gap-4">
        <NuxtLink
          to="https://api.whatsapp.com/send?phone="
          target="_blank"
          class="p-3 rounded-xl flex items-center"
          ><svgo-wsp class="!h-7 !w-7"></svgo-wsp
        ></NuxtLink>
        <NuxtLink to="" target="_blank" class="p-3 rounded-xl flex items-center"
          ><svgo-li class="!h-7 !w-7"></svgo-li
        ></NuxtLink>
        <NuxtLink to="" target="_blank" class="p-3 rounded-xl flex items-center"
          ><svgo-ig class="!h-7 !w-7"></svgo-ig
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=", "_blank");
};
</script>
