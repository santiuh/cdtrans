<template>
  <div ref="glideRef2" class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <HomeHero1 class="h-[90vh] lg:h-[90vh]"></HomeHero1>
        </li>
        <li class="glide__slide">
          <HomeHero2 class="h-[90vh] lg:h-[90vh]"></HomeHero2>
        </li>
        <li class="glide__slide">
          <HomeHero3 class="h-[90vh] lg:h-[90vh]"></HomeHero3>
        </li>
      </ul>
    </div>
    <div class="glide__bullets z-40" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const glideRef2 = ref(null);

onMounted(() => {
  const glideInstance = new Glide(glideRef2.value, {
    type: "carousel",
    perView: 1,
    autoplay: 4000,
    hoverpause: false,
  });
  glideInstance.mount();
});
</script>
