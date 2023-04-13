export function calculaOPeso() {
    let i = 0;
    const linhas = document.querySelectorAll(".linha__produto");
  
  
    linhas.forEach((linha) => {
      const pegaOPeso = document.querySelector(`[data-peso${i}]`);
      const contador = document.querySelector(`[data-contador${i}]`);
      const pesoFinal = document.querySelector(`[data-kilos${i}]`)
      contador.addEventListener("change", (event) => {
        
        let posicao = event.target.parentNode.dataset.local;
        let quantidadeTotal = event.target.value;
        
        let peso = pegaOPeso.innerHTML;
  
        let pesoFinalProduto = parseFloat(peso) * parseFloat(quantidadeTotal);
  
        pesoFinal.innerHTML = pesoFinalProduto.toFixed(4).replace('.', ',');
      })
  
  
      i++;
    });
  }