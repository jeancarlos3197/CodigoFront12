function makeFullName(argOne, argTwo){
    const arg1 = argOne.charAt(0).toUpperCase() + argOne.slice(1).toLowerCase();
    const arg2 = argTwo.charAt(0).toUpperCase() + argTwo.slice(1).toLowerCase();
    return `${arg1} ${arg2}`;
}
console.log(makeFullName('jean','carlos'));

function countRepeatLetter(argOne, argTwo){
    let num=0;
    for (let index = 0; index < argOne.length; index++) {
        let caracter = argOne.charAt(index);
        if (caracter == argTwo) {
            num++;
        }
    }
    return num;
}
console.log(countRepeatLetter('sebastian','a'));

let numeros=[0,1,2,3,4,5,6];
function multiploN(array, num){
    return res = array.map(valor=> valor*num );
}
console.log(multiploN(numeros,4));

let mascotas=[
    {
        name:"aronis",
        edad:12,
        sexo:"m"
    },
    {
        name:"terry",
        edad:4,
        sexo:"m"
    },
    {
        name:"juda",
        edad:3,
        sexo:"h"
    },
    {
        name:"aronis",
        edad:8,
        sexo:"h"
    },
];
function filters(array){
    const mayor = array.filter(valor=>valor.edad>4);
    const menor = array.filter(valor=>valor.edad<4);
    const macho = array.filter(valor=>valor.sexo=='m');
    const hembra = array.filter(valor=>valor.sexo=='h');

    console.log('mayores', mayor);
    console.log('menores', menor);
    console.log('macho', macho);
    console.log('hembra', hembra);
}
filters(mascotas);


let objeto={
    name:'hola',
    edad:2
}
let objeto2 = {...objeto};
objeto.name = 'adios';

objeto;
objeto2