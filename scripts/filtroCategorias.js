/* Al hacer click en el botón (.cardSlider) que realice la funcion filtrar, que consiste en:
buscar por el objeto 1 (listaPlatos) el elemento con nombre (nombreCategoria) que coincida con el nombre de la categoria clickeada
luego imprimir el objeto en forma de html
*/

function filtrar(){
    let catFiltrada = "";
    for(let i = 0; i < listaPlatos.length; i++){;
        for(let j = 0; j < listaCategorias.length; j++){
            if(listaPlatos[i].nombreCategoria === listaCategorias[j].nombreCategoria){
                catFiltrada.push(listaCategorias)

            }
               
        }
    }
}


