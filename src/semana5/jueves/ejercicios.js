function ejercicio2(){
    let notas=[];
    notas[0] = Number(prompt("Ingrese primera nota"));
    notas[1] = Number(prompt("Ingrese segunda nota"));
    notas[2] = Number(prompt("Ingrese tercera nota"));
    notas[3] = Number(prompt("Ingrese cuarta nota"));

    let suma = notas[0]+notas[1]+notas[2]+notas[3];
    let media = suma/notas.length;

    console.log("Promedio es: "+media)
}
// ejercicio2();

function ejercicio3(){
    let largo = Number(prompt("Ingrese el largo del rectangulo"));
    let ancho = Number(prompt("Ingrese el ancho del ancho"));

    let area = largo*ancho;

    console.log("Area del rectangulo es: " + area)
}
// ejercicio3();

function ejercicio4(){
    let base = Number(prompt("Ingrese la base del triangulo"));
    let altura =Number(prompt("Ingrese la altura del triangulo")); 

    let area = (base*altura)/2;

    console.log("El area del triangulo es: "+ area)
}
// ejercicio4();

function ejercicio5(){
    let radio = Number(prompt("Ingrese la radio"));
    let circunferencia = (Math.PI*(radio**2)).toFixed(2);

    console.log(`Circunferencia es: ${circunferencia}`);
}
// ejercicio5();

function ejercicio6(){
    let horas = Number(prompt("Horas diarias"));
    let salario = Number(prompt("salario por hora"));

    let sueldo =  (horas*salario)*7;

    console.log(`Sueldo semanal del trabajor es: ${sueldo}`)
}
// ejercicio6();

function ejercicio7(){
    let metros = Number(prompt("Ingrese los metros de tela"));

    let pulgadas = (metros/0.254).toFixed(2);
    console.log(`Tela en pulgadas es: ${pulgadas}`);
}
// ejercicio7();

function ejercicio8(){
    let soles = Number(prompt("Ingrese dinero en Soles: "));
    let dolares = soles/3.90;
    console.log(`Dolares: ${dolares}`);
}
// ejercicio8();

function ejercicio9(){
    let fecha = Number(prompt("Ingrese su año de nacimiento: "));
    let edad = 2022 - fecha;
    console.log(`Su edad es: ${edad}`);
}
// ejercicio9();

function ejercicio10(){
    let mayor=0;
    let persona;
    let personas=[
        {nombre:'Juan',
        edad:10},
        {nombre:'Carlos',
        edad:18},
        {nombre:'Jose',
        edad:20}
    ];
    
    for(i = 0; i<personas.length;i++){
        console.log(personas[i].edad);
        if(personas[i].edad > mayor){
            persona = personas[i];
        }
    }
    console.log(`La persona con mas años es: ${persona.nombre} con ${persona.edad} años`);
}
// ejercicio10();

function ejercicio11(){
    let anio = Number(prompt("Ingrese los años de antiguedad"));
    let bono=0;
    if (anio == 1) {
        console.log(`Bono de 100`);
    }else if (anio >= 2 && anio <=5) {
        console.log(`Bono de 200`);
    }else if (anio > 5){
        console.log("Bono de 1000");
    }
}
// ejercicio11();

function ejercicio12(){
    let salarioInicial = 1500;
    
    for (let index = 1; index < 7; index++) {
        salarioInicial=salarioInicial+(salarioInicial*0.1);
        console.log(`año ${index} salario: ${salarioInicial.toFixed(2)}`);
    }
    console.log(`Salario total: ${salarioInicial.toFixed(2)}`);
}
// ejercicio12();

function ejercicio13(){
    const alumnos=[
        {nombre: "Sebastian",
        calificacion: 14},
        {nombre: "Melisa",
        calificacion: 12},
        {nombre: "juan",
        calificacion: 08},
        {nombre: "hector",
        calificacion: 15}
    ]
    let estado={
         aprobados:0,
         desaprobados:0
    }

    for (let index = 0; index < alumnos.length; index++) {
        if (alumnos[index].calificacion > 11) {
            estado.aprobados =estado.aprobados+1;
        }else{
            estado.desaprobados = estado.desaprobados+1;
        }         
    }
    console.log("Estado: ",estado);
}
// ejercicio13();

function ejercicio14(){
    let focos=[
        "verde",
        "rojo",
        "rojo",
        "verde",
        "rojo",
        "rojo",
        "verde",
        "rojo",
        "rojo",
        "verde",
        "rojo",
        "rojo",
        "verde",
        "rojo",
        "blanco",
        "blanco",
        "rojo",
        "blanco",
        "blanco",
        "rojo",
        "blanco",
        "blanco",
        "rojo",
        "blanco",
        "blanco",
        "rojo",
        "blanco",
        "verde",
        "rojo",
        "blanco"
    ];

    let totalFocos={
        verde:0,
        rojo:0,
        blanco:0
    }
    for (let index = 0; index < focos.length; index++) {
        if (focos[index]=="verde") {
            totalFocos.verde++;
        }else if (focos[index]=="rojo") {
            totalFocos.rojo++;
        }else if (focos[index]=="blanco") {
            totalFocos.blanco++;
        }        
    }
    console.log("Focos:", totalFocos)
}
// ejercicio14();

function ejercicio15(){
    let persona={
        nombre:'Juan',
        edad: 20
    }
    if (persona.edad >=18) {
        console.log("púede votar");
    }else{
        console.log("no púede votar");
    }
}
ejercicio15();