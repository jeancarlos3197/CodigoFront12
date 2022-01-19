const p = document.querySelectorAll('p');

console.log(p);
console.log("%O", p[0]);

p[0].innerHTML = "<b>Hola mundo desde js</b>";
p[1].textContent = "<b>Hola mundo desde js</b>";
p[2].style.background = "red";
p[2].style.color = "white";

p[3].setAttribute("style","color:red; background-color:orange");
p[3].setAttribute("class", "clase-agregada");
p[3].setAttribute("id", "id-agregada");

setTimeout(()=>{
    p[3].removeAttribute("style");
    p[3].removeAttribute("class");
    p[3].removeAttribute("id");
}, 2000);

console.log(p[3].clientWidth);
console.log(p[3].clientHeight);