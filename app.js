let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!' );
       
        let palavraTentativa = tentativas  > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas)
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior')
        } else {
            exibirTextoNaTela('p', 'o número secreto é menor')
        }

        tentativas++;
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
