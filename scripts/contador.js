<<<<<<< HEAD
let secondArray = [];

=======
>>>>>>> 6aaedf66bc4728aa9a8a7079c9c91a3d275f029f
function suma(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
  listaPlatos[indicearray].cantidad++
  objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
<<<<<<< HEAD
  console.log(listaPlatos[indicearray])
  
  secondArray.unshift(listaPlatos[indicearray])
  document.querySelector(".elementosMenu2").innerHTML = secondArray;
=======
>>>>>>> 6aaedf66bc4728aa9a8a7079c9c91a3d275f029f
} 

function resta(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
    if (listaPlatos[indicearray].cantidad > 0) {
    listaPlatos[indicearray].cantidad--
    objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
  }
} 