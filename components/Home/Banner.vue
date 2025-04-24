<template>
  <div class="flex relative w-full justify-center">
    <div class="h-full w-2/5"></div>
    <div
      style="clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)"
      class="bg-primaryCD bg-[url('img/Hero/Hero.png')] flex h-full w-3/5 bg-[center_right_60%] lg:bg-center bg-cover bg-no-repeat justify-center"
    ></div>

    <div
      class="max-w-[1440px] place-items-start absolute px-9 w-full pt-24 justify-start lg:justify-center h-full flex flex-col text-primaryCD text-start gap-10"
    >
      <NuxtImg
        data-aos="fade-up"
        src="img/logo.png"
        class="!h-fit w-2/6 drop-shadow-xl"
      ></NuxtImg>
      <div
        class="flex flex-col w-2/6 text-4xl text-center !font-raleway font-black"
        data-aos="fade-up"
      >
        <p>SOMOS PROVEEDORES DE INDUSTRIAS</p>
      </div>
      <div
        class="flex flex-col w-2/6 text-4xl text-center !font-raleway font-black"
        data-aos="fade-up"
      >
        <VButton
          titulo="Ver Productos"
          class="!text-xl !bg-persogreen text-white self-center"
          @click="router.push('/Productos')"
        ></VButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
