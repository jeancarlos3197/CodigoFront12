function addElement(){

    function getValues() {
        const values = {
          etiqueta: document.querySelector("#etiqueta").value,
          contenido: document.querySelector("#contenido").value,
          estilos: document.querySelector("#estilos").value,
          insertar: document.querySelector("#insertar").value,
        };
        
        return values;
    }

    function makeElement(values){
        //Crear la etiqueta
        const etiqueta = document.createElement(`${values.etiqueta}`);
        //Crear el contenido de la etiqueta
        etiqueta.innerHTML=`${values.contenido}`;

        const estilos = values.estilos.split(',');
        for (let index = 0; index < estilos.length; index++) {
            etiqueta.setAttribute('style',estilos[index]);
        }

        if(values.insertar == 1){
            const body  = document.querySelector('body');
            body.appendChild(etiqueta);
        }else if (values.insertar == 2) {
            const div = document.querySelector('#app');
            div.appendChild(etiqueta);
        }

    }

    
    
    const form = document.querySelector("form"); // atrapo el formulario
    form.onsubmit = function (event) {
        event.preventDefault();
        makeElement(getValues());
    }
}

addElement();