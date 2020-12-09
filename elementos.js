let elementos = "";
 function platosImprimir(){
    for (let i = 0; i < listaPlatos.length; i++){
        elementos += `<div class="elemento">
    <img src="${listaPlatos[i].imgPLato}" alt=" ">
    <div class="texto ">
        <p>$${listaPlatos[i].precioPlato}</p>
        <h5>${listaPlatos[i].nombrePlato}</h5>
        <h6>${listaPlatos[i].descripcionPlato}</h6>
    </div>
    <div class="contador">
        <button onClick="resta(this)" class="resta">-</button>
        <input id="input" type="number" value="0" />
        <button onClick="suma(this)" class="suma">+</button>
    </div>
</div>`
    }
}

platosImprimir();
document.querySelector(".fila4").innerHTML = elementos;