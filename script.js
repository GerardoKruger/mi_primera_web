/*
let contenidoTitulo = "nombre";

let titulo = document.getElementById("acerca");
titulo.innerHTML = contenidoTitulo;
console.log(titulo)


let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "nombre") {
    titulo.innerHTML = "Descripcion";
} else {
    console.log("no se puede cambiar el titulo")
}

let nombre = "Paco";
let lugar = "vivo";
let palabra = "intentando";

let parrafo = document.querySelector(".parrafo-2")

function cambiarParrafo(nombre, lugar, palabra){
    let contenido = `Me llamo ${nombre}, ${lugar} en Tandil y estoy ${palabra} programar.`;

    return contenido;
}

parrafo.innerText = cambiarParrafo(nombre, lugar, palabra);
*/

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".lista");
    navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre2 = document.getElementById("nombre");
const parrafo2 = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo2.innerHTML = "";

  if (nombre2.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo2.innerHTML = warnings;
  } else {
    parrafo2.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});