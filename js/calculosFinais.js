import { calculaOPesoFinal } from "./calculaOPesoFinal.js";
import { calculaAMetragemFinal } from "./calculaAMetragemFinal.js";
export function calculosFinais() {
  // captura o peso de cada produto na lista
    const pegaTodosOsPesos = document.querySelectorAll(".valor__kilos");
    // local onde vai ficar o valor final do peso
    const localOndeFicaOPeso = document.getElementById("kilogramas")
    // chama a função que faz o calculo e apresenta o valor do peso
    calculaOPesoFinal(pegaTodosOsPesos, localOndeFicaOPeso);
    // -----------------------------------------------------------------
    // captura a metragem de cada produto na lista
    const pegaTodasAsMetragens = document.querySelectorAll(".valor__total");
    // local onde vai ficar o valor final da metragem
    const localOndeFicaAMetragem = document.getElementById("total__cubagem");
    // chama a função que faz o calculo e apresenta o valor da metragem
    calculaAMetragemFinal(pegaTodasAsMetragens, localOndeFicaAMetragem);
  }
  

