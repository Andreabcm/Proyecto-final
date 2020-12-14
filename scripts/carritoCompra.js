function añadir() {
    
    let indice = document.querySelector(".contador").dataset.numero

    for (let i = 0; i < listaPlatos[0].cantidad; i++) {
        secondArray += `<div class="elemento">
    <img src="${secondArray[i].imgPLato}" alt=" ">
    <div class="texto ">
        <p>${secondArray[i].precioPlato}&#8364</p>
        <h5>${secondArray[i].nombrePlato}</h5>
        <h6>${secondArray[i].descripcionPlato}</h6>
    </div>
    <div class="contador" data-numero="${[i]}">
        <button onClick="resta(this)" class="resta">-</button>
        <p class="quantity">${secondArray[i].cantidad}</p>
        <button onClick="suma(this)" class="suma">+</button>
    </div>
</div>`
    }
    secondArray.push(document.querySelector(".elementosMenu2"))
    document.querySelector(".elementosMenu2").innerHTML = secondArray;
    console.log(secondArray)
}