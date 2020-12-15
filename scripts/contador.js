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
  if (carritoDeCompra.cantidad < 1){
    this.carritoDeCompra.splice(carritoDeCompra, 0)
  }
}

