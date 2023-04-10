const contadores = document.querySelectorAll("[data-contador]");


// console.log(metrosCubicos.innerHTML)
contadores.forEach((contador) => {
  contador.addEventListener("change", (event) => {
    let valorTotal = 1;
    const alvo = event.target.parentNode.nextSibling.nextSibling;
    const linha = event.target.parentNode.parentNode.innerHTML;

    

    
    const dadosProduto = document.querySelectorAll("[data-dado]");
    dadosProduto.forEach((dado) => {
      valorConvertido = parseFloat(dado.innerHTML);
      valorTotal *= valorConvertido;
    });

    let valorQuantidade = parseFloat(event.target.value)
    let totalMetragem = (valorTotal * valorQuantidade).toFixed(2);


    alvo.innerHTML = `${totalMetragem}`;
  });
});
