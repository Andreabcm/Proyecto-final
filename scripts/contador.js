function suma(objeto) {
  let indicearray = objeto.parentElement.dataset.numero;
  console.log(indicearray);
  for (let i = 0; i < carritoDeCompra.length; i++){
    if (true){
      addToCart(listaPlatos[indicearray])
      
    }
    else {carritoDeCompra[i].cantidad++
      
    }
  }
 console.log(listaPlatos[indicearray]);

  objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;

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
          carritoDeCompra.push(itemPlato)
  
}

function borrarItem(itemPlato) {
  let indice = carritoDeCompra.indexOf(itemPlato);
  if (itemPlato.cantidad == 0){
    carritoDeCompra.splice(indice,1);
  }
}

function eliminarItem(botonEliminar) {
  let indiceCarrito = botonEliminar.parentElement.dataset.numero;
  carritoDeCompra[indiceCarrito].cantidad = 0;
  botonEliminar.parentElement.style.display = "none";  
}

