function cleanBody() {
    let principal = document.getElementById("principal");
    if (principal.style.display === "block") {
        principal.style.display = "none";  
    }
    else {
        principal.style.display = "block"
    }
};


function paginaSegunda() {
    let checkout = document.getElementById("checkout");
    if (checkout.style.display === "none") {
        checkout.style.display = "block";
    }
    else {
        checkout.style.display = "none"
    }
};

function cart() {
    cleanBody();
    paginaSegunda();
    añadir();
}





/* principal.style.display = (principal.style.display === "block")?"none":"block" 


    condicionales ternarios
*/