const productos = {
  asus: {
    title: "Notebook Asus Zenbook",
    description:
      "Notebook con pantalla de 14 pulgadas, procesador Intel i7 y 16 GB de RAM.",
    price: "$1.500.000",
    oldPrice: "$2.000.000",
    image: "./Img_notebooks/Asus.webp",
    specs: [
      "Pantalla: 14 pulgadas Full HD",
      "Procesador: Intel i7 de 11ª generación",
      "Memoria: 16 GB RAM",
      "Almacenamiento: 512 GB SSD",
      "Batería: 10 horas de autonomía",
    ],
  },
  lenovo: {
    title: "Notebook Lenovo ThinkPad",
    description:
      "Laptop con pantalla de 15.6 pulgadas, Intel i5 y 8 GB de RAM.",
    price: "$2.305.000",
    oldPrice: "$2.450.000",
    image: "Img_notebooks/Lenovo.webp",
    specs: [
      "Pantalla: 15.6 pulgadas Full HD",
      "Procesador: Intel i5 de 10ª generación",
      "Memoria: 8 GB RAM",
      "Almacenamiento: 256 GB SSD",
      "Batería: 8 horas de autonomía",
    ],
  },
  acer: {
    title: "Notebook Acer Aspire",
    description:
      "Laptop con pantalla de 15.6 pulgadas, procesador Intel i5 y 8 GB de RAM.",
    price: "$5.000.000",
    image: "./Img_notebooks/Acer.webp",
    specs: [
      "Pantalla: 15.6 pulgadas Full HD",
      "Procesador: Intel i5 de 10ª generación",
      "Memoria: 8 GB RAM",
      "Almacenamiento: 512 GB SSD",
      "Batería: 7 horas de autonomía",
    ],
  },
  hp: {
    title: "Notebook HP Core Ultra",
    description: "Pantalla de 16 pulgadas, procesador Intel i7 y 16 GB de RAM.",
    price: "$3.400.000",
    oldPrice: "$5.000.000",
    image: "./Img_notebooks/Hp.webp",
    specs: [
      "Pantalla: 16 pulgadas Full HD",
      "Procesador: Intel i7 de 11ª generación",
      "Memoria: 16 GB RAM",
      "Almacenamiento: 1 TB SSD",
      "Batería: 12 horas de autonomía",
    ],
  },
  motorola: {
    title: "Celular Motorola 50 Pro",
    description: "Celular con 518 GB de almacenamiento y 6 GB de RAM.",
    price: "$1.200.000",
    image: "./Img_notebooks/Samsung.webp",
    specs: [
      "Pantalla: 6.5 pulgadas AMOLED",
      "Procesador: Snapdragon 870",
      "Almacenamiento: 518 GB",
      "Memoria: 6 GB RAM",
      "Cámara: 108 MP",
    ],
  },
  samsung: {
    title: "Celular Samsung A54",
    description: "Celular con 256 GB de almacenamiento y 4 GB de RAM.",
    price: "$1.200.000",
    image: "./Img_notebooks/Samsung.webp",
    specs: [
      "Pantalla: 6.4 pulgadas Super AMOLED",
      "Procesador: Exynos 1280",
      "Almacenamiento: 256 GB",
      "Memoria: 4 GB RAM",
      "Cámara: 50 MP",
    ],
  },
  huawei: {
    title: "Celular Huawei P40",
    description: "Celular con 128 GB de almacenamiento y 4 GB de RAM.",
    price: "$800.000",
    image: "./Img_notebooks/Huawei.webp",
    specs: [
      "Pantalla: 6.1 pulgadas OLED",
      "Procesador: Kirin 990",
      "Almacenamiento: 128 GB",
      "Memoria: 4 GB RAM",
      "Cámara: 50 MP",
    ],
  },
  iphone: {
    title: "Celular Iphone 14",
    description: "Celular con 128 GB de almacenamiento y 4 GB de RAM.",
    price: "$2.400.000",
    oldPrice: "$2.500.000",
    image: "./Img_notebooks/Iphone.webp",
    specs: [
      "Pantalla: 6.1 pulgadas OLED",
      "Procesador: A15 Bionic",
      "Almacenamiento: 128 GB",
      "Memoria: 4 GB RAM",
      "Cámara: 12 MP dual",
    ],
  },
};

// Función para mostrar los detalles del producto
function mostrarDetalles(productoKey) {
  var producto = productos[productoKey];

  // Título
  document.getElementById("modalTitle").textContent = producto.title;

  // Descripción
  document.getElementById("modalDescription").textContent =
    producto.description;

  // Precio
  document.getElementById(
    "modalPrice"
  ).textContent = `Precio: ${producto.price}`;

  // Precio antiguo (si existe)
  var oldPriceElement = document.getElementById("modalOldPrice");
  if (producto.oldPrice) {
    oldPriceElement.textContent = producto.oldPrice;
    oldPriceElement.style.display = "inline";
  } else {
    oldPriceElement.style.display = "none";
  }

  // Imagen
  document.getElementById("modalImage").src = producto.image;

  // Especificaciones
  var specsList = document.getElementById("modalSpecs");
  specsList.innerHTML = "";
  producto.specs.forEach(function (spec) {
    var li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Mostrar el modal
  document.getElementById("productModal").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("productModal").style.display = "none";
}
