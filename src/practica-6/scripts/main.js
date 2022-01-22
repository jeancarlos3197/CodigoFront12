const form = document.querySelector('form');
const lisInput = form.querySelectorAll('.form-control');
const button = document.querySelector('button')
function submit(){
    button.addEventListener('click',function(event){
        event.preventDefault();

        const contenedor = document.getElementById('app');
        const div = document.createElement("div");
        div.classList.add('col-4');
        div.classList.add('mb-3');
        div.classList.add('mr-5');
        div.innerHTML = `
        <div class="card card-personal" style="width: 18rem;">
            <img src="${lisInput[4].value}" class="card-img-top rounded-circle bg-personal mx-auto mt-3" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${lisInput[0].value} ${lisInput[1].value}</h5>
                <p class="card-text"> <b>Edad:</b> ${lisInput[2].value}</p>
                <p class="card-text"> <b>Email:</b> ${lisInput[5].value}</p>
                <p class="card-text"> <b>País:</b> ${lisInput[3].value}</p>
                <p class="card-text"> ${lisInput[6].value}</p>
            </div>
            <button class="boton-card">X</button>
        </div>
        `;
        div.querySelector('button').onclick = function(){
            if (confirm("Desea Eliminarlo")) {
                div.remove();
            }
        };
        
        contenedor.appendChild(div);

        lisInput.forEach((input)=>{
            console.log(input.value);
        });

    })
}

submit();