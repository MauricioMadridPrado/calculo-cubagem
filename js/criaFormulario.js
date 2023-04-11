export function criaFormulario() {
  const listaDeNomes = document.getElementById('lista__de__nomes')
  const nomes =  [];
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
      peso: 41.5,
    },
    {
      nome: "Multy leve",
      altura: 0.5,
      largura: 0.20,
      comprimento: 25,
      peso: 10.5,
    },
    {
      nome: "Multy leve",
      altura: 1,
      largura: 0.20,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "Multy leve",
      altura: 1.2,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Multy leve",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "Multy max",
      altura: 0.5,
      largura: 0.20,
      comprimento: 25,
      peso: 10.5,
    },
    {
      nome: "Multy max",
      altura: 1,
      largura: 0.20,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "Multy max",
      altura: 1.2,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Multy max",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "Titan",
      altura: 1,
      largura: 0.20,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "Titan",
      altura: 1.2,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Titan",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "Titan",
      altura: 1.8,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Titan",
      altura: 2,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "Morada",
      altura: 1,
      largura: 0.20,
      comprimento: 25,
      peso: 20.5,
    },
    {
      nome: "Morada",
      altura: 1.2,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Morada",
      altura: 1.5,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    },
    {
      nome: "Morada",
      altura: 1.8,
      largura: 0.20,
      comprimento: 25,
      peso: 30.5,
    },
    {
      nome: "Morada",
      altura: 2,
      largura: 0.21,
      comprimento: 25,
      peso: 35.5,
    }
  ];

  let i = 0;
  multy.forEach((dado) => {
    const dadosDoProduto = document.getElementById("nome__produto");
    const formulario = document.getElementById("formulario");

    dadosDoProduto.innerHTML = `
    <h2 class="produto__total__cubagem" id="total__cubagem">Total de metros cúbicos:0</h2>
    <h2 class="produto__total__peso" id="kilogramas">Total kilos dos produtos :0</h2>
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
    ;
  });
  multy.forEach(  a =>{
    if(!nomes.includes(a.nome)){
      nomes.push(a.nome)
    } 
  })

  
  nomes.forEach(  nome =>{
    listaDeNomes.innerHTML += 
  `
  <li class=""><a href="#${nome}" >${nome}<a></li>
  `
})

const campoDePesquisa = document.getElementById('pesquisa')
campoDePesquisa.addEventListener("change", (event) => {

  const nomePesquisado = event.target.value;
  if(!nomePesquisado == ''){
  const resultadoPesquisa = nomes.filter(nome => nome == nomePesquisado)
  listaDeNomes.innerHTML = ` `;
  console.log(resultadoPesquisa)

  resultadoPesquisa.forEach((resultado) => {
    listaDeNomes.innerHTML += `
  <li class=""><a href="#${resultado}" >${resultado}<a></li>
  `;
  });} else{
      
  nomes.forEach(  nome =>{
    listaDeNomes.innerHTML += 
  `
  <li class=""><a href="#${nome}" >${nome}<a></li>
  `
})
  }
});
}

