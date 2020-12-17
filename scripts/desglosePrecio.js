function imprimirPrecio(itemPlato) {
      let idPlato = itemPlato.id
      let objetoPlato = getPlato(carritoDeCompra, idPlato);
      let subtotal
      let tasas
      let total

      for(let i = 0; i <carritoDeCompra.length; i++){

      subtotal += objetoPlato.precioPlato * objetoPlato.cantidad;
      
      tasas += 0.10 * subtotal
      total += subtotal + tasas;
      
      return total
      }

      document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
      document.getElementById("tasas").innerHTML = tasas.toPrecision(2) + "&#8364";
      document.getElementById("delivery").innerHTML = "FREE";
      document.getElementById("total").innerHTML = total + "&#8364";
   }
