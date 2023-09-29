function adicionarNota() {
    var input = document.getElementById('notaInput');
    var nota = input.value;

    if (nota) {
        var notas = JSON.parse(sessionStorage.getItem('notas')) || [];
        notas.push(nota);
        sessionStorage.setItem('notas', JSON.stringify(notas));

        input.value = '';
        atualizarListaNotas();
    }
}

function removerNota(index) {
    var notas = JSON.parse(sessionStorage.getItem('notas')) || [];
    notas.splice(index, 1);
    sessionStorage.setItem('notas', JSON.stringify(notas));
    atualizarListaNotas();
}

function editarNota(index) {
    var notas = JSON.parse(sessionStorage.getItem('notas')) || [];
    var novaNota = prompt("Editar Nota:", notas[index]);

    if (novaNota !== null) {
        notas[index] = novaNota;
        sessionStorage.setItem('notas', JSON.stringify(notas));
        atualizarListaNotas();
    }
}

function atualizarListaNotas() {
    var notas = JSON.parse(sessionStorage.getItem('notas')) || [];
    var lista = document.getElementById('listaNotas');

    lista.innerHTML = '';
    notas.forEach((nota, index) => {
        var li = document.createElement('li');
        
        var span = document.createElement('span');
        span.textContent = nota;
        span.onclick = function() {
            editarNota(index);
        };
        li.appendChild(span);
        
        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            removerNota(index);
        };
        li.appendChild(btnRemover);

        lista.appendChild(li);
    });
}

// Inicializar a lista de notas
atualizarListaNotas();
