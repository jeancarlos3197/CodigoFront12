/*REGISTRO DE EVENTOS POR PROPIEDAD*/
const btnOne = document.querySelector(".js_btn_one");
console.log(btnOne);

btnOne.onclick = function () {
  console.log("hola mundo");
};

btnOne.onclick = function () {
  console.log("hola mundo funcion 2");
};

setTimeout(() => {
  btnOne.onclick = null;
}, 2000);

// btnOne.onclick = function () {
//   console.log("hola mundo funcion 3");
// };

/*ADDEVENTLISTENER*/
const btnTwo = document.querySelector(".js_btn_two");
function eventOne() {
  console.log("hola desde addEventListener eventOne");
  btnTwo.removeEventListener("click", eventOne);
  //    btnTwo.removeEventListener("click", eventOne); // remuevo el evento
}

function eventTwo() {
  console.log("hola desde addEventListener eventTwo");
  // con removeEventListener = puedo remover funciones de eventos
  //   btnTwo.removeEventListener("click", eventTwo);
}

// registrando eventos
// addEventListener = puedo registrar mas de una funcion por evento
btnTwo.addEventListener("click", function () {
  console.log("funcion anonima");
});
btnTwo.addEventListener("click", eventOne);
btnTwo.addEventListener("click", eventTwo);


/* 
  Usar addEventListener para registrar el evento submit
  tambien tendras que utilizar -preventDefault para evitar el comportamiento
  por defecto  del evento submit 
  tomar los valores de los input e imprimirlos con alert

  hola mi nombre es Jean Carlos
*/

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
form.addEventListener("submit",function(){
  event.preventDefault();

  alert(`Hola mi nombre es ${inputs[0].value} ${inputs[1].value}`);
});


/* 
  Ejercicio2
  eventos a usar mouseenter, mouseout

  crear 1 funcion que cuando ingrese a un elemento le cambie
  el color de fondo y cuando salga del elemento le quite 
  el color de fondo, para definir los colores utilizar el
  atributo data
*/

inputs.forEach(element=>{
  element.addEventListener('mouseenter',function(){
      this.style.backgroundColor = element.dataset.color;
  })
  element.addEventListener('mouseout',function(){
    this.style.backgroundColor = 'white';
  })
});