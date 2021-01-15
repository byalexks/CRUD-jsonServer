export function mostrarMensaje(msj) {
    const alertaprevia = document.querySelector(".mensajeError")
    if (!alertaprevia) {
        const formulario = document.querySelector("#formulario");
        const alerta = document.createElement("p")
        alerta.classList.add("mensajes", "mensajeError")
        alerta.innerHTML = `
        <span>${msj}</span>
        `
        formulario.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}
export function validar(obj) {
    // validacion de todos los inputs
    return !Object.values(obj).every(input => input !== "")
}