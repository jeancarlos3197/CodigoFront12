const button = document.querySelector("button");
const body = document.querySelector("body");

function ejemploDos(){
    button.onclick = function (){
        console.log("funcion!!");
        // body.style.backgroundColor='red';

        console.log(window.getComputedStyle(body).backgroundColor);
        console.log('body.style.background', body.style.backgroundColor);
        console.log('body.style', body.style);

        if(body.style.backgroundColor == 'yellow'){
            body.style.backgroundColor='red';
            
        }else{
            body.style.backgroundColor='yellow'
        }
    }
}

// ejemploUno();

function ejemploDos(){
    button.onclick=function(){
        console.log(body.classList.contains('bgyellow'));

        if(body.classList.contains('bgyellow')){
            body.classList.add("bgred");
            body.classList.remove("bgyellow");
        } else{
            body.classList.add("bgyellow");
            body.classList.remove("bgred");
        }
        body.classList.replace('clase-a-reemplazar',"bgblue")
    }
}
// ejemploDos();

function ejemploTres(){

    button.addEventListener('click', function(){
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>Título del articulo</h2>
            <p>parrafo del articulo</p>
            <img src="https://picsum.photos/200/300" />
        `;
        console.log(article);
    
        body.appendChild(article)
    });
}
ejemploTres();