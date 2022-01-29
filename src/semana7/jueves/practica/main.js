/* form.onsubmit = function (event) {
  event.preventDefault();
  tarea.push(obtenerTareas());
  agregarListado(armarlistado(obtenerTareas()), list);
  form.reset();
  tarea.forEach((element, index)=>{
      console.log(index, element);
      localStorage.setItem(`${index}`, JSON.stringify(element));
  })
};

function obtenerTareas(){
    return {
        tarea: form.querySelector('.js-tarea').value
    }
}

function armarlistado(object) {
  const nodo = document.createElement("li");
  nodo.innerHTML = `
    <input
        class="form-check-input me-3"
        type="checkbox"
        value=""
        id="flexCheckDefault"
    />
    <label class="form-check-label me-3" for="flexCheckDefault">
        ${object.tarea}
    </label>
    <button class="btn btn-danger">
        X
    </button>
    `;

    nodo.classList.add("d-flex", "align-items-center", "mb-3");
    return nodo;
}

function agregarListado(nodo, list){
    list.appendChild(nodo);
}
 */

function guardarTareaEnStorage(tarea) {
  let tareas = [];
  if (localStorage.getItem("tareas")) {
    tareas = [...JSON.parse(localStorage.getItem("tareas")), tarea];
  } else {
    tareas.push(tarea);
  }

  // guardando el objeto en formato json
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareasEnStorage() {
  return localStorage.getItem("tareas") || JSON.stringify([]);
}

function eliminarTareaEnLocalStorage(tarea) {
  const tareasFiltradas = JSON.parse(obtenerTareasEnStorage()).filter(
    (itemTarea) => itemTarea.task !== tarea.task
  );

  localStorage.setItem("tareas", JSON.stringify(tareasFiltradas));
}

async function todoList() {
  const form = document.querySelector("form"); // atrapando elemento formulario

  /*
     Funcion que creara elemento nodo para inyectar en html
    */
  function creaTarea(tarea) {
    const elementNodo = document.createElement("li");
    elementNodo.classList.add("d-flex", "align-items-center", "mb-3");
    elementNodo.innerHTML = `
      <input
          class="form-check-input me-3 js_check"
          type="checkbox"
          value=""
          id="flexCheckDefault"
      />
      <label class="form-check-label me-3" for="flexCheckDefault">
          ${tarea.task}
      </label>
      <button class="btn btn-danger js_delete">
          X
      </button>
      `;

    elementNodo.querySelector(".js_delete").onclick = async function () {
      if (window.confirm("Estas seguro que quieres eliminar la tarea")) {
        // await eliminarTarea(tarea.id);
        eliminarTareaEnLocalStorage(tarea);
        elementNodo.remove();
      }
    };

    elementNodo.querySelector(".js_check").onchange = function (event) {
      console.log(this.checked);
    };

    return elementNodo;
  }

  /*
     Funcion que inyecta elemento en el dom
    */
  function inyectarElementoEnElDom(elemento) {
    const contenedor = document.getElementById("tasks");

    contenedor.appendChild(elemento);
  }

  /*
    Obtiene las tareas del servicio y las agrega al html
    */
  async function inyectaTareasPorServicio() {
    // OBTENIENDO TAREAS Y RECORRIENDO LAS TAREAS Y CREANDOLAS
    // const tareas = await obtenerTareas();
    const tareas = JSON.parse(obtenerTareasEnStorage());
    console.log(tareas);
    tareas.forEach((tarea) => {
      inyectarElementoEnElDom(creaTarea(tarea));
    });
  }

  /*
     Registro de evento de formulario
    */
  form.onsubmit = async function (event) {
    // registro evento submit
    event.preventDefault(); // quita comportamiento por defecto
    const inputValueTarea = form.querySelector("input").value; // obtiene el valor del input

    // graba tarea en servidor
    // await guardarTarea({
    //   task: inputValueTarea,
    // });

    guardarTareaEnStorage({
      task: inputValueTarea,
    });

    // inyecta el elemento en el dom
    inyectarElementoEnElDom(
      creaTarea({
        task: inputValueTarea,
      })
    );

    form.reset();
  };

  inyectaTareasPorServicio();
}

todoList();
