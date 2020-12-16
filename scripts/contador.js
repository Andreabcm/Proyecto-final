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
    let indicearray = objeto.parentElement.dataset.numero;
    if (listaPlatos[indicearray].cantidad > 0) {
        listaPlatos[indicearray].cantidad--
            objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;

        borrarItem(listaPlatos[indicearray])
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
    let indice = carritoDeCompra.indexOf(itemPlato);
    if (itemPlato.cantidad == 0) {
        carritoDeCompra.splice(indice, 1);
    }
}

function eliminarItem(botonEliminar) {
    let indiceCarrito = botonEliminar.parentElement.dataset.numero;
    carritoDeCompra[indiceCarrito].cantidad = 0;
    carritoDeCompra.splice(indiceCarrito, 1);
    if (carritoDeCompra[indiceCarrito].cantidad === 0) {
        document.querySelector(".quantity").innerHTML = 0;
    }
}