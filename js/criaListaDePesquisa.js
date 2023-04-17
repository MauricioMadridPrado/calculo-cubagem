export function criaListaDePesquisa(produto) {
  const nomes = [];
  const listaDeNomes = document.getElementById("lista__de__nomes");

  // ---------------------------------------------------------------------------------
  // pra cada produto
  produto.forEach((prod) => {
    // se o nome do produto não existir na lista, adione esse nome na lista
    if (!nomes.includes(prod.nome)) {
      // adiciona em nomes o novo nome
      nomes.push(prod.nome);
    }
  });
  // ---------------------------------------------------------------------------------

  // para cada nome na lista
  nomes.forEach((nome) => {
    // adicionando o nome na lista
    listaDeNomes.innerHTML += `
      <li class=""><a href="#${nome}" >${nome}<a></li>
      `;
  });
  // ---------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------
  // captura o campo de pesquisa
  const campoDePesquisa = document.getElementById("pesquisa");
  // adiciona o evento ao campo de pesquisa, após ele ser alterado...faça

  // ---------------------------------------------------------------------------------
  campoDePesquisa.addEventListener("change", (event) => {
    // captura o nome digitado
    const nomePesquisado = event.target.value;
    // se o nome pesquisado for diferente de vazio

    // ---------------------------------------------------------------------------------
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
