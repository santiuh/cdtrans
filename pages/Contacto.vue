<template>
  <div class="flex flex-col w-full h-screen">
    <!-- <div
      class="w-full bg-[url('/img/contacto.png')] bg-cover bg-no-repeat justify-center flex"
    >
      <div
        class="flex flex-row gap-1 italic font-bold text-2xl lg:text-6xl lg:max-w-[1440px] w-full lg:px-32 px-4 pt-24 pb-10 lg:py-20 items-center lg:items-baseline"
        data-aos="slide-right"
        data-aos-once="true"
      >
        <svg
          class="lg:h-[40px] lg:w-[59px] h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 59.145 40.998"
        >
          <path
            id="Trazado_108"
            data-name="Trazado 108"
            d="M4820.587,289.348l30.269-30.269,10.729-10.729h18.147l-41.174,41Z"
            transform="translate(-4820.587 -248.35)"
            fill="#fff"
          />
        </svg>
        <div class="flex flex-col">
          <h1>Estamos para ayudarte</h1>
          <h1 class="hidden lg:flex">con tus inquietudes</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center bg-gray w-full">
      <div
        class="flex flex-col text-center text-black lg:max-w-[1440px] w-full lg:px-32 px-4 py-28 gap-14 self-center"
      >
        <h1 class="text-6xl font-bold">Medios de contacto</h1>
        <div
          class="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around text-2xl"
        >
          <div class="flex flex-col">
            <svgo-contacto1 class="!h-16 !w-auto"></svgo-contacto1>
            <span class="font-bold lg:mt-8 mt-4"
              >Talleres oficiales y postventa
            </span>
            <span>postventa@randon.com.ar </span>
            <span>+54 341 6008500</span>
          </div>
          <div class="flex flex-col">
            <svgo-contacto2 class="!h-16 !w-auto"></svgo-contacto2>
            <span class="font-bold lg:mt-8 mt-4"
              >Talleres oficiales y postventa
            </span>
            <span>postventa@randon.com.ar </span>
            <span>+54 341 6008500</span>
          </div>
          <div class="flex flex-col">
            <svgo-contacto3 class="!h-16 !w-auto"></svgo-contacto3>
            <span class="font-bold lg:mt-8 mt-4"
              >Talleres oficiales y postventa
            </span>
            <span>postventa@randon.com.ar </span>
            <span>+54 341 6008500</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full">
      <div
        class="lg:w-1/2 bg-[url('/img/contacto2.png')] bg-cover bg-no-repeat flex justify-center lg:justify-end py-10 px-4"
      >
        <div
          class="flex flex-col w-full max-w-[720px] gap-3 justify-center"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <NuxtImg
            src="/svg/point.svg"
            class="!h-24 !w-auto self-start"
          ></NuxtImg>

          <div class="text-3xl font-black">
            <p>ENCONTRÁ</p>
            <p>UN CONCESIONARIO</p>
            <p>CERCA TUYO</p>
          </div>
          <NuxtLink to="/Concesionarios">
            <VButton titulo="VER CONCESIONARIOS"></VButton>
          </NuxtLink>
        </div>
      </div>
      <div class="lg:w-1/2 flex justify-center lg:justify-start bg-secondary">
        <div
          class="flex flex-col w-full max-w-[720px] py-24 lg:!pl-12 px-4 gap-4"
        >
          <div class="flex flex-col text-2xl">
            <p class="font-bold">¿QUERÉS SABER MÁS?</p>
            <P>DEJANOS TUS DATOS:</P>
          </div>
          <form class="flex flex-col gap-3" action="">
            <input
              class="bg-primary text-white border-white border rounded-md text-lg px-3 py-2"
              placeholder="Nombre y Apellido"
              type="text"
            />
            <div class="flex w-full flex-col lg:flex-row gap-3">
              <input
                class="bg-primary text-white border-white border rounded-md text-lg px-3 py-2 w-full"
                placeholder="Correo electrónico"
                type="text"
              />
              <input
                class="bg-primary text-white border-white border rounded-md text-lg px-3 py-2 w-full"
                placeholder="Teléfono"
                type="tel"
              />
            </div>
            <input
              class="bg-primary text-white border-white border rounded-md text-lg px-3 py-2"
              placeholder="Localidad"
              type="text"
            />
            <textarea
              class="bg-primary text-white border-white border rounded-md text-lg px-3 py-2"
              placeholder="Mensaje"
              name=""
              id=""
            ></textarea>
          </form>

          <VButton
            class="!bg-white !text-secondary self-end"
            titulo="Enviar"
          ></VButton>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup></script>
