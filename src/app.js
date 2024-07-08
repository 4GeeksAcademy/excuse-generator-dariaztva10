/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ["¡Mi pez", "¡Mi enemiga", "¡Mi odontologo", "¡Mi caimán"];
let accion = ["vomitó en", "destruyó", "robó", "se atragantó con"];
let que = ["mi proyecto final", "mis pestañas postizas", "mi jet privado"];
let cuando = [
  "antes de la clase!",
  "mientras dormía en el trabajo!",
  "mientras aprendía a bailar zumba!",
  "durante su segunda merienda!",
  "mientras accedía a la Dark Web!"
];

function generateExcuse() {
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
