import { criaFormulario } from "./criaFormulario.js";

criaFormulario();

const linhas = document.querySelectorAll('.linha__produto')

let i = 0;
linhas.forEach( ()=>{

  const contador = document.querySelector(`[data-contador${i}]`)
  const valorFinal = document.querySelector(`[data-total${i}]`)
  const localValorCubagem = document.getElementById('total__cubagem')

  let totalMetrosCubicos = 0;
  contador.addEventListener('change', (event)=>{
       let posicao = event.target.parentNode.dataset.local;
    let quantidadeTotal = event.target.value;
    let totalCubica = 1;

    const metragens = document.querySelectorAll(`[data-dado${posicao}]`)
    metragens.forEach(  (valor) =>{

      totalCubica *= valor.innerHTML;
      
    })

    localValorCubagem.innerHTML = `Total metros cúbicos:${totalMetrosCubicos.toFixed(2)}`;
    valorFinal.innerHTML = totalCubica * quantidadeTotal;


  })

  i++;
})


