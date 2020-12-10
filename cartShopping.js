function cleanBody() {
    let principal = document.getElementById("principal");
    if (principal.style.display === "block") {
        principal.style.display = "none";
    }
};

function paginaSegunda() {
    let checkout = document.getElementById("checkout");
    if (checkout.style.display === "none") {
        checkout.style.display = "block";
    }
};

function cart() {
    cleanBody();
    paginaSegunda();
}






/* principal.style.display = (principal.style.display === "block")?"none":"block" 


    condicionales ternarios
*/