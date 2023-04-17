export function criaFormulario() {
  // seleciona o nome de cada produto da lista de produtos
  const listaDeNomes = document.getElementById("lista__de__nomes");
  // inicia a lista de nomes
  const nomes = [];
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
// inicia o contador para o evento
  let i = 0;
  // pra cada produto na lista
  produto.forEach((dado) => {
    // seleciona todos os produtos
    const dadosDoProduto = document.getElementById("nome__produto");
    // seleciona o formulario onde os produtos serão apresentado
    const formulario = document.getElementById("formulario");
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
  // pra cada produto
  produto.forEach((a) => {
    // se o nome do produto não existir na lista, adione esse nome na lista
    if (!nomes.includes(a.nome)) {
      // adiciona em nomes o novo nome
      nomes.push(a.nome);
    }
  });
  // para cada nome na lista
  nomes.forEach((nome) => {
    // adicionando o nome na lista
    listaDeNomes.innerHTML += `
  <li class=""><a href="#${nome}" >${nome}<a></li>
  `;
  });

  // captura o campo de pesquisa
  const campoDePesquisa = document.getElementById("pesquisa");
  // adiciona o evento ao campo de pesquisa, após ele ser alterado...faça
  campoDePesquisa.addEventListener("change", (event) => {
    // captura o nome digitado
    const nomePesquisado = event.target.value;
    // se o nome pesquisado for diferente de vazio
    if (!nomePesquisado == "") {
      // filtre a lista de nomes e renove a lista somente com nomes selecionados
      const resultadoPesquisa = nomes.filter((nome) => nome == nomePesquisado);
      // zera a lista de nomes
      listaDeNomes.innerHTML = ` `;
      // renova a lista de nomes com a pesquisa
      resultadoPesquisa.forEach((resultado) => {
        listaDeNomes.innerHTML += `
  <li class=""><a href="#${resultado}" >${resultado}<a></li>
  `;
      });
    } else {
      // caso de algum erro, ela vai trazer a lista completa
      nomes.forEach((nome) => {
        listaDeNomes.innerHTML += `
  <li class=""><a href="#${nome}" >${nome}<a></li>
  `;
      });
    }
  });
}
