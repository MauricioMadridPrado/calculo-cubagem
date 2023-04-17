import { criaListaDePesquisa } from "./criaListaDePesquisa.js";
export function criaFormulario() {
  // seleciona o nome de cada produto da lista de produtos

  // inicia a lista de nomes

  // ---------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------

  const produto = [
    {
      nome: "produto1",
      altura: 0.5,
      largura: 0.26,
      comprimento: 25,
      peso: 16.5,
    },
    {
      nome: "produto1",
      altura: 1,
      largura: 0.26,
      comprimento: 25,
      peso: 26.5,
    },
    {
      nome: "produto1",
      altura: 1.2,
      largura: 0.26,
      comprimento: 25,
      peso: 36.5,
    },
    {
      nome: "produto1",
      altura: 1.5,
      largura: 0.26,
      comprimento: 25,
      peso: 41.5,
    },
    {
      nome: "produto2",
      altura: 0.5,
      largura: 0.2,
      comprimento: 25,
      peso: 10.5,
    },
    {
      nome: "produto2",
      altura: 1,
      largura: 0.2,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "produto2",
      altura: 1.2,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto2",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "produto3",
      altura: 0.5,
      largura: 0.2,
      comprimento: 25,
      peso: 10.5,
    },
    {
      nome: "produto3",
      altura: 1,
      largura: 0.2,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "produto3",
      altura: 1.2,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto3",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "produto4",
      altura: 1,
      largura: 0.2,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "produto4",
      altura: 1.2,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto4",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "produto4",
      altura: 1.8,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto4",
      altura: 2,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "produto5",
      altura: 1,
      largura: 0.2,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "produto5",
      altura: 1.2,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto5",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "produto5",
      altura: 1.8,
      largura: 0.2,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "produto5",
      altura: 2,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
  ];

  // ---------------------------------------------------------------------------------
// inicia o contador para o evento
  let i = 0;
  // pra cada produto na lista
  produto.forEach((dado) => {
    // seleciona todos os produtos
    const dadosDoProduto = document.getElementById("nome__produto");
    // seleciona o formulario onde os produtos serão apresentado
    const formulario = document.getElementById("formulario");
    
    // ---------------------------------------------------------------------------------
    // adiciona os produtos no local
    dadosDoProduto.innerHTML = `
    <h2 class="produto__total__cubagem" id="total__cubagem">Total de metros cúbicos:0m³</h2>
    <h2 class="produto__total__peso" id="kilogramas">Total kilos dos produtos :0Kg</h2>
    `;
    formulario.innerHTML += `
        <tr class="linha__produto">
             <td id="${dado.nome}" data-dado>${dado.nome}</td>
            <td data-dado${i} = '${i}'>${dado.altura}</td>
            <td data-dado${i} = '${i}'>${dado.largura}</td>
            <td data-dado${i} = '${i}'>${dado.comprimento}</td>
            <td data-peso${i}>${dado.peso}</td>
            <td class="contador" data-contador${i} data-local=${i} ><input min="0" value="0"  type="number"></td>
            <td class="valor__total" data-total${i}>0</td>
            <td class="valor__kilos" data-kilos${i}>0</td>
        </tr>
    `;
    i++;
  });

 
criaListaDePesquisa(produto)
}
