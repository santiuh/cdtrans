<template>
  <div class="w-full flex justify-center text-white">
    <nav
      class="flex flex-col w-full lg:hidden fixed z-50 transition-all duration-300"
      :class="{
        '!bg-primary': menu,
        ' !bg-primary ': isScrolled && isHome,
        ' fixed z-50 w-full bg-transparent ': isHome,
        ' bg-primary ': !isHome,
      }"
    >
      <div class="w-full flex flex-row relative justify-between px-4 py-3">
        <NuxtLink class="items-center flex" to="/">
          <NuxtImg
            v-show="!menu"
            src="img/logo.png"
            class="self-center transition-all duration-300 h-10"
          ></NuxtImg>
        </NuxtLink>
        <svgo-menu
          @click="menu = !menu"
          class="!w-6 !h-auto absolute right-5 top-5"
          :class="{
            ' !stroke-primary': !isScrolled && isHome && !menu,
          }"
          src="svg/menu.svg"
        ></svgo-menu>
      </div>
      <div
        :class="menu ? 'h-64' : 'h-0'"
        class="flex flex-col font-semibold text-xl gap-4 pl-8 overflow-hidden transition-all"
      >
        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/"
        >
          INICIO
        </NuxtLink>

        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/productos"
        >
          PRODUCTOS
        </NuxtLink>
        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/empresa"
        >
          EMPRESA
        </NuxtLink>
        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/novedades"
        >
          NOVEDADES
        </NuxtLink>
        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/contacto"
        >
          CONTACTO
        </NuxtLink>
        <NuxtLink
          active-class="text-secondary"
          @click="menu = false"
          class="hover:cursor-pointer transition-all duration-300"
          to="/Concesionarios"
        >
          CONCESIONARIOS
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const route = useRoute();
const menu = ref(false);
const isScrolled = ref(false);

const isHome = computed(() => {
  return route.path === "/";
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
