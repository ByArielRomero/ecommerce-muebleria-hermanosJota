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
