export function calculaOPesoFinal(pegaTodosOsPesos, localOndeFicaOPeso) {
  // inicia a variável do peso total com o
    let pesoInicial = 0;
    // pega todos os pesos e, pra cada peso faça...
    pegaTodosOsPesos.forEach((peso) => {
      // pega somente o valor numérico do peso
      peso = peso.innerHTML;
      // faz o calculo somando todos os pesos
      let pesoFinal = (pesoInicial += parseFloat(peso));
      // altera o local onde o peso vai ser apresentado
      localOndeFicaOPeso.innerHTML = `Total kilos dos produtos: ${pesoFinal
        .toFixed(2)
        .replace(".", ",")}Kg`;
    });
  }