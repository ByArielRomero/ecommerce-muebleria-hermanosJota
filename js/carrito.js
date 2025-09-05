// carrito.js
export function inicializarCarrito() {
  let contador = parseInt(localStorage.getItem("contador")) || 0;
  const contadorElemento = document.querySelector(".header__carrito-contador");
  contadorElemento.textContent = contador;

  function agregarAlCarrito() {
    contador++;
    contadorElemento.textContent = contador;
    localStorage.setItem("contador", contador);
  }

  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".producto-card__btn");
    if (btn) {
      event.preventDefault();
      agregarAlCarrito();
    }
  });
}
