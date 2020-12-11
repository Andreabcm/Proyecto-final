let secondArray = [" "];

function suma(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
  listaPlatos[indicearray].cantidad++
  objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
  secondArray.push(objeto.parentElement.dataset.numero.listaPlatos[indicearray])
  document.querySelector(".elementosMenu2").innerHTML = secondArray;
} 

function resta(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
    if (listaPlatos[indicearray].cantidad > 0) {
    listaPlatos[indicearray].cantidad--
    objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
  }
} 