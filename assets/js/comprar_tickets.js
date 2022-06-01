const valorBaseTicket = 200;

let descEstudiante = 80;
let descTrainee    = 50;
let descJunior     = 15;

let nombre    = document.getElementById("nombre");
let apellido  = document.getElementById("apellido");
let correo    = document.getElementById("correo");
let cantidad  = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

//FUNCIÓN PARA QUITAR LA CLASE IS-INVALID EN LOS INPUTS
function removeClassError() {
    let inputs = document.querySelectorAll(".form-control, .form-select");
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("is-invalid");
        
    }
}

//FUNCIÓN PARA VALIDAR TODOS LOS CAMPOS DEL FORMULARIO - CALCULA EL MONTO TOTAL A PAGAR EN BASE A LA CANTIDAD Y LA CATEGORIA
function totalAPagar() {
    
    removeClassError();

    if(nombre.value === ""){
        alert("Por favor, escriba su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if(apellido.value === ""){
        alert("Por favor, escriba su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(correo.value === ""){
        alert("Por favor, escriba su correo");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    const correoValido = correo => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
    }

    if(!correoValido(correo.value)){
        alert("Por favor, escriba un correo válido!");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if((cantidad.value == 0) || (isNaN(cantidad.value))){
        alert("Por favor, ingrese una cantidad de ticket válida!");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    if(categoria.value == ""){
        alert("Por favor, seleccione una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    let valorTotalTickets = (cantidad.value) * valorBaseTicket;

    if(categoria.value == 1){
        valorTotalTickets = valorTotalTickets - (descEstudiante / 100 * valorTotalTickets);
    }

    if(categoria.value == 2){
        valorTotalTickets = valorTotalTickets - (descTrainee / 100 * valorTotalTickets);
    }

    if(categoria.value == 3){
        valorTotalTickets = valorTotalTickets - (descJunior / 100 * valorTotalTickets);
    }

    totalPago.innerHTML = valorTotalTickets;

}

btn_Resumen.addEventListener("click", totalAPagar);

//FUNCIÓN PARA LIMPIAR EL FORMULARIO
function resetear_formulario() {
    removeClassError();
    totalPago.innerHTML = "";
}

btn_Borrar.addEventListener("click", resetear_formulario);