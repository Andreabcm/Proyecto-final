let texto = "";

function imprimirPrecio() {
    
  
        console.log (carritoDeCompra)
        texto += `<div class="precio">
        <div class="columnaTexto">
           <p>Subtotal</p>
           <p>Tasas</p>
           <p>Delivery</p>
           <p>TOTAL</p>
        </div>

        <div class="columnaPrecio">
           <p>{carritoDeCompra[i].precioPlato}&#8364</p>
           <p>{carritoDeCompra[i].precioPlato}&#8364</p>
           <p>Free</p>
           <p>{carritoDeCompra[i].precioPlato}&#8364</p>
        </div>
    </div>
    <button class="boton2">Enviar pedido</button>` 
        
    
        
}

imprimirPrecio();
document.querySelector(".desglosePrecio").innerHTML = texto;



