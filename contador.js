let max = 10;
let min = 0;
function suma(objeto) {
   let indicearray = objeto.parentElement.dataset.numero;
   let cantidadItems = listaPlatos[indicearray].cantidad;
   cantidadItems++;
   listaPlatos[indicearray].cantidad = cantidadItems
}
function resta(objeto) {
  let i = parseFloat(objeto.parentElement.querySelector(".quantity").innerHTML)
    if(i > min) {
        i--;
        return objeto.parentElement.querySelector(".quantity").innerHTML = i;
    }
}