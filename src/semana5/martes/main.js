let simbolo = Symbol("123456");
let numero = 3.15

console.log(simbolo);
console.log(numero);

class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }

}

let persona1 = new Persona("Jose","Garcia");
persona1.nombre="Carlos"
console.log(persona1.nombre);
console.log(persona1.apellido)