function ponerDislexia(){

    let body = document.getElementsByTagName("body")[0];

    body.setAttribute("class", "dyslexic-mode");
}

function quitarDislexia(){

    let body = document.getElementsByTagName("body")[0];
    

    body.setAttribute("class", "normal-mode");
}

function oscurecer(){
    let principal = document.getElementById("principal");
    let footer = document.getElementsByTagName("footer")[0];

    principal.classList.add("oscuro");
    footer.classList.add("oscuro");
}
function aclarar(){
    let principal = document.getElementById("principal");
    let footer = document.getElementsByTagName("footer")[0];

    principal.classList.remove("oscuro");
    footer.classList.remove("oscuro");
}

document.addEventListener("DOMContentLoaded", function(){
    let main = document.getElementsByTagName("main")[0];
    let articles = main.getElementsByTagName("article")
    for(let articulo of articles){
        console.log("a");
        articulo.classList.add("col-xl-3","col-md-4", "col-6");
    }

    let modo_dark = document.getElementById("tema_oscuro");
    let modo_normal = document.getElementById("tema_normal");


    modo_dark.addEventListener("click", oscurecer);
    modo_normal.addEventListener("click", aclarar);
});