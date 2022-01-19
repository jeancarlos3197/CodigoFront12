const h1 = document.querySelector("h1");
console.log("h1", h1);

const h2 = document.querySelector("h2");
console.log("h2", h2);

const h3 = document.querySelector("h3");
console.log("h3", h3);

const h4 = document.querySelector("h4");
console.log("h4", h4);

const h5 = document.querySelector("h5");
console.log("h5", h5);

const h6 = document.querySelector("h6");
console.log("h6", h6)

const parrafos = document.querySelectorAll("p");
console.log("p", parrafos)

for (let index = 0; index < parrafos.length; index++) {
    const element = parrafos[index];
    console.log(element)
    
}

const input = document.querySelector("input");
console.log("input", input.value)

const a = document.querySelector("a");
console.log(a)
console.log("%O", a);
a.href = "https://google.com";
a.id = "idAgregado";
a.innerHTML = "LINK MODIFICADO";
a.style.textDecoration = "none"
a.style.color ="orange"

