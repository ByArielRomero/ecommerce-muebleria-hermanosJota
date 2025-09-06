import { cargarProductos } from "./data.js";
import { destacadosIds } from "./data.js";

// =============================
// FUNCIONES DE RENDERIZADO DE PRODUCTOS
// =============================
/**
 * Renderiza una lista de productos en el contenedor dado.
 * @param {Array} lista - Array de productos
 * @param {HTMLElement} contenedor - Nodo donde se insertan las tarjetas
 */
// Renderiza las tarjetas de productos en el contenedor especificado
export function renderizarProductos(lista, contenedor) {
  contenedor.innerHTML = "";
  // Por cada producto, crea una tarjeta y la agrega al contenedor
  lista.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("producto-card");
    if (destacadosIds.includes(producto.id)) {
      card.classList.add("producto-card--destacado");
    }
    card.innerHTML = `
      <a href="producto.html?id=${producto.id}" tabindex="0">
        <img src="${producto.image}" alt="${producto.name} - ${producto.description}" class="producto-card__img" />
      </a>
      <h3 class="producto-card__title">${producto.name}</h3>
      <p class="producto-card__price">$${producto.price.toLocaleString()}</p>
      <a href="#" class="producto-card__btn" role="button" aria-label="Agregar ${producto.name} al carrito">Agregar al carrito</a>
    `;
    contenedor.appendChild(card);
  });
}
// Renderizado filtrable y búsqueda
export async function renderizarProductosFiltrados(filtro, contenedor) {
  try {
    const productos = await cargarProductos();
    const filtrados = productos.filter(filtro);
    if (filtrados.length > 0) {
      renderizarProductos(filtrados, contenedor);
    } else {
      contenedor.innerHTML = `<p>No se encontraron productos.</p>`;
    }
  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar productos. <button id="reintentar-carga">Reintentar</button></p>`;
    document.getElementById("reintentar-carga").addEventListener("click", () => {
      renderizarProductosFiltrados(filtro, contenedor);
    });
  }
}

/* Carga los productos y renderiza todos en el catálogo */
/**
 * Renderiza el catálogo completo de productos en el contenedor
 */
export async function renderizarCatalogo(contenedor) {
  try {
  // Carga los productos y los renderiza
  const productos = await cargarProductos();
  renderizarProductos(productos, contenedor);
  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar productos.</p>`;
  }
}

/* Carga los productos y renderiza solo los destacados */
/**
 * Renderiza los productos destacados en el contenedor
 * @param {HTMLElement} contenedor - Nodo donde se insertan las tarjetas
 * @param {number} cantidad - Cantidad de destacados a mostrar
 */
export async function renderizarDestacados(contenedor, cantidad = 3) {
  try {
  // Filtra y renderiza los productos destacados
  const productos = await cargarProductos();
  const destacados = destacadosIds.map(id => productos.find(p => p.id === id)).filter(Boolean).slice(0, cantidad);
  renderizarProductos(destacados, contenedor);
  } catch (error) {
    contenedor.innerHTML = `<p>No se pudieron cargar los productos destacados. <button id=\"reintentar-destacados\">Reintentar</button></p>`;
    document.getElementById("reintentar-destacados").addEventListener("click", () => {
      renderizarDestacados(contenedor, cantidad);
    });
  }
}

/* Carga y muestra un producto específico por ID en la página detalle */
/**
 * Renderiza el detalle de un producto específico por ID
 * @param {number|string} id - ID del producto a mostrar
 */
export async function renderizarDetalleProducto(id) {
  try {
  // Busca el producto por ID y lo muestra en la página de detalle
  const productos = await cargarProductos();
  const producto = productos.find((p) => p.id == id);

    if (producto) {
      document.querySelector(".imagen-producto img").src = producto.image;
      document.querySelector(".detalle-producto h2").textContent = producto.name;
      document.querySelector(".detalle-producto h3").textContent = `$${producto.price.toLocaleString()}`;
      document.querySelector(".detalle-producto p").textContent = producto.description;
    }
  } catch (error) {
    console.error("Error cargando detalle del producto", error);
  }
}
