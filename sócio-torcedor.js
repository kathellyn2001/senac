const firebaseConfig = {
    apiKey: "AIzaSyD8SkSorsh8OEdGsVwF27BWduDYLIf-_Fc",
    authDomain: "aula-script-f1ce0.firebaseapp.com",
    databaseURL: "https://aula-script-f1ce0-default-rtdb.firebaseio.com",
    projectId: "aula-script-f1ce0",
    storageBucket: "aula-script-f1ce0.appspot.com",
    messagingSenderId: "1071174461818",
    appId: "1:1071174461818:web:2b0bb9d51398094a514ec3"
};

//Inicializar Firebase

    // Limpar campos após adicionar
    document.getElementById('playerName').value = '';
    document.getElementById('playerAge').value = '';

// Ouvindo as mudanças na lista de jogadores
database.ref('players').on('child_added', function(data) {
    const li = document.createElement('li');
    li.id = data.key;
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        ${data.val().name} - ${data.val().age} anos
        <button class="btn btn-danger btn-sm" onclick="deletePlayer('${data.key}')">Excluir</button>
    `;
    document.getElementById('playerList').appendChild(li);
});

// Função para excluir jogador
function deletePlayer(playerId) {
    database.ref('players/' + playerId).remove();
    document.getElementById(playerId).remove();
};