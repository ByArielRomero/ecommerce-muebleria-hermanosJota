// =============================
// RENDERIZADO Y PAGINACIÓN DE PRODUCTOS
// =============================
import { renderizarProductos, renderizarDestacados, renderizarDetalleProducto } from "./render.js";

export function inicializarCatalogo() {
  const grid = document.querySelector(".productos-destacados__grid");
  let paginaActual = 1;
  const productosPorPagina = 4;
  let filtroBusqueda = null;

  // Renderizar según página
  if (grid && document.title.includes("Productos")) {
    const params = new URLSearchParams(window.location.search);
    const busqueda = params.get("busqueda");
    if (busqueda) {
      renderizarPaginaProductos(p => p.name.toLowerCase().includes(busqueda.toLowerCase()) || p.description.toLowerCase().includes(busqueda.toLowerCase()));
    } else {
      renderizarPaginaProductos();
    }
  }
  if (grid && window.location.pathname.endsWith("index.html")) {
    renderizarDestacados(grid, 3);
  }
  const params = new URLSearchParams(window.location.search);
  const productoId = params.get("id");
  if (productoId) {
    renderizarDetalleProducto(productoId);
  }

  // Renderizado y paginación
  async function renderizarPaginaProductos(filtro = null) {
    if (filtro !== null) filtroBusqueda = filtro;
    const { cargarProductos } = await import("./data.js");
    const productos = await cargarProductos();
    let lista = productos;
    if (filtroBusqueda) {
      lista = productos.filter(filtroBusqueda);
    }
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const pagina = lista.slice(inicio, fin);
    grid.innerHTML = "";
    if (pagina.length > 0) {
      renderizarProductos(pagina, grid);
      agregarEventosCarrito(grid);
      renderizarControlesPaginacion(lista.length);
    } else {
      grid.innerHTML = `<p>No se encontraron productos.</p>`;
    }
  }

  function renderizarControlesPaginacion(total) {
    const totalPaginas = Math.ceil(total / productosPorPagina);
    let paginacion = document.querySelector(".paginacion");
    if (!paginacion) {
      paginacion = document.createElement("div");
      paginacion.className = "paginacion";
      grid.parentElement.appendChild(paginacion);
    }
    paginacion.innerHTML = "";
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "Anterior";
    btnPrev.disabled = paginaActual === 1;
    btnPrev.addEventListener("click", () => {
      if (paginaActual > 1) {
        paginaActual--;
        renderizarPaginaProductos();
      }
    });
    paginacion.appendChild(btnPrev);
    for (let i = 1; i <= totalPaginas; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === paginaActual ? "activo" : "";
      btn.addEventListener("click", () => {
        paginaActual = i;
        renderizarPaginaProductos();
      });
      paginacion.appendChild(btn);
    }
    const btnNext = document.createElement("button");
    btnNext.textContent = "Siguiente";
    btnNext.disabled = paginaActual === totalPaginas;
    btnNext.addEventListener("click", () => {
      if (paginaActual < totalPaginas) {
        paginaActual++;
        renderizarPaginaProductos();
      }
    });
    paginacion.appendChild(btnNext);
  }

  function agregarEventosCarrito(contenedor) {
    contenedor.querySelectorAll(".producto-card__btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const nombre = btn.closest(".producto-card").querySelector(".producto-card__title").textContent;
        mostrarMensaje(`¡${nombre} agregado al carrito!`);
      });
    });
  }
}
