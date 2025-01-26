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
        if (amigos.includes(amigo)) {
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
        let elemento = crearElemento("li");
        elemento.innerHTML = amigos[i];
        lista.appendChild(elemento);
    }
    return lista;
}

function crearElemento(e) {
    // crear elemento de la lista
    let elemento = document.createElement(e);
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
        asignarTextoElemento("#resultado", `El amigo sorteado es: ${nombre}`);
    } else {
        alert("No hay amigos para sortear.");
    }
}

function limpiarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    return lista;
}

function generarIndice() {
    // Generar indice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    // Si la lista de indices es igual al tamaño de la lista de amigos
    if (listaIndice.length == amigos.length) {
        //document.querySelector(".button-draw").setAttribute("disabled", "Prueba");
        document.getElementById("amigo").setAttribute("disabled", "");
        asignarTextoElemento("#resultado", "Ya se han sorteado todos los amigos");
        document.getElementById("botonReiniciar").style.display = "flex";
        return -1;
    }
    //Si la lista de indices incluye el nombre sorteado generar uno nuevo
    if (listaIndice.includes(indice)) {
        return generarIndice();
        // De lo contrario añadirlo a la lista de indices y retornar el indice
    } else {
        listaIndice.push(indice);
        return indice;
    }
}

function asignarTextoElemento(elemento, texto) {
    return document.querySelector(elemento).innerText = texto;
}


function reiniciarSorteo() {
    // Reiniciar las listas
    amigos = [];        // Vaciar la lista de amigos
    listaIndice = [];   // Vaciar la lista de índices sorteados

    // Limpiar la lista visual
    limpiarLista();

    // Volver a mostrar el campo para añadir amigos
    document.getElementById("amigo").removeAttribute("disabled");

    // Ocultar el botón de reinicio
    document.getElementById("botonReiniciar").style.display = "none";

    // Limpiar el resultado
    asignarTextoElemento("#resultado", "Añade más amigos y empieza el sorteo.");
    
    // Vaciar la entrada de texto
    limpiarEntrada();
}



