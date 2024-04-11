function sortear() {
    let quantidadeN = parseInt(document.getElementById('quantidade').value);
    let deN = parseInt(document.getElementById('de').value);
    let ateN = parseInt(document.getElementById('ate').value);

    if (deN >= ateN) {
        alert('Escolha um número menor no campo "do numero"');
        limparTela();
        return;
    }

    let sorteados = [];

    let numero

    for (let i = 0; i <= quantidadeN; i++) {
        numero = obterNumeroAleatorio(deN, ateN);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(deN, ateN)
        }

        sorteados.push(numero);
    }


    mudarEscrita('resultado', '<label class="texto__paragrafo">Números sorteados: ' + sorteados + '</label>')

    alterarStatusBotao()
}



function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparTela() {
    quantidadeN = document.getElementById('quantidade');
    quantidadeN.value = '';
    deN = document.getElementById('de');
    deN.value = '';
    ateN = document.getElementById('ate');
    ateN.value = '';
}

function mudarEscrita(id, texto) {
    let muda = document.getElementById(id);
    muda.innerHTML = texto;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar() {
    mudarEscrita('resultado', '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>');
    alterarStatusBotao();
    limparTela();

}










