/* VALIDACION DE FORMULARIO */


window.addEventListener("load", () => {
  const form = document.querySelector("#formulario");
  const usuario = document.getElementById("name");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validacionCampos();
  });

  const validacionCampos = () => {
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const mensajeValor = mensaje.value.trim();

    let esValido = true;

    if (!usuarioValor) {
      validacionFallida(usuario, "Campo vacío");
      esValido = false;
    } else {
      validacionCorrecta(usuario);
    }

    if (!emailValor) {
      validacionFallida(email, "Campo vacío");
      esValido = false;
    } else if (!validaEmail(emailValor)) {
      validacionFallida(email, "El email no es válido");
      esValido = false;
    } else {
      validacionCorrecta(email);
    }

    if (!mensajeValor) {
      validacionFallida(mensaje, "Campo vacío");
      esValido = false;
    } else if (mensajeValor.length > 500) {
      validacionFallida(mensaje, "El mensaje excede los 500 caracteres");
      esValido = false;
    } else {
      validacionCorrecta(mensaje);
    }
    if (esValido) {
      mensajeExito.style.display = "block";
      form.reset();

      [usuario, email, mensaje].forEach((input) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove("correcta", "falla");
      });

      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 5000);
    }
  };

  const validacionFallida = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;
    formControl.classList.remove("correcta");
    formControl.classList.add("falla");
  };

  const validacionCorrecta = (input) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = "";
    formControl.classList.remove("falla");
    formControl.classList.add("correcta");
  };

  const validaEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
});
