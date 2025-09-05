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

