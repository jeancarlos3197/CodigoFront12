function createUser() {
  function getValuesUser() {
    return {
      name: document.querySelector(".js_name").value,
      lastname: document.querySelector(".js_lastname").value,
      cellphone: document.querySelector(".js_cellphone").value,
      photo: document.querySelector(".js_photo").value,
      description: document.querySelector(".js_description").value,
    };
  }

  /*
GET
Usando el metodo get 
realizar una peticion al endpoint creado con mockapi y pintar los datos en el navegador
*/
  function getUsers(callback) {
    fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/users") // hago peticion al endpoint
      .then((usuarios) => {
        return usuarios.json(); // interpreto como formato json
      })
      .then((usuarios) => {
        callback(usuarios);
      })
      .catch((error) => {
        console.log("error", error);
      });
    
  }

  function cleanApp(){
    const app = document.getElementById('app');
    app.innerHTML = '';
  }

  function makeCardUser(user) {
    const cardUser = document.createElement("article");
    cardUser.innerHTML = `
        <div class="card">
            <img src=${user.photo} class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${user.name} ${user.lastname}</h5>
                <h5 class="card-title">${user.cellphone}</h5>
                <p class="card-text">${user.description}</p>
            </div>
            <button>X</button>
        </div>
     `;

    cardUser.classList.add("col", "col-4", "mb-4");
    cardUser.querySelector("button").onclick = function () {
      if (confirm("Estas seguro que deseas eliminar esta carta?")) {
        cardUser.remove();
      }
    };

    return cardUser;
  }

  function addDom(node, container) {
    const app = document.getElementById(container);
    app.appendChild(node);
  }

  getUsers(function (users) {
    users.forEach((user) => {
      addDom(makeCardUser(user), "app");
    });
  });

  /*
Post
Construir un formulario con los campos a guardar y despues invocar al metodo get para pintar los datos
de su coleccion
*/

  // referencia
  // para pintar datos en el navegador usaran , createElement, appendChild
  
  function saveUser(user, callback) {
    fetch("https://61ef3d18d593d20017dbb39f.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function eventForm() {
    const form = document.querySelector("form"); // tomo el formulario
    form.onsubmit = function (event) {
      cleanApp();
      // se registra evento de formulario
      event.preventDefault(); // se quita comportamiento por defecto del formulario

      saveUser(getValuesUser(), function (response) {
        // se ejecuta saveUser
        console.log("aca en esto momento se creo un usuario!!!");
        getUsers(function (users) {
          users.forEach((user) => {
            addDom(makeCardUser(user), "app");
          });
        });
      });
    };
  }

  
  eventForm();
}

createUser();