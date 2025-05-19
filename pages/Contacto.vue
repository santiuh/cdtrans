<template>
  <div class="flex flex-col w-full">
    <div
      class="flex justify-center bg-cover bg-red-500 bg-[url('img/contacto.png')] bg-no-repeat"
    >
      <div class="text-4xl py-14 flex flex-col text-white text-center">
        <h1 class="font-extrabold text-4xl relative">Contactanos</h1>
      </div>
    </div>
    <div class="flex flex-row w-full lg:max-w-[1440px] self-center pt-32">
      <div class="w-1/2 flex justify-center bg-gray-100">
        <iframe
          title="Ubicación Colón 150, Susana, Santa Fe"
          src="https://www.google.com/maps?q=Colón+150,+S2301+Susana,+Santa+Fe&output=embed"
          width="100%"
          height="400"
          style="border: 0; max-width: 900px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="flex flex-col w-1/2 justify-around lg:pl-8">
        <div class="flex flex-row gap-4 items-center">
          <div class="bg-red-500 flex p-3 rounded-full">
            <svgo-point class="text-white !w-6 !h-6"></svgo-point>
          </div>
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Visitanos</h1>
            <p class="text-gray-500">Colón 150, Susana, Santa Fe</p>
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center">
          <div class="bg-red-500 flex p-3 rounded-full">
            <svgo-tel class="text-white !w-6 !h-6"></svgo-tel>
          </div>
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Llamanos</h1>
            <p class="text-gray-500">+54 4 444 44-444</p>
          </div>
        </div>

        <div class="flex flex-row gap-4 items-center">
          <div class="bg-red-500 flex p-3 rounded-full">
            <svgo-footerphone class="text-white !w-6 !h-6"></svgo-footerphone>
          </div>
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Mandanos un mensaje</h1>
            <p class="text-gray-500">+54 9 333 333-3333</p>
          </div>
        </div>

        <div class="flex flex-row gap-4 items-center">
          <div class="bg-red-500 flex p-3 rounded-full">
            <svgo-footermail class="text-white !w-6 !h-6"></svgo-footermail>
          </div>
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Escribinos</h1>
            <p class="text-gray-500">cdtrans@mail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full lg:max-w-[1440px] self-center items-center justify-center pb-32"
    >
      <div class="text-4xl pb-8 pt-16 ">
        ¡Mandanos tu mensaje!
      </div>
      <Formulario class="!w-3/5 !shadow-2xl"></Formulario>
    </div>
  </div>
</template>
<script setup></script>
