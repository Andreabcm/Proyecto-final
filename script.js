const items= [
    {
        imgPlato= "./images/"
        precioPlato= 52.00,
        nombrePlato= "Chicken Veggi Salad",
        descripcionPlato= "With cheese sauce",
        cantidad= 0
    },

    {
        precioPlato= 21.00,
        nombrePlato= "Chicken Veggi Salad",
        descripcionPlato= "With cheese sauce",
        cantidad= 0
    },

    {
        precioPlato= 32.00,
        nombrePlato= "Chicken Veggi Salad",
        descripcionPlato= "With cheese sauce",
        cantidad= 0
    },
]

let elemento= "";

function printItems(){

    for  (let i=0; i < items.length; i++){
    elemento += `<div class="elemento">
    <img src="breakfast.jpg" alt="">
    <div class="texto">
        <p>$${items[i].precioPlatos}</p>
        <h5>${items[i].nombrePlato}</h5>
        <h6>${items[i].descripcionPlato}</h6>
    </div>
    <div class="contador">
        <button class="resta">-</button>
        <input type="number" id="numero" value="00">
        <button class="suma">+</button>
    </div>
</div>`
}
}

printItems();

document.querySelector(".fila4").innerHTML = elemento;