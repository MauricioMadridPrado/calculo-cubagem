export function metragem(posicao, quantidade) {
  // seleciona as medidas do produto 
    const metragens = document.querySelectorAll(`[data-dado${posicao}]`);
    // seleciona a posição onde o valor vai ser alterado
    const valorFinal = document.querySelector(`[data-total${posicao}]`);
    // inicia a variável do calculo
    let metrosCubicos = 1 * quantidade;
    // pra cada medida do produto você deve..
    metragens.forEach((metragem) => {
      // pegar a medida anterior e multiplicar pela atual
      metrosCubicos *= metragem.innerHTML;
    });
    // altera o valor onde é exibido o total metragem de cada produto
    valorFinal.innerHTML = metrosCubicos.toFixed(2);
  }