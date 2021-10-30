let $encabezado = document.querySelector("#encabezado");
const nombreCliente = document.querySelector("#nombre");

window.sr = ScrollReveal();

sr.reveal(".bienvenida--texto", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".bienvenida--habilidades", {
  duration: 3000,
  delay: 700,
  origin: "top",
  distance: "100px",
});

function active(e) {
  let menu = document.querySelector("#nav--mobile");
  let menuPc = document.querySelector("#nav--pc");

  if (e.target.id === "menu") {
    let brr1 = document.querySelector("#encabezado #menu > span:first-of-type"),
      brr2 = document.querySelector("#encabezado #menu span:nth-child(2)"),
      brr3 = document.querySelector("#encabezado #menu > span:last-of-type");

    brr1.classList.toggle("active-brr1");
    brr2.classList.toggle("active-brr2");
    brr3.classList.toggle("active-brr3");

    menu.classList.toggle("nav--activo");
    menuPc.classList.toggle("nav--activo__pc");
  }

  if (e.target.tagName === "A") {
    menu.classList.toggle("nav--activo");
    menuPc.classList.toggle("nav--activo__pc");
  }
}

function changeBack() {
  let btn = document.querySelector("input[type=checkbox]");
  let tailwind = document.querySelector(".skill:nth-child(4) > img");
  let jquery = document.querySelector(".skill:nth-child(6) > img");
  let logo = document.querySelector(".encabezado--logo > a > img");

  document.querySelector("body").classList.toggle("dark");

  if ((btn.dataset.color === "blanco")) {
    tailwind.src = "img/skills/skills2/tailwindcssBlack.svg";
    jquery.src = "img/skills/skills2/jqueryBlack.svg";
    logo.src = "img/logo-white.svg";

    btn.dataset.color = "negro";

    console.log(btn.dataset.color);
  } else {
    tailwind.src = "img/skills/skills2/tailwindcss.svg";
    jquery.src = "img/skills/skills2/jquery.svg";
    logo.src = "img/logo.svg";

    btn.dataset.color = "blanco";
    console.log(btn.dataset.color);
  }
}

$encabezado.addEventListener("click", active, true);
