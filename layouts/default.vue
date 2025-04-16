<template>
  <div class="bg-white overflow-hidden" style="font-family: Arial">
    <VHeader></VHeader>
    <VHeaderMobile></VHeaderMobile>
    <slot />
    <WhatsApp></WhatsApp>
    <VFooter></VFooter>
  </div>
</template>
<script setup></script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
