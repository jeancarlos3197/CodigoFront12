let aboutMe = document.getElementById("cercaMi");
let portfolio = document.getElementById("portafolio");
let service = document.getElementById("servicio");
let blog = document.getElementById("miBlog");
let contact = document.getElementById("contacto");

function eventoClickHeader(){

    aboutMe.addEventListener("click", ()=>{
        aboutMe.classList.add("listadoClick");
        portfolio.classList.remove("listadoClick");
        service.classList.remove("listadoClick");
        blog.classList.remove("listadoClick");
        contact.classList.remove("listadoClick");
    });
    portfolio.addEventListener("click", ()=>{
        portfolio.classList.add("listadoClick");
        aboutMe.classList.remove("listadoClick");
        service.classList.remove("listadoClick");
        blog.classList.remove("listadoClick");
        contact.classList.remove("listadoClick");
    });
    service.addEventListener("click", ()=>{
        service.classList.add("listadoClick");
        aboutMe.classList.remove("listadoClick");
        portfolio.classList.remove("listadoClick");
        blog.classList.remove("listadoClick");
        contact.classList.remove("listadoClick");
    });
    blog.addEventListener("click", ()=>{
        blog.classList.add("listadoClick");
        aboutMe.classList.remove("listadoClick");
        portfolio.classList.remove("listadoClick");
        service.classList.remove("listadoClick");
        contact.classList.remove("listadoClick");
    });
    contact.addEventListener("click", ()=>{
        contact.classList.add("listadoClick");
        aboutMe.classList.remove("listadoClick");
        portfolio.classList.remove("listadoClick");
        service.classList.remove("listadoClick");
        blog.classList.remove("listadoClick");
    });
}
eventoClickHeader();