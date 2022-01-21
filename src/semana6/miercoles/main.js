/*
EVENTOS
*/
const button = document.querySelector(".js_button"); // atrapo el boton
const button2 = document.querySelector(".js_button_1");

function toggleMenu() {
  const menu = this.querySelector(".menu"); // atrapando el elemento menu
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
// registrando un evento
button.onclick = toggleMenu;
button2.onmouseover = toggleMenu;
button2.onmouseout = toggleMenu;

const button3 = document.querySelector(".js_button_3");
button3.onclick = function () {
  button.style.backgroundColor = "purple";
};
