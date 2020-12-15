let texto = "";

function imprimirPrecio() {
   
   for (let i = document.querySelector(".elementosMenu2 .elemento .contador").dataset.numero; i < carritoDeCompra.length; i++) {
      let subtotal = carritoDeCompra[i].precioPlato * carritoDeCompra[i].cantidad;
      subtotal[i] += subtotal[i]
      console.log(subtotal[i])
      return subtotal
      /*let tasas = 0.10 * subtotal;
      let total = subtotal + tasas;*/
   }
   texto += `<div class="precio">
   <div class="columnaTexto">
      <p>Subtotal</p>
      <p>Tasas</p>
      <p>Delivery</p>
      <p>TOTAL</p>
   </div>

   <div class="columnaPrecio">
      <p>${subtotal}&#8364</p>
      <p>{tasas}&#8364</p>
      <p>Free</p>
      <p>{total}&#8364</p>
   </div>
</div>
<button class="boton2">Enviar pedido</button>` 


}