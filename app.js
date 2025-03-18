let nombresAmigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo == false) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    nombresAmigos.push(nombreAmigo);
    inputAmigo.value="";
    inputAmigo.focus();
    
    impresionListaAmigos();
}

function impresionListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < nombresAmigos.length; i++){
        let item = document.createElement('li');
        item.textContent = nombresAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(nombresAmigos.length === 0){
        alert('No hay ningun amigo para sortear.');
        return;
    }
    
    let amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)]
    let resultado = document.getElementById('resultado');
    let limpiarLista = document.getElementById('listaAmigos');
    
    resultado.innerHTML = `Amigo secreto: ${amigoSorteado}`;
    limpiarLista.innerHTML = '';
}