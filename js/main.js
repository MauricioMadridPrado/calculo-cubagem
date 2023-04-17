import { criaFormulario } from "./criaFormulario.js";

criaFormulario();

const linhas = document.querySelectorAll(".linha__produto");

function capturaOBotao() {
  let i = 0;

  linhas.forEach((linha) => {
    const contador = document.querySelector(`[data-contador${i}]`);
    contador.addEventListener("click", (event) => {
      let posicao = event.target.parentNode.dataset.local;
      let quantidadeTotal = event.target.value;
      peso(posicao, quantidadeTotal);
      metragem(posicao, quantidadeTotal);
      calculosFinais();
    });
    i++;
  });
}

capturaOBotao();

function peso(posicao, quantidade) {
  const pegaOPeso = document.querySelector(`[data-peso${posicao}]`).innerHTML;
  const pesoFinal = document.querySelector(`[data-kilos${posicao}]`);
  const peso = parseFloat(pegaOPeso) * parseFloat(quantidade);
  pesoFinal.innerHTML = peso;
}
function metragem(posicao, quantidade) {
  const metragens = document.querySelectorAll(`[data-dado${posicao}]`);
  const valorFinal = document.querySelector(`[data-total${posicao}]`);
  let metrosCubicos = 1 * quantidade;
  metragens.forEach((metragem) => {
    metrosCubicos *= metragem.innerHTML;
  });
  valorFinal.innerHTML = metrosCubicos;
}

function calculosFinais() {
  const pegaTodosOsPesos = document.querySelectorAll(".valor__kilos");
  const localOndeFicaOPeso = document.getElementById("kilogramas");

  const pegaTodasAsMetragens = document.querySelectorAll(".valor__total");
  const localOndeFicaAMetragem = document.getElementById("total__cubagem");

  let j = 0;

  let pesoInicial = 0;

  pegaTodosOsPesos.forEach((peso) => {
    peso = peso.innerHTML;
    let pesoFinal = (pesoInicial += parseFloat(peso));
    localOndeFicaOPeso.innerHTML = `Total kilos dos produtos: ${pesoFinal
      .toFixed(2)
      .replace(".", ",")}Kg`;
  });

  let metragemInicial = 0;
  pegaTodasAsMetragens.forEach((metragem) => {
    metragem = metragem.innerHTML;
    let metragemFinal = (metragemInicial += parseFloat(metragem));
    localOndeFicaAMetragem.innerHTML = `Total de metros cúbicos: ${metragemFinal
      .toFixed(2)
      .replace(".", ",")}m³`;
  });
}
