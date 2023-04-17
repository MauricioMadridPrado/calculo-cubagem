export function calculaMetragemFinal() {
  // captura as linhas
  const linhas = document.querySelectorAll(".linha__produto");
  // inicia o incremento
  let i = 0;
  // pra cada linha
  linhas.forEach(() => {
    // captura o input que faz a contadgem de itens
    const contador = document.querySelector(`[data-contador${i}]`);
    // adiciona o evento em cada botão
    contador.addEventListener("click", alterandoOValor);
    // incremento
    i++;
  });
  // inicia valores vazio
  let valores = [];
  // função que altera o valor
  function alterandoOValor() {
    // inicia valores vazio
    valores = [];
    // captura todos os valores finais de metragem
    const valorTotal = document.querySelectorAll(".valor__total");
    // captura o local onde esse valor final vai ser apresentado
    const localCubagem = document.getElementById("total__cubagem");
    // para cada valor
    valorTotal.forEach((valor) => {
      // adiciona o valor na lista valores
      valores.push(parseFloat(valor.innerHTML));
      // transforma valores em uma array
      const cubagem = Array.from(valores);
      // faz a soma dos valores
      const valorCubagemTotal = cubagem.reduce((a, b) => a + b, 0);
      // coloca o valor final no local
      localCubagem.innerHTML = `Total de metros cúbicos: ${valorCubagemTotal.toFixed(
        2
      ).replace('.', ',')}m³`;
    });

  }
}
