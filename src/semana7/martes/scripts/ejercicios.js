// GET - Se hace la peticion
function obtenerComputadoras() {
  fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/computers")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (computers) {
      document.getElementById("app").innerHTML = "";
      computers.forEach(function (computadora) {
        // se recorre coleccion
        agregarNodoEnHtml(crearNodo(computadora));
      });
    });

  function crearNodo(computadora) {
    const nodo = document.createElement("article");
    nodo.innerHTML = `
      <div class="card">
          <img src="${computadora.photo}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5  class="card-title">Marca: ${computadora.marca}</h5>
              <p class="card-text">Memoria: ${computadora.memoria}</p>
              <p class="card-text">Color: ${computadora.color}</p>
          </div>
          <button>X</button>
        </div>
    `;

    nodo.classList.add("col", "col-4", "mb-4");
    nodo.querySelector("button").onclick = function () {
      if (confirm("Estas seguro que deseas eliminar esta carta?")) {
        fetch(`https://61ef3d18d593d20017dbb39f.mockapi.io/computers/${computadora.id}`, {
          method: "DELETE",                    
        })
        .then(function(respuesta){
          return respuesta.json();
        })
        .then(function(borrado){
          console.log(borrado)
          alert('Elemento Borrado');
          obtenerComputadoras();
        })
      }
    };

    return nodo;
  }

  function agregarNodoEnHtml(nodo) {
    const app = document.getElementById("app");
    app.appendChild(nodo);
  }
}

/*
GET
Usando el metodo get 
realizar una peticion al endpoint creado con mockapi y pintar los datos en el navegador
*/
// obtenerComputadoras();

/*POST */
function guardarComputadora() {
  const form = document.querySelector("form");

  function obtenerValores() {
    return {
      marca: document.querySelector(".js_marca").value,
      memoria: document.querySelector(".js_memoria").value,
      color: document.querySelector(".js_color").value,
      photo: document.querySelector(".js_photo").value,
    };
  }

  form.onsubmit = function (event) {
    event.preventDefault();

    fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/computers", {
      method: "POST",
      body: JSON.stringify(obtenerValores()),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        console.log("respuesta", respuesta);
        obtenerComputadoras();
      })
      .catch((error) => console.log("error", error));
    //   .then((respuesta) => console.log(respuesta));
    // .then(function(respuesta) {
    //     return respuesta.json()
    // })
  };
}
obtenerComputadoras();
guardarComputadora();

function obtenerComputadoras() {
  fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/computers/1")
  .then(response=>{
    console.log(response);
  })
  .then(response=>{
    console.log(response);
  })
  .catch(error=>{
    console.log(error)
  })
}