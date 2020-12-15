function suma(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
  listaPlatos[indicearray].cantidad++
  objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;

  addToCart(listaPlatos[indicearray])
} 

function resta(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
    if (listaPlatos[indicearray].cantidad > 0) {
    listaPlatos[indicearray].cantidad--
    objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;

    borrarItem(listaPlatos[indicearray])
  }
} 

function addToCart(itemPlato) {
if (itemPlato.cantidad == 1){
        carritoDeCompra.push(itemPlato)
  }
}

function borrarItem(itemPlato) {
  let indice = carritoDeCompra.indexOf(itemPlato);
  if (itemPlato.cantidad == 0){
    carritoDeCompra.splice(indice,1);
  }
}