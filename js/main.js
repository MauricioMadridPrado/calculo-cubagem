import { criaFormulario } from "./criaFormulario.js";
import { alteraValor } from "./alteraValor.js";

criaFormulario();
const linhas = document.querySelectorAll(".linha__produto");

let i = 0;
linhas.forEach(() => {
  let totalCubagem = 0;
  const contador = document.querySelector(`[data-contador${i}]`);

  contador.addEventListener("click", alterandoOValor);
  i++;
});
let valores = [];
function alterandoOValor() {
  valores = [];
  const valorTotal = document.querySelectorAll(".valor__total");
  const localCubagem = document.getElementById('total__cubagem')
  valorTotal.forEach((valor) => {
    valores.push(parseFloat(valor.innerHTML));
    const teste2 = Array.from(valores);
    const valorCubagemTotal = teste2.reduce((a, b) => a + b, 0);
    localCubagem.innerHTML = `Total de metros cúbicos: ${valorCubagemTotal.toFixed(2)}`;
  });
  const ondeFicaOValorFinalDaCubagem =
    document.getElementById("total__cubagem");
}
alteraValor();
