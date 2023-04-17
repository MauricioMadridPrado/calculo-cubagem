import { criaFormulario } from "./criaFormulario.js";
import { peso } from "./calculaOPeso.js";
import { metragem } from "./calculaAMetragem.js";
import { calculosFinais } from "./calculosFinais.js";

// ---------------------------------------------------------------------------------
// cria a lista de produtos baseada no banco de dados
criaFormulario();

// ---------------------------------------------------------------------------------

// seleciona todas as linhas da lista de produtos
const linhas = document.querySelectorAll(".linha__produto");

// ---------------------------------------------------------------------------------
// função que captura qual input foi alterado
function capturaOBotao() {

  // ---------------------------------------------------------------------------------
  // variável utilizada para garantir acerto na seleção
  let i = 0;
  //   pra cada linha você deve...
  linhas.forEach(() => {
    // seleciona cada input baseado na posição do data attribute
    const contador = document.querySelector(`[data-contador${i}]`);
    // pra cara input, adicione o evento ao clicar..
    contador.addEventListener("change", (event) => {
      // captura a posição do input alterado
      let posicao = event.target.parentNode.dataset.local;
      //   captura o valor do input alterado
      let quantidadeTotal = event.target.value;

      // ---------------------------------------------------------------------------------
      //   chama a função que calcula o peso de cada produto pela quantidade
      peso(posicao, quantidadeTotal);

      // ---------------------------------------------------------------------------------
      //   chama a função que calcula a metragem de cada produto pela quantidade
      metragem(posicao, quantidadeTotal);

      // ---------------------------------------------------------------------------------
      //   chama a função que faz o calculo do total pela lista de produtos
      calculosFinais();
    });
    // ---------------------------------------------------------------------------------
    i++;
    // ---------------------------------------------------------------------------------
  });
}
// ---------------------------------------------------------------------------------
capturaOBotao();
