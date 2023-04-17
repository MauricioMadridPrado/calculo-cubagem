export function calculaAMetragemFinal(pegaTodasAsMetragens, localOndeFicaAMetragem) {
  // inicia o valor da metragem com 0
    let metragemInicial = 0;
    // pega o valor de todas as metragens e...
    pegaTodasAsMetragens.forEach((metragem) => {
      // captura apenas o valor numerico de cada metragem
      metragem = metragem.innerHTML;
      // faz o calculo somando cada metragem ao valor final
      let metragemFinal = (metragemInicial += parseFloat(metragem));
      // altera o local onde o valor final é apresentado
      localOndeFicaAMetragem.innerHTML = `Total de metros cúbicos: ${metragemFinal
        .toFixed(2)
        .replace(".", ",")}m³`;
    });
  }