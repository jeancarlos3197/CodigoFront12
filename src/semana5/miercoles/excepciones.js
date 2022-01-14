function ejemplo1(){
    function suma(a,b){
        if (arguments.length>2) throw console.error("No soporta más de 2 argumentos");
        return a+b;
    }

    console.log(suma(5,3));
    console.log(suma(5,9));
    console.log(suma(3,4,5,2));
}

// ejemplo1();

function ejemplo2(){
    let message;
    const nombre= prompt("Ingresa tu nombre");
    try {
        if (nombre.length < 6) {
            throw "SHORT";
        }
        if (nombre.length > 10) {
            throw "LONG";
        }

        message= "El nombre es correcto" + nombre + " es correcto";
    } catch (error) {
        if (error == "SHORT") {
            message="El nombre " + nombre + " es corto";
        }
        if (error == "LONG") {
            message="El nombre " + nombre + " es largo";
        }
    } finally{
        console.log(message)
    }
}

ejemplo2();