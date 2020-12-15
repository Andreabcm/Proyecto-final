
function sumaTotal() {
    let indicearray = objeto.parentElement.dataset.numero;
    carritoDeCompra[indicearray].precioPlato += carritoDeCompra[indicearray].precioPlato

    addSuma(carritoDeCompra[indicearray])
}

function tasas() {
    let indicearray = objeto.parentElement.dataset.numero;
    carritoDeCompra[indicearray].precioPlato * 0.1

    addTasas(carritoDeCompra[indicearray])
}

function addTotal(sumaItems){
    precioTotal.push(sumaItems)
}









