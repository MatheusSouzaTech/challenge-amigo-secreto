//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criando variaveis necessarias

let listaDeAmigos = []; // Lista de amigos para armazenar
let escolha;
let adicionarLista;

function coleta(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if(amigo == ""){

        alert("Favor digitar um nome valido!");
        
    }
    else{
        
        
        listaDeAmigos = amigo;
        adicionarLista = listaDeAmigos;

        let exibirlista = document.querySelector('ul');

        exibirlista.innerHTML += ('listaAmigos', `${adicionarLista}<br>`);
        
        
    }



}

function vizualizarResultado(){



}

function gerarAmigo(){



}






