<template>
  <div
    class="hidden lg:flex w-full justify-center text-primary bg-[#e4e5e0] pt-9 pb-8"
  >
    <div
      class="max-w-[1400px] flex flex-row justify-between w-full items-center lg:px-32 px-4"
    >
      <svgo-logo
        class="!h-12 !w-auto hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
        @click="router.push('/')"
      ></svgo-logo>
      <div class="flex flex-row font-bold text-xl gap-3">
        <NuxtLink
          class="hover:text-[#dae7ff] transition-all duration-300 active:scale-95 hover:scale-105"
          active-class="text-secondary"
          to="/"
          >INICIO</NuxtLink
        >
        <NuxtLink
          :class="route.fullPath.includes('productos') ? 'text-secondary' : ''"
          active-class="text-secondary"
          to="/productos"
          class="hover:text-[#dae7ff] transition-all duration-300 active:scale-95 hover:scale-105"
          >PRODUCTOS</NuxtLink
        >
        <NuxtLink
          active-class="text-secondary"
          to="/empresa"
          class="hover:text-[#dae7ff] transition-all duration-300 active:scale-95 hover:scale-105"
          >SERVICIOS</NuxtLink
        >
        <NuxtLink
          active-class="text-secondary"
          to="/novedades"
          class="hover:text-[#dae7ff] transition-all duration-300 active:scale-95 hover:scale-105"
          >NOSOTROS</NuxtLink
        >
        <NuxtLink
          active-class="text-secondary"
          to="/contacto"
          class="hover:text-[#dae7ff] transition-all duration-300 active:scale-95 hover:scale-105"
          >CONTACTO</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
</script>
