let max = 10;
let min = 0;
function suma(objeto) {
   let i = parseFloat(objeto.parentElement.querySelector(".quantity").innerHTML)
    if(i < max) {
        i++;
        return objeto.parentElement.querySelector(".quantity").innerHTML = i;
    }
}
function resta(objeto) {
  let i = parseFloat(objeto.parentElement.querySelector(".quantity").innerHTML)
    if(i > min) {
        i--;
        return objeto.parentElement.querySelector(".quantity").innerHTML = i;
    }
}