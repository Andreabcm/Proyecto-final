function imprimirPrecio() {
      let subtotal = 0;
      
      
      for(i=0; i<carritoDeCompra.length; i++){
            let precioItem = carritoDeCompra[i].precioPlato * carritoDeCompra[i].cantidad;
            subtotal += precioItem; 
      }

      let tasas = 0.10;
      let totalTasas = subtotal * tasas;
      let total = subtotal + totalTasas;
     


      document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
      document.getElementById("tasas").innerHTML = totalTasas.toPrecision(2) + "&#8364";
      document.getElementById("delivery").innerHTML = "FREE";
      document.getElementById("total").innerHTML = total + "&#8364";
   }

  