export const productos = [
  {
    id: 1,
    name: 'Mesa de Centro',
    price: 8000,
    description: 'Mesa de centro',
    image: './assets/img/Mesa de Centro Araucaria.png',
  },
  {
    id: 2,
    name: 'Sillón Copacabana',
    price: 8000,
    description: 'Sillón Copacabana',
    image: './assets/img/Sillвn Copacabana.png',
  },
  {
    id: 3,
    name: 'Sofá Moderno',
    price: 25000,
    description: 'Sofá moderno',
    image: './assets/img/Sofа Patagonia.png',
  },
  {
    id: 4,
    name: 'Mesa de Comedor',
    price: 15000,
    description: 'Mesa de comedor',
    image: './assets/img/Mesa Comedor Pampa.png',
  },
  {
    id: 5,
    name: 'Silla Ergonómica',
    price: 8000,
    description: 'Silla ergonómica',
    image: './assets/img/Silla de Trabajo Belgrano.png',
  },
  {
    id: 6,
    name: 'Aparador Uspallata',
    price: 10000,
    description: 'Aparador Uspallata',
    image: './assets/img/Aparador Uspallata.png',
  },
  {
    id: 7,
    name: 'Biblioteca Recoleta',
    price: 24000,
    description: 'Biblioteca Recoleta',
    image: './assets/img/Biblioteca Recoleta.png',
  },
  {
    id: 8,
    name: 'Sillas Córdoba',
    price: 10000,
    description: 'Sillas Córdoba',
    image: './assets/img/Sillas Cвrdoba.png',
  }
];


export async function cargarProductos() {
  // Simula una carga asíncrona
  await new Promise(res => setTimeout(res, 1500)); 

  if (productos.length > 0) {
    return productos;
  } else {
    throw new Error("No hay productos disponibles");
  }
}


// 1. Contador inicial, me fijo si esta en el localStorage, si no está arranca el contador de 0.
let contador = parseInt(localStorage.getItem("contador")) || 0;

// 2. Guarda el contador en una variable
const contadorElemento = document.querySelector(".header__carrito-contador");
contadorElemento.textContent = contador;

// Cree la función para aumentar el contador
function agregarAlCarrito() {
  contador++;
  contadorElemento.textContent = contador;
  localStorage.setItem("contador", contador);
}

// 4. Si hace click en el boton, ejecuta la funcion
document.addEventListener("click", (event) => {
  const btn = event.target.closest(".producto-card__btn"); // busca el boton, por si hay cambios dinamicamente
  if (btn) {
    event.preventDefault(); // evita que el <a href="#"> recargue o suba la página
    agregarAlCarrito();
  }
});


