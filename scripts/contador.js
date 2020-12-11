function suma(objeto) {
   let indicearray = objeto.parentElement.dataset.numero;
   let cantidadItems = listaPlatos[indicearray].cantidad;
        listaPlatos[indicearray].cantidad = 6;
        console.log(cantidadItems)
}

function resta(objeto) {
  let i = parseFloat(objeto.parentElement.querySelector("inpugitt").value)
    if(i > 0) {
        i--;
        return objeto.parentElement.querySelector("input").value = i;
    }
}
