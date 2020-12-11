let elementos = "";

function platosImprimir() {
    for (let i = 0; i < listaPlatos.length; i++) {
        elementos += `<div class="elemento">
    <img src="${listaPlatos[i].imgPLato}" alt=" ">
    <div class="texto ">
        <p>${listaPlatos[i].precioPlato}</p>
        <h5>${listaPlatos[i].nombrePlato}</h5>
        <h6>${listaPlatos[i].descripcionPlato}</h6>
    </div>
    <div class="contador" data-numero="${[i]}">
        <button onClick="resta(this)" class="resta">-</button>
        <input type="number" value="${listaPlatos[i].cantidad}" />
        <button onClick="suma(this)" class="suma">+</button>
    </div>
</div>`
    }
}

platosImprimir();
const cambio = document.querySelector(".elementosMenu1").innerHTML = elementos;
document.querySelector(".elementosMenu2").innerHTML = elementos;