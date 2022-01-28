
function fnOne() {
    let respuestaDeFetch = [];
    fetch("https://61ef3d0cd593d20017dbb393.mockapi.io/tasks")
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        console.log("respuesta", respuesta);
        respuestaDeFetch = respuesta;
      });
    console.log("chao mundo!!!");
    console.log("respuestaDeFetch", respuestaDeFetch);
  }
  fnOne();
  
  async function fn() {
    try {
      const data = await fetch(
        "https://61ef3d0cd593d20017dbb393.mockapi.io/tasks"
      ).then((respuesta) => respuesta.json());
  
      const computadoras = await fetch(
        "https://61ef3d0cd593d20017dbb393.mockapi.io/computers"
      ).then((respuesta) => respuesta.json());
  
      console.log("data", data);
      console.log("computadoras", computadoras);
      console.log("wowww siguiente");
      console.log("siguiente linea");
    } catch (e) {
      console.log("e", e);
    }
  }
  // fn();