let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!' )
        exibirTextoNaTela('p', 'Você acertou o número!' )
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior')
        } else {
            exibirTextoNaTela('p', 'o número secreto é menor')
        }
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
