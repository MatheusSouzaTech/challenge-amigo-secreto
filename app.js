//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = []; 
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

            let lista = document.querySelector('ul');
            lista.innerHTML = "";
        
            if(!listaDeAmigos.includes()){
        
                listaDeAmigos.push(amigo);
            }
            else{
        
                console.log("Nome ja esta na lista");
            }
        
        
            listaDeAmigos.forEach(function (exibir) {
        
                lista.innerHTML += `<li>${exibir}<li>`;
                
            });
        }
        
        adicao();
        

        limparCampo();
              
    }

    



}

function sortearAmigo(){
    
    escolha = parseInt(Math.random() * listaDeAmigos.length);

    let amigoEscolhido = listaDeAmigos[escolha];

    console.log(amigoEscolhido);


    resultado = document.querySelector(".result-list");

    resultado.innerHTML = `${amigoEscolhido}`;

    


    
}



function limparCampo(){


    let limpar = document.querySelector('input');
    limpar.value = "";


}









