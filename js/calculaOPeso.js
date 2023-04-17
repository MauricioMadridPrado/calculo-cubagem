export function calculaOPeso() {
  // inicializa o contador do evento
    let i = 0;
    // captura as linhas dos produtos
    const linhas = document.querySelectorAll(".linha__produto");
  
    // pra cada linha
    linhas.forEach((linha) => {
      // captura o peso inicial de cada produto
      const pegaOPeso = document.querySelector(`[data-peso${i}]`);
      // captura o valor do contador de cada produto
      const contador = document.querySelector(`[data-contador${i}]`);
      // captura o peso final gerado pela multiplicação
      const pesoFinal = document.querySelector(`[data-kilos${i}]`)

      // quando o input for clicado faça.;
      contador.addEventListener("change", (event) => {
        // captura o local do input acionado
        let posicao = event.target.parentNode.dataset.local;
        // captura a quantidade do botao que foi clicado
        let quantidadeTotal = event.target.value;
        // captura o peso 
        let peso = pegaOPeso.innerHTML;
        // captura o peso multiplicado
        let pesoFinalProduto = parseFloat(peso) * parseFloat(quantidadeTotal);
        // coloca o peso calculado no local
        pesoFinal.innerHTML = pesoFinalProduto.toFixed(2).replace('.', ',');
      })
  
      // incremento
      i++;
    });
  }