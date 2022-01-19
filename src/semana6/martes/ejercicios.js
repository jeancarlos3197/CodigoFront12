// Primer ejercicio,
// dado 3 parrafos, y dentro un enlace cada uno
// atrapar cada uno de los parrafos y 
// cambiar el color, 
// tamaño de fuente, cambiar el font-family

// Los enlaces en relacion al parrafo y cambiar el atributo href y su texto
// crear una funcion que resiva un elemento tipo nodo y tambien las propiedades a manipular

const parrafos = document.querySelectorAll('p');


function parrafoStyle(nodo, objeto){
    nodo.style.color = objeto.color;
    nodo.style.fontSize = objeto.fontSize;    
    nodo.style.fontFamily = objeto.fontFamily;
    nodo.firstElementChild.innerHTML = objeto.innerHTML;
    nodo.firstElementChild.href = objeto.href;
    nodo.firstElementChild.setAttribute("target","_blank")
}

const objStyle={
    color:"red",
    fontSize:"30px",
    fontFamily:"Arial",
    innerHTML: "TextoModificado",
    href:"https://google.com.pe"
};

parrafos.forEach(element=>{
    parrafoStyle(element,objStyle);
})

/*
DOM - EJERCICIO DOS
Dado una estructura de ul

Capturar cada uno de los li y agregarle los siguients estilos
fontSize
color
backgroundColor

tambien modificar su contenido y agregarle la palabra hola mundo

para este ejercicio utilizar querySelectorAll
*/

const li = document.querySelectorAll("li");

const objStylelist={
    fontSize:"30px",
    color:"red",
    backgroundColor:"black",
};

function listStyle(nodo, objeto){
    nodo.style.fontSize = objeto.fontSize;    
    nodo.style.color = objeto.color;
    nodo.style.backgroundColor = objeto.backgroundColor
    nodo.innerHTML = "Hola mundo"
}

listStyle(li[0], objStylelist);

/*
DOM EJERCICIO TRES
Dado una estructura de divs

Atrapar el primer elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

Atrapar el ultimo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

Atrapar el segundo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily

utilizar nextElementSibling, prevElementSibling, firstElement, lastElement
*/

const div = document.querySelector('div');

const objDivStyle=[
    {
        backgroundColor: "orange",
        fontSize:"30px",
        color:"red",
        fontFamily:"Arial",
    },
    {
        backgroundColor: "pink",
        fontSize:"30px",
        color:"blue",
        fontFamily:"Times New Roman",
    },
    {
        backgroundColor: "black",
        fontSize:"30px",
        color:"purple",
        fontFamily:"Calibri",
    }
];

function divStyle(nodo, objeto){
    nodo.style.backgroundColor = objeto.backgroundColor;    
    nodo.style.fontSize = objeto.fontSize;
    nodo.style.color = objeto.color
    nodo.style.fontFamily = objeto.fontFamily
}
divStyle(div.firstElementChild,objDivStyle[0]);
divStyle(div.firstElementChild.nextElementSibling,objDivStyle[1]);
divStyle(div.lastElementChild,objDivStyle[2]);