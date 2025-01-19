/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        limpiarEntrada();
    }
    console.log(amigos);
}

function limpiarEntrada() {
    let cajaAmigo = document.getElementById("amigo");
    cajaAmigo.value = "";
}
