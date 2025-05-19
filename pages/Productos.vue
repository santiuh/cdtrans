<template>
  <div class="flex flex-col">
    <div
      class="flex justify-center bg-cover bg-red-500 bg-[url('img/producto.png')] bg-no-repeat"
    >
      <div class="text-4xl py-14 flex flex-col text-white text-center">
        <h1 class="font-extrabold text-4xl relative text-shadow-lg">
          Nuestros Productos
        </h1>
      </div>
    </div>

    <div
      class="flex flex-row lg:min-h-[600px] font-sans !text-black w-full lg:max-w-[1440px] px-10 place-self-center"
    >
      <aside
        class="w-fit lg:w-64 bg-white p-5 border-gray-200 shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1),2px_0_4px_-1px_rgba(0,0,0,0.06)] flex-shrink-0"
      >
        <h2 class="text-xl font-semibold mb-4 !text-black border-b pb-2">
          Categorías
        </h2>
        <ul class="space-y-2">
          <li v-for="(products, category) in data" :key="category">
            <a
              href="#"
              @click.prevent="selectCategory(category)"
              :class="[
                'sidebar-item block px-3 py-2 rounded-md text-gray-700 cursor-pointer',
                { active: selectedCategory === category },
              ]"
            >
              {{ category }}
            </a>
          </li>
        </ul>
      </aside>

      <main class="flex-1 p-6 lg:p-10 bg-gray-50 overflow-y-auto">
        <div
          v-if="selectedProduct"
          class="bg-white rounded-lg shadow p-6 lg:p-8"
        >
          <button
            @click="selectedProduct = null"
            class="secondary-button mb-6 py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            ← Volver a {{ selectedCategory }}
          </button>

          <h1 class="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
            {{ selectedProduct.nombre }}
          </h1>

          <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div class="lg:w-1/2 flex-shrink-0">
              <div
                class="w-full h-64 lg:h-80 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center text-gray-500 border border-gray-200 relative"
              >
                <img
                  :src="currentImage"
                  :alt="`Imagen de ${selectedProduct.nombre}`"
                  class="detail-image rounded-md"
                  @error="imageLoadErrorDetail"
                />
                <NuxtImg
                  src="svg/chevronleft.svg"
                  v-if="selectedProduct.imagen2"
                  @click="prevImage"
                  class="absolute left-2 transition-all !h-14 !w-14 hover:cursor-pointer hover:scale-110 items-center justify-center flex top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 focus:outline-none hover:bg-gray-800"
                ></NuxtImg>

                <NuxtImg
                  src="svg/chevronright.svg"
                  v-if="selectedProduct.imagen2"
                  @click="nextImage"
                  class="absolute right-2 transition-all !h-14 !w-14 hover:cursor-pointer hover:scale-110 items-center justify-center flex top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 focus:outline-none hover:bg-gray-800"
                >
                </NuxtImg>
              </div>
            </div>

            <div class="lg:w-1/2">
              <p class="text-base text-gray-700 mb-6">
                {{ selectedProduct.detalle }}
              </p>

              <div class="flex flex-row gap-3">
                <a
                  :href="selectedProduct.archivo || `#`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-button inline-block w-full lg:w-auto text-center py-2 px-6 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Descargar Catálogo
                </a>
                <a
                  :href="selectedProduct.archivo || `#`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-button !bg-persogreen inline-block w-full lg:w-auto text-center py-2 px-6 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-persogreen hover:brightness-90 transition-all duration-300"
                >
                  Pedí el tuyo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
            {{ contentTitle }}
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-if="displayedProducts.length > 0"
              v-for="product in displayedProducts"
              :key="product.nombre"
              class="product-card bg-white rounded-lg p-4 shadow flex flex-col justify-between"
            >
              <div
                class="w-full h-40 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-500 overflow-hidden"
              >
                <img
                  :src="
                    product.imagen ||
                    `https://placehold.co/300x200/f87171/ffffff?text=${encodeURIComponent(
                      product.nombre
                    )}`
                  "
                  :alt="`Imagen de ${product.nombre}`"
                  class="w-full h-full object-cover"
                  @error="imageLoadErrorCard"
                />
              </div>

              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                {{ product.nombre }}
              </h3>

              <p class="text-sm text-gray-600 mb-4 flex-grow">
                {{ product.detalle }}
              </p>

              <button
                @click="showProductDetail(product)"
                class="action-button w-full py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Ver Detalles
              </button>
            </div>
            <p v-else class="text-gray-500 col-span-full text-xl">
              {{
                selectedCategory
                  ? "No hay productos en esta categoría."
                  : "Selecciona una categoría para ver los productos."
              }}
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// --- State ---
const data = ref({
  Desmalezadoras: [
    {
      nombre: "C.045",
      detalle:
        "Estos son los detalles  del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "/img/Productos/01.jpg",
      imagen2: "/img/Productos/01copy.jpg",
    },
    {
      nombre: "C.045 ML",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.048",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.048 ERN",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.048 MLR",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.029",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.029 M",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.050",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.050 L",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.036",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.026",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
  ],
  "Fertilizadoras y abonadoras": [
    {
      nombre: "F.001",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "F.002",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "F.003",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "F.004",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "F.005",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
  ],
  "Acoplados tolva": [
    {
      nombre: "B.083",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "B.073",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "H.584",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
  ],
  "Elevadores de granos": [
    {
      nombre: "R.001",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "R.002",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "R.003",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "R.MC01",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.025 DS",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "C.026 DS",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
  ],
  "Perforadoras de suelo": [
    {
      nombre: "C.041",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
    {
      nombre: "B.083",
      detalle:
        "Este es un resumen del Producto. Aquí se puede detallar el mismo con lo que se desee.",
      archivo: "",
      imagen: "",
    },
  ],
  "Diseños especiales": [],
});

const selectedCategory = ref(null);
const selectedProduct = ref(null);

const currentImageIndex = ref(0);

const displayedProducts = computed(() =>
  selectedCategory.value ? data.value[selectedCategory.value] || [] : []
);

const currentImage = computed(() =>
  currentImageIndex.value === 0
    ? selectedProduct.value?.imagen ||
      "https://placehold.co/600x400/f87171/ffffff?text=No+Image"
    : selectedProduct.value?.imagen2 ||
      "https://placehold.co/600x400/f87171/ffffff?text=No+Image"
);

const selectCategory = (category) => {
  selectedCategory.value = category;
  selectedProduct.value = null;
};

const showProductDetail = (product) => {
  selectedProduct.value = product;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + 2) % 2;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % 2;
};

const imageLoadErrorCard = (event) => {
  event.target.src = "https://placehold.co/300x200/f87171/ffffff?text=No+Image";
};

const imageLoadErrorDetail = (event) => {
  event.target.src = "https://placehold.co/600x400/f87171/ffffff?text=No+Image";
};
</script>

<style scoped>
/* Estilos específicos del componente (si son necesarios) */
.sidebar-item.active {
  background-color: #dc2626; /* red-600 */
  color: white;
  font-weight: bold;
}
.sidebar-item:hover:not(.active) {
  /* Evitar hover sobre el activo */
  background-color: #fee2e2; /* red-100 */
}
.product-card {
  border: 1px solid #e5e7eb; /* gray-200 */
  transition: box-shadow 0.3s ease;
}
.product-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Estilos para el botón principal (rojo) */
.action-button {
  background-color: #dc2626; /* red-600 */
  color: white;
  transition: background-color 0.3s ease;
}
.action-button:hover {
  background-color: #b91c1c; /* red-700 */
}
/* Estilos para el botón secundario (volver) */
.secondary-button {
  background-color: #e5e7eb; /* gray-200 */
  color: #374151; /* gray-700 */
  transition: background-color 0.3s ease;
}
.secondary-button:hover {
  background-color: #d1d5db; /* gray-300 */
}
/* Asegurar que la imagen de detalle no exceda el contenedor */
.detail-image {
  max-width: 100%;
  height: auto; /* Mantener proporción */
  max-height: 400px; /* Limitar altura máxima (opcional) */
  object-fit: contain; /* Ajustar imagen sin distorsión */
}
button {
  z-index: 10; /* Ensure buttons are above the image */
  font-size: 1.25rem; /* Increase button size for better visibility */
}
</style>
