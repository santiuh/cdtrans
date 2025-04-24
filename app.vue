<template>
  <NuxtLayout class="" style="font-family: Helvetica">
    <NuxtPage class="" />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script setup>
definePageMeta({
  title: "CD Transmisiones y GDr",
  meta: [
    {
      name: "description",
      content:
        "CD Transmisiones y GDr - Soluciones en transmisiones y servicios relacionados.",
    },
    {
      name: "keywords",
      content: "CD Transmisiones, GDr, transmisiones, servicios, soluciones",
    },
  ],
});
</script>
