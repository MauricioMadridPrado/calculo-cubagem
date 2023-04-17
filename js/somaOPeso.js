export function somaOPeso() {
  // seleciona as linhas
  const linhas = document.querySelectorAll(".linha__produto");
  // inicia contador
  let i = 0;
  // aplica um evento em cada linha
  linhas.forEach(() => {
    // seleciona os inputs que fazem a contagem de itens
    const contador = document.querySelector(`[data-contador${i}]`);
    // e, em cada contador...toda vez que for alterado, vai ....
    contador.addEventListener("change", alteraOPeso);
    i++;
  });
  // inicializa os valores
  let valores = [];
  // função que altera o peso total
  function alteraOPeso() {
    // inicia os valores zerados
    valores = [];
    // seleciona todos os pesos 
    const pegaTodosOsPesos = document.querySelectorAll(".valor__kilos");
    // seleciona o local onde o valor total vai ser apresentado
    const localOndeFicaOPeso = document.getElementById("kilogramas");
    // pega todos os pesos e, pra cada um
    pegaTodosOsPesos.forEach((peso) => {
      // coloca cada valor dentro de Valores
      valores.push(parseFloat(peso.innerHTML));
      // transforma valores numa array
      const kilos = Array.from(valores);
      // faz a somatoria dos pesos dentro dessa array
      const valorKilosTotal = kilos.reduce((a, b) => a + b, 0);
      // coloca o valor final na posição
      localOndeFicaOPeso.innerHTML = `Total kilos dos produtos: ${valorKilosTotal
        .toFixed(2)
        .replace(".", ",")}Kg`;
    });
  }
}
