import sumar from "./sumador";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenatexto = cadena.value + "";

  div.innerHTML = "<p>" + cadenatexto +"</p>";
});
