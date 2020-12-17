function imprimirPrecio(itemPlato) {
      let idPlato = itemPlato.id
      let objetoPlato = getPlato(carritoDeCompra, idPlato);

      let subtotal = objetoPlato.precioPlato * objetoPlato.cantidad
      let tasas = 0.10 * subtotal
      let total = subtotal + tasas

      document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
      document.getElementById("tasas").innerHTML = tasas.toPrecision(2) + "&#8364";
      document.getElementById("delivery").innerHTML = "FREE";
      document.getElementById("total").innerHTML = total + "&#8364";
   }
