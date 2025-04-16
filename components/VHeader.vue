<template>
  <div
    class="hidden lg:flex flex-col backdrop-blur-md shadow-md bg-white"
    :class="{
      '   ': isScrolled && isHome,
      'fixed z-50 w-full ': isHome,
      '  ': !isHome,
    }"
    :style="{
      transition: 'background-color 0.3s ease-in-out',
    }"
  >
    <div
      class="flex flex-row justify-between px-10 self-center w-full max-w-[1440px]"
    >
      <div class="flex flex-row gap-4 items-center my-4">
        <NuxtImg
          @click="router.push('/')"
          class="transition-all duration-300 !h-16 !w-auto hover:cursor-pointer hover:scale-105 hover:brightness-90 drop-shadow-md"
          src="img/logo.png"
        ></NuxtImg>
        <NuxtImg
          @click="router.push('/')"
          class="transition-all duration-300 !h-16 !w-auto hover:cursor-pointer hover:scale-105 hover:brightness-90"
          src="img/logo2.png"
        ></NuxtImg>
      </div>

      <div class="font-medium gap-10 flex flex-row text-persoblack ">
        <button
          class="hover:text-orange transition-all duration-300"
          @click="goTo('/Productos')"
        >
          PRODUCTOS
        </button>
        <div class="group relative flex flex-col justify-center">
          <button class="hover:text-orange transition-all duration-300">
            SERVICIOS
          </button>

          <div
            style="top: 104px"
            class="absolute -left-9 hidden group-hover:flex flex-col rounded-t-none bg-white shadow-lg text-black rounded-md duration-300"
          >
            <button
              v-for="(service, index) in services"
              :class="index === services.length - 1 ? '!border-b-0' : ''"
              :key="index"
              class="px-4 py-2 hover:bg-orange hover:text-white transition-all duration-300 text-left border-b-tertiary border-b"
              @click="goTo(service.route)"
            >
              {{ service.name }}
            </button>
          </div>
        </div>
        <button
          class="hover:text-orange transition-all duration-300"
          @click="goTo('/Empresa')"
        >
          EMPRESA
        </button>
        <button
          class="hover:text-orange transition-all duration-300"
          @click="goTo('/Contacto')"
        >
          CONTACTO
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

const isHome = computed(() => {
  return route.path === "/";
});

const banner = computed(() => {
  const path = route.path.split("/").filter(Boolean).pop();
  return path ? path.toUpperCase() : "default";
});

// Estado para controlar el fondo cuando se hace scroll
const isScrolled = ref(false);

// Función que maneja el evento de scroll
const handleScroll = () => {
  if (window.scrollY > 100) {
    // Cambiar '100' por la distancia que prefieras
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// Agregar listener para el evento de scroll
onMounted(() => {
  if (isHome.value) {
    window.addEventListener("scroll", handleScroll);
  }
});

const goTo = (ruta) => {
  if (ruta === "/Clientes") {
    window.open("https://catalogo.rodaservice.com.ar/", "_blank");
  } else router.push(ruta);
};

// Lista de servicios con rutas SEO-friendly
const services = [
  { name: "Bobinado", route: "/Servicios/Bobinado" },
  { name: "Asistencia técnica", route: "/Servicios/AsistenciaTecnica" },
  { name: "Mantenimiento", route: "/Servicios/Mantenimiento" },
  { name: "Taller de reparación", route: "/Servicios/TallerReparacion" },
  {
    name: "Asistencia técnica con visita en planta",
    route: "/Servicios/VisitaPlanta",
  },
  { name: "Automatización", route: "/Servicios/Automatizacion" },
  {
    name: "Reparación de convertidores de frecuencia",
    route: "/Servicios/ReparacionConvertidores",
  },
  {
    name: "Capacitaciones para las empresas",
    route: "/Servicios/Capacitaciones",
  },
  { name: "Campo y medición", route: "/Servicios/CampoMedicion" },
  { name: "Pruebas a bombas", route: "/Servicios/PruebasBombas" },
  {
    name: "Fabricación de tableros eléctricos",
    route: "/Servicios/TablerosElectricos",
  },
];
</script>
