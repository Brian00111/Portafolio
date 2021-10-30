const $form = document.querySelector("#form");

async function handlerSubmit(event) {
  event.preventDefault();
  let $nombre = document.querySelector("#nombre");
  let $email = document.querySelector("#email");
  let $mensaje = document.querySelector("#mensaje");
  let $alerta = document.querySelector(".alerta-correo");
  let $spinner = document.querySelector(".spinner");
  let $enviado = document.querySelector(".enviado");

  if (
    $nombre.value.length === 0 ||
    $email.value.length === 0 ||
    $mensaje.value.length === 0
  ) {
    createError();
    return;
  }

  const form = new FormData(this);

  $alerta.classList.add("active-alerta");

  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    $spinner.style.display = "none";
    $enviado.style.display = "flex";

    setTimeout(() => $alerta.classList.remove("active-alerta"), 1500);
  }
}

$form.addEventListener(
  "blur",
  (e) => {
    const validar = {
      email:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      mensaje: /^\w{10,500}$/,
    };

    switch (e.target.id) {
      case "nombre":
        e.stopPropagation();

        if (e.target.value.length < 3) {
          let fatherContent = e.target.parentNode;
          let iconError = fatherContent.querySelector(".i-bad");

          e.target.placeholder = " ";

          iconError.classList.add("opacity");
          fatherContent.classList.add("active-validation");
        } else {
          let iconGood = fatherContent.querySelector(".i-good");
          iconGood.classList.add("opacity");
        }
        break;

      case "email":
        e.stopPropagation();

        if (!validar.email.test(e.target.value)) {
          let fatherContent = e.target.parentNode;
          let iconError = fatherContent.querySelector(".i-bad");

          e.target.placeholder = " ";

          iconError.classList.add("opacity");
          fatherContent.classList.add("active-validation");
        } else {
          let iconGood = fatherContent.querySelector(".i-good");
          iconGood.classList.add("opacity");
        }
        break;

      case "mensaje":
        e.stopPropagation();

        if (!validar.mensaje.test(e.target.value)) {
          let fatherContent = e.target.parentNode;
          let iconError = fatherContent.querySelector(".i-bad");

          e.target.placeholder = " ";

          iconError.classList.add("opacity");
          iconError.style.top = "80%";
          fatherContent.classList.add("active-validation");
        } else {
          let iconGood = fatherContent.querySelector(".i-good");
          iconGood.classList.add("opacity");
        }
        break;
    }
  },
  true
);

$form.addEventListener(
  "focus",
  (e) => {
    let fatherContent = e.target.parentNode;
    let iconError = fatherContent.querySelector(".i-bad");

    iconError.classList.remove("opacity");
    fatherContent.classList.remove("active-validation");
  },
  true
);

$form.addEventListener("submit", handlerSubmit);
