import { criaFormulario } from "./criaFormulario.js";

criaFormulario();
function alteraValor(){
const linhas = document.querySelectorAll(".linha__produto");
let j = 0;
let i = 0;
let total = 0;
linhas.forEach(() => {
  const contador = document.querySelector(`[data-contador${i}]`);
  const valorFinal = document.querySelector(`[data-total${i}]`);

  contador.addEventListener("change", (event) => {
    let posicao = event.target.parentNode.dataset.local;
    let quantidadeTotal = event.target.value;
    let totalCubica = 1;

    const metragens = document.querySelectorAll(`[data-dado${posicao}]`);
    metragens.forEach((valor) => {
      totalCubica *= valor.innerHTML;
    });
    const totalCubagem = document.getElementById('total__cubagem');

    valorFinal.innerHTML = totalCubica * quantidadeTotal;
    total = parseFloat(valorFinal.innerHTML)
  });
  i++;
});
}



alteraValor();
