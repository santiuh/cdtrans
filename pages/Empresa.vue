<template>
  <div class="flex flex-col w-full h-screen">
    <div
      class="flex justify-center bg-cover bg-red-500 bg-[url('img/contacto.png')] bg-no-repeat"
    >
      <div class="text-4xl py-14 flex flex-col text-white text-center">
        <h1 class="font-extrabold text-4xl relative">Contactanos</h1>
      </div>
    </div>
    <!-- <div
      class="w-full bg-[url('/img/empresabg.png')] bg-cover bg-no-repeat justify-center flex"
    >
      <div
        class="flex flex-row gap-1 italic font-bold text-3xl lg:text-6xl lg:max-w-[1440px] w-full lg:px-32 px-2 pt-24 pb-10 lg:py-20 items-center lg:items-baseline"
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

        <h1>SOBRE NOSOTROS</h1>
      </div>
    </div>
    <div class="flex flex-col relative w-full bg-primary items-center">
      <div
        class="flex flex-col lg:max-w-[1440px] w-full lg:px-32 px-4 gap-20 z-10 py-16 text-xl"
      >
        <div
          class="flex flex-col-reverse lg:flex-row justify-between w-full items-center lg:px-16 px-6 py-6 lg:py-10 rounded-[36px] drop-shadow-2xl shadow-2xl bg-primary border-[#202020] border gap-7"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <div
            class="flex flex-col gap-4 w-full text-justify lg:text-start lg:w-2/3"
          >
            <p>
              Somos <span class="font-bold lg:text-2xl">Randon Argentina</span>,
              líderes en el mercado de acoplados y semirremolques.
            </p>
            <p>
              Desde el 1° de junio de 1994, nuestra planta está ubicada en
              Alvear, al sur del Gran Rosario. Con raíces en Brasil y 75 años de
              trayectoria global, llevamos 30 años adaptándonos al mercado
              argentino, siendo líderes en el rubro de acoplados y
              semirremolques reconocidos por nuestra calidad y tecnología.
            </p>
          </div>
          <NuxtImg
            class="rounded-xl w-full lg:w-1/3"
            src="/img/sobrenos1.png"
          ></NuxtImg>
        </div>
        <div
          class="flex flex-col lg:flex-row justify-between w-full items-center lg:px-16 px-6 py-6 lg:py-10 rounded-[36px] drop-shadow-2xl shadow-2xl bg-primary border-[#202020] border gap-7"
          data-aos="slide-left"
          data-aos-once="true"
        >
          <NuxtImg
            class="rounded-xl w-full lg:w-1/3"
            src="/img/sobrenos2.png"
          ></NuxtImg>
          <div
            class="flex flex-col gap-4 w-full text-justify lg:text-start lg:w-2/3"
          >
            <p class="font-bold lg:text-2xl">Innovación y producción</p>
            <p>
              Contamos con más de 130 empleados y trabajamos en innovaciones
              constantes, abriendo nuevas líneas de producción e incorporando
              tecnología para optimizar procesos, aumentar la eficiencia y
              cuidar el medio ambiente.
            </p>
            <p>
              Muchos de nuestros componentes diferenciados son fabricados por
              empresas del grupo Randoncorp, lo que nos permite garantizar
              calidad y seguridad.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse lg:flex-row justify-between w-full items-center lg:px-16 px-6 py-6 lg:py-10 rounded-[36px] drop-shadow-2xl shadow-2xl bg-primary border-[#202020] border gap-7"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <div
            class="flex flex-col gap-4 w-full text-justify lg:text-start lg:w-2/3"
          >
            <p class="font-bold lg:text-2xl">
              Presencia nacional e internacional
            </p>
            <p>
              Operamos en todo el país a través de seis concesionarios oficiales
              y una red de vendedores calificados.
            </p>
            <p>
              Además de abastecer el mercado local, exportamos
              unidades,tecnología y conocimiento argentino a diversos países de
              América del Sur y el mundo.
            </p>
          </div>
          <NuxtImg
            class="rounded-xl w-full lg:w-1/3"
            src="/img/sobrenos3.png"
          ></NuxtImg>
        </div>
      </div>

      <div class="h-full w-full flex flex-col absolute justify-between">
        <svgo-sobrenos1
          data-aos="slide-left"
          data-aos-once="true"
          class="!h-auto !w-full lg:!w-auto lg:!h-96 lg:self-end"
        ></svgo-sobrenos1>
        <svgo-sobrenos1
          data-aos="slide-right"
          data-aos-once="true"
          class="!h-auto !w-full lg:!w-auto lg:!h-96 lg:self-start"
        ></svgo-sobrenos1>
        <svgo-sobrenos3
          data-aos="slide-left"
          data-aos-once="true"
          class="!h-auto !w-full lg:!w-auto lg:!h-96 text-secondary lg:self-end"
        ></svgo-sobrenos3>
      </div>
    </div>
    <div
      class="flex flex-col w-full py-24 bg-primary items-center drop-shadow-2xl shadow-2xl"
    >
      <div
        class="flex flex-col lg:max-w-[1440px] w-full lg:px-32 px-4 z-10 lg:py-16 text-xl text-center lg:text-justify [text-shadow:_0_10px_7px_rgb(0_0_0_/_100%)]"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <span class="text-5xl font-bold text-center">VALORES</span>
        <div
          class="flex flex-col lg:flex-row justify-around w-full text-2xl pt-20 pb-36"
        >
          <div class="flex flex-col lg:w-1/3 gap-16">
            <div class="flex flex-col">
              <p class="font-bold">Seguridad y calidad:</p>
              <span>Son innegociables en todas las acciones y productos. </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Cliente siempre satisfecho:</p>
              <span
                >Construimos relaciones basadas en la confianza y cercanía.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Ética:</p>
              <span
                >Promovemos la transparencia y seriedad en todas nuestras
                actividades.
              </span>
            </div>
          </div>
          <div class="flex flex-col lg:w-1/3 gap-16">
            <div class="flex flex-col">
              <p class="font-bold">Ganancias con sostenibilidad:</p>
              <span
                >Buscamos resultados que generen empleo y crecimiento
                responsable.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Innovación y tecnología:</p>
              <span
                >Nos mantenemos competitivos incorporando avances tecnológicos.
              </span>
            </div>
            <div class="flex flex-col">
              <p class="font-bold">Personas valoradas y respetadas:</p>
              <span
                >Reconocemos que el éxito depend de nuestra gente, fomentando su
                desarrollo personal y profesional.
              </span>
            </div>
          </div>
        </div>
        <span
          class="text-4xl lg:text-7xl italic font-bold text-center text-tertiary"
          data-aos="slide-right"
          data-aos-once="true"
          >SOLO INNOVA QUIEN SE MUEVE</span
        >
      </div>
    </div> -->
  </div>
</template>
<script setup></script>
