// =============================
// MODAL DE BÚSQUEDA GLOBAL
// =============================
export function inicializarBuscadorGlobal() {
  const btnBuscador = document.querySelector(".fa-magnifying-glass");
  if (btnBuscador) {
    btnBuscador.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarBuscadorModal();
    });
  }
}

function mostrarBuscadorModal() {
  let modal = document.querySelector(".modal-buscador");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal-buscador";
    modal.innerHTML = `
      <div class="modal-buscador__content">
        <input type="search" placeholder="Buscar productos..." class="buscador-productos" aria-label="Buscar productos" autofocus />
        <div class="buscador-resultados"></div>
        <button class="modal-buscador__cerrar">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector(".modal-buscador__cerrar").addEventListener("click", () => {
      modal.style.display = "none";
    });
    const inputBuscador = modal.querySelector(".buscador-productos");
    const resultados = modal.querySelector(".buscador-resultados");
    inputBuscador.addEventListener("input", async (e) => {
      const valor = e.target.value.trim().toLowerCase();
      if (valor.length === 0) {
        resultados.innerHTML = "";
        return;
      }
      const { cargarProductos } = await import("./data.js");
      const productos = await cargarProductos();
      const filtrados = productos.filter(p => p.name.toLowerCase().includes(valor) || p.description.toLowerCase().includes(valor));
      if (filtrados.length === 0) {
        resultados.innerHTML = `<p style='color:var(--color-suave);margin-top:1rem;'>No se encontraron productos.</p>`;
      } else {
        resultados.innerHTML = filtrados.map(p => `
          <div class='buscador-item' style='padding:0.5rem 0;border-bottom:1px solid #eee;display:flex;align-items:center;gap:1rem;'>
            <img src='${p.image}' alt='${p.name}' style='width:40px;height:40px;object-fit:contain;border-radius:8px;'>
            <span style='font-family:var(--font-body);font-size:1rem;color:var(--color-primario);'>${p.name}</span>
            <button class='ver-producto' data-id='${p.id}' style='margin-left:auto;background:var(--color-acento);color:#fff;border:none;border-radius:8px;padding:0.3rem 0.8rem;cursor:pointer;'>Ver</button>
          </div>
        `).join("");
        resultados.querySelectorAll('.ver-producto').forEach(btn => {
          btn.addEventListener('click', () => {
            window.location.href = `producto.html?id=${btn.dataset.id}`;
          });
        });
      }
    });
    inputBuscador.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const valor = e.target.value.trim();
        if (valor.length > 0) {
          window.location.href = `productos.html?busqueda=${encodeURIComponent(valor)}`;
        }
        modal.style.display = "none";
      }
    });
  } else {
    modal.querySelector(".buscador-productos").value = "";
    modal.querySelector(".buscador-resultados").innerHTML = "";
  }
  modal.style.display = "flex";
  modal.querySelector(".buscador-productos").focus();
}
