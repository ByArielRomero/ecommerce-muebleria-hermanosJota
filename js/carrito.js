// =============================
// FUNCIONES DE CARRITO
// =============================

/**
 * Inicializa el carrito de compras y el contador en el header.
 * El contador se guarda en localStorage y se actualiza al agregar productos.
 */
export function inicializarCarrito() {
  // Obtiene el contador actual del carrito desde localStorage
  let contador = parseInt(localStorage.getItem("contador")) || 0;
  // Selecciona el elemento del contador en el header
  const contadorElemento = document.querySelector(".header__carrito-contador");
  contadorElemento.textContent = contador;

  /**
   * Suma uno al contador y lo actualiza en el header y localStorage
   */
  function agregarAlCarrito() {
    contador++;
    contadorElemento.textContent = contador;
    localStorage.setItem("contador", contador);
  }

  // Escucha clicks en botones de "Agregar al carrito" en cualquier parte del documento
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".producto-card__btn");
    if (btn) {
      event.preventDefault();
      agregarAlCarrito();
    }
  });
}
