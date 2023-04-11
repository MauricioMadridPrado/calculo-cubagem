export function criaFormulario() {
  const multy = [
    {
      nome: "Multy",
      altura: 0.5,
      largura: 0.26,
      comprimento: 25,
      peso: 16.5,
    },
    {
      nome: "Multy",
      altura: 1,
      largura: 0.26,
      comprimento: 25,
      peso: 26.5,
    },
    {
      nome: "Multy",
      altura: 1.2,
      largura: 0.26,
      comprimento: 25,
      peso: 36.5,
    },
    {
      nome: "Multy",
      altura: 1.5,
      largura: 0.26,
      comprimento: 25,
      peso: 36.5,
    },
  ];

  let i = 0;
  multy.forEach((dado) => {
    const dadosDoProduto = document.getElementById("nome__produto");
    const formulario = document.getElementById("formulario");

    dadosDoProduto.innerHTML = `
    <h2 class="produto__total__cubagem" id="total__cubagem"></h2>
    <h2 class="produto__total__peso" id="total__peso">Total peso: <span id="kilogramas"></span></h2>
    `;
    formulario.innerHTML += `
        <tr class="linha__produto">
             <td data-dado>${dado.nome}</td>
            <td data-dado${i} = '${i}'>${dado.altura}</td>
            <td data-dado${i} = '${i}'>${dado.largura}</td>
            <td data-dado${i} = '${i}'>${dado.comprimento}</td>
            <td data-peso${i}>${dado.peso}</td>
            <td class="contador" data-contador${i} data-local=${i} ><input min="0" value="0"  type="number"></td>
            <td class="valor__total" data-total${i}>0</td>
        </tr>
    `;
    i++;
  });
}