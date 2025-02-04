
let listaAmigos = [];

 function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    console.log(amigo);
    console.log(listaAmigos);
    
}

function sortearAmigo(){
    let listaHtml = document.getElementById("listaAmigos");
    let adicionados = "";
    for(let i = 0; i<listaAmigos.length;i++){
        adicionados += "<li>"+listaAmigos[i]+"</li>"
    }
    listaHtml.innerHTML = adicionados;
    let random = (Math.random()*listaAmigos.length);
    let escolhido = parseInt(random);
    console.log("numero randomico pos do array"+escolhido);
    let resultado = document.getElementById("resultado");
    console.log(listaAmigos[escolhido]);
    resultado.innerHTML = "<li>"+listaAmigos[escolhido]+"</li>";
}