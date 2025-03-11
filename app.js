// Declarando a variável corretamente
let listaNumeroSorteados = [];
let numeroLimite = 10
let NumAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


// Funções existentes permanecem as mesmas
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    // Convertendo para número inteiro
    let chuteInt = parseInt(chute);
    
    console.log(NumAleatorio);
    console.log(chuteInt === NumAleatorio);

    if (chuteInt === NumAleatorio) {
        exibirTextoNaTela('h1', 'Você acertou !');
        
        // Corrigindo o plural de tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chuteInt > NumAleatorio) {
            exibirTextoNaTela('h1', 'Ainda não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Ainda não foi dessa vez');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        LimparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoNaLista = listaNumeroSorteados.length;
    
    if (quantidadeElementoNaLista == numeroLimite){
        listaNumeroSorteados = []
    }
    
    // Corrigindo o método include para includes
    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido)
        console.log (listaNumeroSorteados)
        return numeroEscolhido;
        
    }
}

function LimparCampo() {
    const chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    // Removendo os parênteses errados
    NumAleatorio = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}