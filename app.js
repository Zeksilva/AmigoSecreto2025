let amigos = [];
function adicionarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nome = inputElement.value.trim();

    if (!inputElement) {
        console.error("Elemento de input 'amigo' não encontrado!");
        return;
    }

    if (!nome) {
        alert('Por favor, insira um nome');
        return;
    }

    if (amigos.includes(nome)) {
        alert('O nome já existe, por favor digite outro');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    atualizarAmigos();
    limparCampo();
}


function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

// atualizar lista de amigos 
function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione um nome antes de sortear');
    } else {
        const index = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[index];

        const ul = document.getElementById('resultado');
        ul.innerHTML = '';

        const li = document.createElement('li');
        li.textContent = `Seu amigo secreto sorteado é: ${amigoSecreto}`;
        ul.appendChild(li);
    }
}

