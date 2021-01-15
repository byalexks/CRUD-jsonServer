const url = "http://localhost:4000/clientes";

// METER DATOS
export async function nuevoCliente(cliente) {
    try {
        // metodo post
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                "content-Type": "application/json"
            }
        })
        // si pasa el try me manda al index
        window.location.href = "index.html";
    } catch (error) {
        console.log(error)
    }
}
// OBTENER LOS DATOS
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
}

// ELIMINAR LOS DATOS
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.log(error)
    }
}

// obitene cliente por id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente
    } catch (error) {
        console.log(error);
    }
}

// actulizar registro

export const editarCliente = async cliente => {

    try {
        await fetch(`${url}/${cliente.id}`, {
            method: "PUT",
            body: JSON.stringify(cliente),
            headers: {
                "content-Type": "application/Json"
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error)
    }
}