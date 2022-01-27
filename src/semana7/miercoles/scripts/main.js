const form = document.querySelector("form");
const app = document.getElementById("app");
const formUpdate = document.querySelector(".js_form_edit");
const botonClose = formUpdate.querySelector(".js_close");

function obtenerMascota(form) {
  return {
    nombre: form.querySelector(`.js_nombre`).value,
    tipo: form.querySelector(`.js_tipo`).value,
    color: form.querySelector(`.js_color`).value,
    sexo: form.querySelector(`.js_sexo`).value,
    photo: form.querySelector(`.js_photo`).value,
    edad: Number(form.querySelector(`.js_edad`).value),
  };
}

//retorna la api
async function api() {
  const url = "https://61ef3d18d593d20017dbb39f.mockapi.io/mascota";
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const jsonreturn = await jsonResponse;

  jsonreturn.forEach(function (computadora) {
    agregarListadoEnHtml(crearListado(computadora));
  });
}
api();

//retorna un card nodo
function crearListado(api) {
  const nodo = document.createElement("div");
  nodo.innerHTML = `
        <div class="card" style="width: 18rem">
        <img
        style="width: 200px;"
            src="${api.photo}"
            class="card-img-top mx-auto rounded-circle border border-success border-5 m-3"
            alt="..."
        />
        <div class="card-body text-center">
            <p class="card-text">${api.nombre}</p>
            <p class="card-text">${api.tipo}</p>
            <p class="card-text">${api.color}</p>
            <p class="card-text">${api.sexo}</p>
            <p class="card-text">${api.edad}</p>
        </div>
        <button class="boton editar" id="editar" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="boton eliminar" id="eliminar">X</button>
        </div>
    `;
  nodo.querySelector("#eliminar").onclick = () => {
    if (confirm("Estas seguro que quieres eliminar el elemento")) {
      fetch(`https://61ef3d18d593d20017dbb39f.mockapi.io/mascota/${api.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("respuesta", response);
          nodo.remove();
          alert(`Se elimino correctamente el id ${api.id}`);
        })
        .catch((error) => {
          alert(
            `No se puede eliminar el id ${api.id}, por favor intente mas tarde`
          );
        });
    }
  };

  nodo.querySelector("#editar").onclick = () => {
    console.log("Mascota", api);
    const inputNombre = document.querySelector(".js_form_edit .js_nombre");
    const inputTipo = document.querySelector(".js_form_edit .js_tipo");
    const inputColor = document.querySelector(".js_form_edit .js_color");
    const inputSexo = document.querySelector(".js_form_edit .js_sexo");
    const inputPhoto = document.querySelector(".js_form_edit .js_photo");
    const inputEdad = document.querySelector(".js_form_edit .js_edad");
    const inputId = document.querySelector(".js_form_edit .js_id");

    inputNombre.value = api.nombre;
    inputTipo.value = api.tipo;
    inputColor.value = api.color;
    inputSexo.value = api.sexo;
    inputPhoto.value = api.photo;
    inputEdad.value = api.edad;
    inputId.value = api.id;
  };

  nodo.classList.add("col-lg-4", "col-md-6");
  return nodo;
}

function agregarListadoEnHtml(nodo) {
  const app = document.getElementById("app");
  app.appendChild(nodo);
}

function clearListado() {
  const app = document.getElementById("app");
  app.innerHTML = ``;
}

//POST
form.onsubmit = function (event) {
  event.preventDefault();
  fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/mascota", {
    method: "POST",
    body: JSON.stringify(obtenerMascota(form)),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("response", response);
      clearListado();
      api();
      form.reset();
    });
};

//Update
formUpdate.onsubmit = function (event) {
  event.preventDefault();
  const idValue = formUpdate.querySelector(".js_id").value;
  console.log(formUpdate.querySelector(".js_id").value);
  console.log(obtenerMascota(formUpdate));
  fetch(`https://61ef3d18d593d20017dbb39f.mockapi.io/mascota/${idValue}`, {
    method:"PUT",
    body: JSON.stringify(obtenerMascota(formUpdate),),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response=>response.json())
  .then(response=>{
    console.log('response', response);
    clearListado();
    api();
    botonClose.click();
  })
  .catch(()=>
    alert(`No se puedo actualizar el id ${idValue} intente mas tarde`)
  );
};
