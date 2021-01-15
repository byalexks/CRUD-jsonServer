import {
    mostrarMensaje,
    validar
} from "./funciones.js";
import {
    nuevoCliente
} from "./api.js";
(function () {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente)

    function validarCliente(e) {
        e.preventDefault();
        // selectores universales input
        const nombre = document.querySelector("#nombre").value;
        const correo = document.querySelector("#correo").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;
        // onjeto de clientes
        const cliente = {
            nombre,
            correo,
            telefono,
            empresa
        }
        if (validar(cliente)) {
            // mostrrar mensaje de no paso validacion
            mostrarMensaje("todos los campos son obligatorios")
            return

        }
        //pasa los valores de los inputs a la funcion 
        nuevoCliente(cliente)
    }


})();