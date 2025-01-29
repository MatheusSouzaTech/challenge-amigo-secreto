//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criando variaveis necessarias

let listaDeAmigos = []; // Lista de amigos para armazenar
let escolha;
let lista;

function coleta(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if(amigo == ""){

        alert("Por favor, insira um nome.");
        
    }
    else{
        
        
        listaDeAmigos.push(amigo);


        let exibirlista = document.querySelector('ul');

        exibirlista.innerHTML += ('listaAmigos', `${listaDeAmigos[listaDeAmigos.length -1]}<br>`);
              
        
    }



}

function vizualizarResultado(){



}

function gerarAmigo(){



}






