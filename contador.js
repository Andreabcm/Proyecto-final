let i = 0;
let numero;
function suma() {
    if (i < 10){
        i++;
        numero = document.getElementById("numero").value = i;
        return numero;
    }
}

function resta() {
    if(i > 0) {
        i--;
        document.getElementById("numero").value = i;
        return numero;
    }
}