import { inicializarCarrito } from "./carrito.js";
import { inicializarBuscadorGlobal } from "./busqueda.js";
import { inicializarCatalogo } from "./catalogo.js";
import { inicializarValidacionFormulario } from "./validacionFormulario.js";


// =============================
// INICIALIZACIÓN DEL CARRITO
// =============================
inicializarCarrito();


// =============================
// INICIALIZACIÓN DE FUNCIONALIDADES PRINCIPALES
// =============================
document.addEventListener("DOMContentLoaded", () => {
  inicializarBuscadorGlobal();
  inicializarCatalogo();
  inicializarValidacionFormulario();
});