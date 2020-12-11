function suma(objeto) {
   let indicearray = objeto.parentElement.dataset.numero;
   let cantidadItems = listaPlatos[indicearray].cantidad;
        cantidadItems++
        console.log(listaPlatos[indicearray].cantidad = cantidadItems);
}

function resta(objeto) {
  let i = parseFloat(objeto.parentElement.querySelector("inpugitt").value)
    if(i > 0) {
        i--;
        return objeto.parentElement.querySelector("input").value = i;
    }
}
