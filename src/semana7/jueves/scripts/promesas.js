const button = document.querySelector(".js_promesa");
let promesa;

console.log("button", button);
button.onclick = function () {
  console.log("hooaa");
  const name = window.prompt("Ingresa tu nombre");

  promesa = new Promise(function (resolve, reject) {
    name === "sebastian" ? resolve(name) : reject("no es el nombre esperado");
  });

  promesa
    .then((respuesta) => {
      console.log("respuesta", respuesta);
    })
    .catch((error) => console.log("error", error));
};

function getUsuarios() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([
        {
          name: "sebastian",
          age: 35,
        },
        {
          name: "jose",
          age: 35,
        },
        {
          name: "melisa",
          age: 35,
        },
      ]);
    }, 3000);
  });
}

console.log(fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/computers"));

getUsuarios()
  .then((respuesta) => {
    console.log("respuesta", respuesta);
  })
  .catch((err) => {
    console.log("err en catch usando callback", err);
  });

async function fn() {
  try {
    const data = await getUsuarios();
    console.log("data", data);
  } catch (err) {
    console.log("err usando aync await", err);
  }
}

fn();
