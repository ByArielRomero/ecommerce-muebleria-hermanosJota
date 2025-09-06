// =============================
// DATOS Y FUNCIONES DE PRODUCTOS
// =============================

// IDs de productos destacados
export const destacadosIds = [1, 2, 3];
// Array de productos disponibles en la tienda
export const productos = [
  {
    id: 1,
    name: 'Mesa de Centro',
    price: 8000,
    description: 'Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.',
    image: './assets/img/Mesa de Centro Araucaria.png',
    ficha: 'Medidas: 90 × 90 × 45 cm. Materiales: Sobre de mármol Patagonia, patas de nogal. Acabado: Mármol pulido, aceite natural en madera. Peso: 42 kg. Carga máxima: 25 kg distribuidos.',
    garantia: '10 años en estructura'

  },
  {
    id: 2,
    name: 'Sillón Copacabana',
    price: 8000,
    description: 'Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.',
    image: './assets/img/Sillвn Copacabana.png',
    ficha: 'Medidas: 90 × 85 × 95 cm. Materiales: cuero curtido vegetal, acero pintado. Acabado: cuero anilina premium. Rotación: 360° silenciosa y suave.',
    garantia: '10 años en estructura'
  },
  {
    id: 3,
    name: 'Sofá Patagonia',
    price: 25000,
    description: 'Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.',
    image: './assets/img/Sofа Patagonia.png',
    ficha: 'Medidas: 220 × 90 × 80 cm. Estructura: Madera de eucalipto certificada FSC®. Tapizado: Lino 100% natural premium. Relleno: Espuma HR + plumón reciclado. Sostenibilidad: Materiales 100% reciclables.',
    garantia: '10 años en estructura'
  },
  {
    id: 4,
    name: 'Mesa de Comedor',
    price: 15000,
    description: 'Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.',
    image: './assets/img/Mesa Comedor Pampa.png',
    ficha: 'Medidas: 160-240 × 90 × 75 cm. Materiales: Roble macizo FSC®, mecanismo alemán. Acabado: Aceite-cera natural. Capacidad: 6-10 comensales. Extensión: Sistema de mariposa central.',
    garantia: '10 años en estructura'
  },
  {
    id: 5,
    name: 'Silla de Trabajo Belgrano',
    price: 8000,
    description: 'Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.',
    image: './assets/img/Silla de Trabajo Belgrano.png',
    ficha: 'Medidas: 60 × 60 × 90-100 cm. Materiales: Malla técnica, tejido reciclado. Acabado: Base cromada, tapizado premium. Regulación: Altura + inclinación respaldo. Certificación: Ergonomía europea EN 1335.',
    garantia: '10 años en estructura'
  },
  {
    id: 6,
    name: 'Aparador Uspallata',
    price: 10000,
    description: 'Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.',
    image: './assets/img/Aparador Uspallata.png',
    ficha: 'Medidas: 180 × 45 × 75 cm. Materiales: Nogal macizo FSC®, herrajes de latón. Acabado: Aceite natural ecológico. Peso: 68 kg. Capacidad: 6 compartimentos interiores.',
    garantia: '10 años en estructura'
  },
  {
    id: 7,
    name: 'Biblioteca Recoleta',
    price: 24000,
    description: 'Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.',
    image: './assets/img/Biblioteca Recoleta.png',
    ficha: 'Medidas: 100 × 35 × 200 cm. Materiales: Estructura de acero, estantes de roble. Acabado: Laca mate ecológica. Capacidad: 45 kg por estante. Modulares: 5 estantes ajustables.',
    garantia: '10 años en estructura'
  },
  {
    id: 8,
    name: 'Sillas Córdoba',
    price: 10000,
    description: 'Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.',
    image: './assets/img/Sillas Cвrdoba.png',
    ficha: 'Medidas: 45 × 52 × 80 cm (cada una). Materiales: Contrachapado nogal, tubo de acero. Acabado: Laca mate, pintura epoxi. Apilables: Hasta 6 sillas. Incluye: Set de 4 sillas.',
    garantia: '10 años en estructura'
  }
];


/**
 * Simula la carga asíncrona de productos
 * @returns {Promise<Array>} - Devuelve el array de productos
 */
export async function cargarProductos() {
  // Simula una carga asíncrona
  await new Promise(res => setTimeout(res, 250)); 

  if (productos.length > 0) {
    return productos;
  } else {
    throw new Error("No hay productos disponibles");
  }
}

