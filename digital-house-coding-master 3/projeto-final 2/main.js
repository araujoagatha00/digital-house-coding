let formulario = document.querySelector('form');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let nome = document.querySelector('.form-control')
    if (nome.value == "") {

        alert("Ocorreu um erro no campo nome")
    }
    let opcao = document.querySelector('#inlineFormCustomSelect');
    if (opcao.value == 0) {
        alert("Selecione um Mood");
    }

    if (opcao.value != 0 && nome.value != "") {
        location.href = `playlist.html?id=${opcao.value}&nome=${nome.value}`;
    }
});