export function alteraValor(){
    const linhas = document.querySelectorAll(".linha__produto");

    let i = 0;
    let total = 0;
    linhas.forEach(() => {
      const contador = document.querySelector(`[data-contador${i}]`);
      const valorFinal = document.querySelector(`[data-total${i}]`);
    
      contador.addEventListener("change", (event) => {
        let peso = event.target.parentNode.previousSibling.previousSibling.innerHTML;
        
        console.log(peso)
        let posicao = event.target.parentNode.dataset.local;
        let quantidadeTotal = event.target.value;
        let totalCubica = 1;
    
        const metragens = document.querySelectorAll(`[data-dado${posicao}]`);
        metragens.forEach((valor) => {
          const valorArredondado = valor.innerHTML
          totalCubica *= valor.innerHTML;
        });
    
    
        valorFinal.innerHTML = totalCubica * quantidadeTotal;
        total = parseFloat(valorFinal.innerHTML)
      });
      i++;
    });
    }