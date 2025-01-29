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
        
        function adicao(adicao){

            if(!listaDeAmigos.includes()){ 

                listaDeAmigos.push(amigo);
            }

            let exibirLista = document.querySelector('ul');
            exibirLista.innerHTML = "";


            listaDeAmigos.forEach(function (listaAmigos){

                exibirLista.innerHTML += `<li>${listaAmigos}<li>`;

            });

        }
        adicao();
        

        limparCampo();
              
    }



}

function limparCampo(){


    let limpar = document.querySelector('input');
    limpar.value = "";


}










