function getPlato(arrayMenu, idPlato) {
    let plato = arrayMenu.find(function(item) {
        return item.id == idPlato;
    });
    return plato;
}

function suma(objeto) {
    let idPlato = objeto.parentElement.dataset.numero;
    let objetoPlato = getPlato(listaPlatos, idPlato);
    objetoPlato.cantidad++;
    addToCart(objetoPlato);

    objeto.parentElement.querySelector("p").innerHTML = objetoPlato.cantidad;
}

function resta(objeto) {
    let idPlato = objeto.parentElement.dataset.numero;
    let objetoPlato = getPlato(listaPlatos, idPlato);
    if (objetoPlato.cantidad > 0) {
        objetoPlato.cantidad--
        borrarItem(objetoPlato)

        objeto.parentElement.querySelector("p").innerHTML = objetoPlato.cantidad;
    }
}

function addToCart(itemPlato) {
    let idPlato = itemPlato.id;
    let platoEnCarrito = getPlato(carritoDeCompra, idPlato);

    if (platoEnCarrito === undefined) {
        carritoDeCompra.push(itemPlato);
    }
    return;
}

function borrarItem(itemPlato) {
    let idPlato = itemPlato.id;
    let platoEnCarrito = getPlato(carritoDeCompra, idPlato);
    
    let indice = carritoDeCompra.indexOf(itemPlato);
    if (itemPlato.cantidad == 0) {
        carritoDeCompra.splice(indice, 1);
    }
}

function eliminarItem(botonEliminar) {
  let indiceCarrito = botonEliminar.parentElement.dataset.numero;
  carritoDeCompra[indiceCarrito].cantidad = 0;
  botonEliminar.parentElement.remove();
  
  if (carritoDeCompra[indiceCarrito].cantidad === 0){
    document.querySelector(".quantity").innerHTML = 0;
  }
}