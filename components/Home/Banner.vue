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
        src="img/logo.png"
        class="!h-fit w-1/4 drop-shadow-xl"
        data-aos="fade-right"
      ></NuxtImg>
      <div class="flex flex-col text-4xl !font-raleway font-black">
        <p>TE OFRECEMOS EXPERIENCIA</p>
        <p class="text-orange">Y CONOCIMIENTO TÉCNICO</p>
      </div>

      <VButton
        titulo="Conocenos"
        class="!text-xl !bg-white w-3/4"
        @click="router.push('/Empresa')"
      ></VButton>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
