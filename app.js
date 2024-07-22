alert ('Jogo do par ou ímpar, se o número for par, ficará azul e se for ímpar ficará vermelho.')

function gerarNumeroECor () {
    let resultadoNumero = document.getElementById('p-resultado-numero');
    let numeroGerado = Math.floor(Math.random() * 10); 
    let cores = document.getElementById('containerBotao');

    if (numeroGerado % 2 === 0) { 
       resultadoNumero.textContent = 'Par';
       resultadoNumero.textContent = numeroGerado;
       cores.style.backgroundColor = 'blue';
    } else {
        resultadoNumero.textContent = 'Ímpar';
        resultadoNumero.textContent = numeroGerado;
        cores.style.backgroundColor = 'red';
    }
    console.log(numeroGerado);
  
}


