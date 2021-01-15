import {
    obtenerCliente,
    editarCliente
} from "./api.js";
import {
    mostrarMensaje,
    validar
} from "./funciones.js";
(function () {
    // campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const empresaInput = document.querySelector("#empresa");
    const correoInput = document.querySelector("#correo");
    const telefonoInput = document.querySelector("#telefono");
    const idInput = document.querySelector("#id");


    document.addEventListener("DOMContentLoaded", async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get("id"));
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);
        // submit al formulario
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarCliente)
    })

    function mostrarCliente(cliente) {
        const {
            nombre,
            empresa,
            correo,
            telefono,
            id
        } = cliente;
        // rellena los campos con lo del json
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        correoInput.value = correo;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault()
        const cliente = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        if (validar(cliente)) {
            mostrarMensaje("Todos los campos son obligatorios")
            return
        }
        // reescribe objeto
        editarCliente(cliente)
    }
})();