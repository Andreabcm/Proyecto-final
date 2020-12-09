let max = 10;
let min = 0;
function suma(objeto) {
   let i = parseFloat(objeto.parentElement.querySelector("input").value)
    if(i < max) {
        i++;
        return objeto.parentElement.querySelector("input").value = i;
    }
}
function resta(objeto) {
  let i = parseFloat(objeto.parentElement.querySelector("input").value)
    if(i > min) {
        i--;
        return objeto.parentElement.querySelector("input").value = i;
    }
}