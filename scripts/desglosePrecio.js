



let precioTotal = [];
let subTotal = "";

function imprimirPrecio() {
      let i = document.querySelector(".elementosMenu2 .elemento .contador").dataset.numero
      let subtotal = carritoDeCompra[i].precioPlato * carritoDeCompra[i].cantidad;
      let tasas = 0.10 * subtotal;
      let total = subtotal + tasas;

      document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
      document.getElementById("tasas").innerHTML = tasas.toPrecision(2) + "&#8364";
      document.getElementById("delivery").innerHTML = "FREE";
      document.getElementById("total").innerHTML = total + "&#8364";
   }
