export function peso(posicao, quantidade) {
  // pega o peso do elemento selecionado 
    const pegaOPeso = document.querySelector(`[data-peso${posicao}]`).innerHTML;
    // seleciona onde o peso vai ser exibido
    const pesoFinal = document.querySelector(`[data-kilos${posicao}]`);
    // faz o calculo multiplicando o peso pela quantidade
    const peso = parseFloat(pegaOPeso) * parseFloat(quantidade);
    // altera a posição selecionada com o novo valor
    pesoFinal.innerHTML = peso.toFixed(2);
  }