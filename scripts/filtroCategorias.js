/* Al hacer click en el botón (.cardSlider) que realice la funcion filtrar, que consiste en:
buscar por el objeto 1 (listaPlatos) el elemento con nombre (nombreCategoria) que coincida con el nombre de la categoria clickeada
luego imprimir el objeto en forma de html
*/
let arrayfiltro = []
function filtrar(objeto){

    let idPlato = document.querySelector(".elementosMenu1 .contador").dataset.numero
    let objetoPlato = getPlato(arrayfiltro, idPlato);
    //let tipodeplato = objeto.id;

    if (objetoPlato === undefined) {
        arrayfiltro.push(listaPlatos[1])
    }

    //if (tipodeplato === listaPlatos.nombreCategoria){}

let texto = "";
for (let i = 0; i < arrayfiltro.length; i++){
    texto += `
    <div class="elemento">
    <img src="${arrayfiltro[i].imgPLato}" alt=" ">
    <div class="texto ">
        <p>${arrayfiltro[i].precioPlato}&#8364</p>
        <h5>${listaPlatos[i].nombrePlato}</h5>
        <h6>${arrayfiltro[i].descripcionPlato}</h6>
    </div>
    <div class="contador" data-numero="${arrayfiltro[i].id}">
        <button onClick="resta(this)" class="resta">-</button>
        <p class="quantity">${arrayfiltro[i].cantidad}</p>
        <button onClick="suma(this)" class="suma">+</button>
    </div>
</div>`
    }

    document.querySelector(".elementosMenu1").innerHTML = texto;

}
