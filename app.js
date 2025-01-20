/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(amigo)){
            alert(`El nombre ${amigo} ya existe en tu lista.`);
            limpiarEntrada();
        } else {
            amigos.push(amigo);
            actualizarListaAmigos();
            limpiarEntrada();
        }
    }
}

function limpiarEntrada() {
    let cajaAmigo = document.getElementById("amigo");
    cajaAmigo.value = "";
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let elemento = crearElemento();
        elemento.innerHTML = amigos[i];
        lista.appendChild(elemento);
    }
    return lista;
}

function crearElemento() {
    // crear elemento de la lista
    let elemento = document.createElement("li");
    return elemento;
}
