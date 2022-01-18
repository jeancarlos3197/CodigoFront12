/*
OBJETO - elemento donde podemos modelar informacion 
*/
let perro = {
  nombre: "sebastian",
  edad: 2,
  raza: "doberman",
  pais: "peru",
  sayInfo: function () {
    console.log(this);
    // return perro.nombre + " " + perro.edad;
    return this.nombre + " " + this.edad;
  },
};

console.log(perro.sayInfo());

let computadora = {
  marca: "acer",
  procesador: "intel",
  anio: 2020,
  getMarca: function () {
    console.log(this);
    return this.marca;
  },
  getAnio: function () {
    return this.anio;
  },
  getAllDetail: function () {
    return this.marca + this.procesador + this.anio;
  },
  setMarca: function (marca) {
    this.marca = marca;
  },
};

console.log(computadora.getMarca());
console.log(computadora.setMarca("ibm"));

// console.log("computadora", computadora);

let alumnos = {
  nombres: [],
  setAlumno: function (nombre) {
    this.nombres.push(nombre); // agrego elementos al array
  },
  getAlumno: function (nombre) {
    return this.nombres.find((el) => el.nombre == nombre); // buscando elemento en coleccion con find
  },
};

alumnos.setAlumno({
  nombre: "sebastian",
  apellido: "yabiku",
  edad: 32,
  pais: "peru",
});
alumnos.setAlumno({
  nombre: "jose",
  apellido: "maroma",
  edad: 34,
  pais: "peru",
});
alumnos.setAlumno({
  nombre: "melisa",
  apellido: "caicho",
  edad: 34,
  pais: "peru",
});

console.log("alumno jose", alumnos.getAlumno("jose"));
console.log("alumno melisa", alumnos.getAlumno("melisa"));
console.log("alumnos", alumnos);

/*
nombre 
detalle
precio
marca
numero de serie
anio
procedencia
*/

let iphone = {
  nombre: "iphone",
  modelo: 11,
  marca: "apple",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let android = {
  nombre: "android",
  modelo: 12,
  marca: "huawey",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let huawey = {
  nombre: "huawey",
  modelo: 12,
  marca: "abc",
  numeroSerie: 1234,
  procendencia: "usa",
  getInfo: function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  },
};

let firefox = new Object(); // {}
firefox.nombre = "firefox";
firefox.modelo = "firefox";
firefox.marca = "apple";
firefox.numeroSerie = 1234;
firefox.procendencia = "usa";
firefox.getInfo = function () {
  return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
};

/*CONSTRUCTOR DE OBJETOS */
function makeMobile(props) {
  this.nombre = props.nombre;
  this.modelo = props.modelo;
  this.marca = props.marca;
  this.numeroSerie = props.numeroSerie;
  this.procedencia = props.procedencia;
  this.getInfo = function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  };
}

let celularUno = new makeMobile({
  nombre: "celularUno",
  modelo: "modeloUno",
  marca: "marcaUno",
  numeroSerie: "unoserie",
  procedencia: "china",
});

console.log("celularUno", celularUno.getInfo());

let celuLarDos = new makeMobile({
  nombre: "celulardos",
  modelo: "modelodos",
  marca: "marcados",
  numeroSerie: "dosserie",
  procedencia: "china",
});

console.log("celuLarDos", celuLarDos.getInfo());

/*
OBJECTOS NATIVOS 
*/

// string
console.log("sebastian".length); // 9
console.log("sebastian".concat(" yabiku")); // sebastian yabiku
console.log("sebastian".includes("se")); // true
console.log("sebastian".endsWith("tian")); // true
console.log("sebastian".charAt(0).toUpperCase());

// array
const array = [0, 1, 2, 3, 4, 5]; // new Array(0, 1, 2, 3, 4, 5)
const array2 = [6, 7, 8, 9];

console.log(array.length); // 6
console.log(array.concat(array2)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array.push(20); // agrega al final del array
array.pop(); // elimina el ultimo del array
array.shift(); // elimina el primer elemento
array.unshift(400); // agrega al inicio

// splice
console.log(array);
array.splice(2, 3);
console.log(array);
console.log(array.reverse());

/*ALUMNOS */
const mascotas = [
  {
    name: "mascota uno",
    edad: 1,
    raza: "uno",
    pais: "peru",
    sexo: "h",
  },
  {
    name: "mascota dos",
    edad: 2,
    raza: "dos",
    pais: "peru",
    sexo: "h",
  },
  {
    name: "mascota tres",
    edad: 3,
    raza: "tres",
    pais: "peru",
    sexo: "m",
  },
  {
    name: "mascota cuatro",
    edad: 4,
    raza: "cuatro",
    pais: "chile",
    sexo: "m",
  },
];

let numeros = [0, 1, 2, 3, 4, 5];

const copiaModificada = mascotas.map((referencia) => {
  return {
    name: referencia.name,
    edad: referencia.edad,
    raza: referencia.raza,
    pais: referencia.pais,
    otraProPiedad: true,
  };
});

const copiaNumeros = numeros.map((numero) => numero + 2);

console.log("copiaModificada", copiaModificada);
console.log("mascotas", mascotas);

console.log("numeros", numeros);
console.log("copiaNumeros", copiaNumeros);

// filter
const mascotasHembra = mascotas.filter((mascota) => {
  return mascota.sexo == "h";
});

const mascotasMacho = mascotas.filter((mascota) => {
  return mascota.sexo == "m";
});

console.log("mascotasHembra", mascotasHembra);
console.log("mascotasMacho", mascotasMacho);

// find
const mascotaUno = mascotas.find((mascota) => {
  return mascota.name == "mascota uno";
});
console.log("mascotaUno", mascotaUno);

// findIndex
const posicionMascotaUno = mascotas.findIndex((mascota) => {
  return mascota.name == "mascota uno";
});

console.log("posicionMascotaUno", posicionMascotaUno);

// fill
const arrayVacio = new Array(10);
arrayVacio.fill("1");
console.log("arrayVacio", arrayVacio);

// every
const mismoPais = mascotas.every((mascota) => mascota.pais == "peru");
console.log("mismoPais", mismoPais);

// every
const noSonDelMismoPais = mascotas.some((mascota) => mascota.pais == "peru");
console.log("noSonDelMismoPais", noSonDelMismoPais);