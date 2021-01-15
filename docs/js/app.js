import {
    obtenerClientes,
    eliminarCliente
} from "./api.js";
(function () {
    const listado = document.querySelector(".listado");

    document.addEventListener("DOMContentLoaded", mostrarClientes);
    listado.addEventListener("click", confirmarEliminar)

    async function mostrarClientes() {
        const clientes = await obtenerClientes();

        clientes.forEach(cliente => {
            const {
                nombre,
                telefono,
                empresa,
                id
            } = cliente
            listado.innerHTML += `
             <tr>
                 <td>${nombre}</td> 
                 <td>${telefono}</td> 
                 <td>${empresa}</td> 
                 <td><a class="editar" href="editarCliente.html?id=${id}">Editar</a></td>
                  <td data-cliente="${id}" class="eliminar">Eliminar</td>
                 </tr>
            `
        });
    }

    function confirmarEliminar(e) {
        // busca el div con la clase eliminar
        if (e.target.classList.contains("eliminar")) {
            // te dice el id de cada cliente
            const clienteId = parseInt(e.target.dataset.cliente);
            const confirmar = confirm("¿Deseas eliminar este registro?")
            if (confirmar) {
                eliminarCliente(clienteId);
            }
        }
    }
})();