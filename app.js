/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Crear un array para almacenar los nombres
let amigos = [];
let amigosSorteados = [];
let listaIndice = [];

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
    let lista = limpiarLista();

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

function sortearAmigo() {
    // Validar que hay amigos disponibles
     if (amigos.length > 0) {
        // Generar un índice aleatorio
        let indice = generarIndice();
        if (indice === -1) {
            return; // No hacer nada si ya se han sorteado todos
        }
        // Obtener el nombre sorteado
        let nombre = amigos[indice];
        // Mostrar el resultado
        limpiarLista();
        asignarTextoElemento("resultado", `El amigo sorteado es: ${nombre}` );
     } else {
        alert("No hay amigos para sortear.");
     }
}

function limpiarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    return lista;
}

function generarIndice () {
    let indice = Math.floor(Math.random() * amigos.length);
    if (listaIndice.length == amigos.length) {
        asignarTextoElemento("resultado", "Ya se han sorteado todos los amigos");
        return -1;
    }
    if (listaIndice.includes(indice)) {
        return generarIndice();
    } else {
        listaIndice.push(indice);
        console.log(listaIndice);
        return indice;
    }
}

function asignarTextoElemento(elemento, texto) {
    return document.getElementById(elemento).innerHTML = texto;
}