function imprimirPrecio(itemPlato) {
      let idPlato = itemPlato.id
      let objetoPlato = getPlato(carritoDeCompra, idPlato);

      for(let i = 0; i <carritoDeCompra.length; i++){

      let subtotal = objetoPlato.precioPlato[0] * objetoPlato.cantidad[0];
      let tasas = 0.10 * subtotal[0];
      let total = subtotal[0] + tasas[0];
      return total;
      }

      document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
      document.getElementById("tasas").innerHTML = tasas.toPrecision(2) + "&#8364";
      document.getElementById("delivery").innerHTML = "FREE";
      document.getElementById("total").innerHTML = total + "&#8364";
   }
