export function somaOPeso() {
  const linhas = document.querySelectorAll(".linha__produto");
  let i = 0;
  linhas.forEach(() => {
    let totalKilos = 0;
    const contador = document.querySelector(`[data-contador${i}]`);
    contador.addEventListener("change", alteraOPeso);
    i++;
  });
  let valores = [];
  function alteraOPeso() {
    valores = [];
    const pegaTodosOsPesos = document.querySelectorAll(".valor__kilos");
    const localOndeFicaOPeso = document.getElementById("kilogramas");
    pegaTodosOsPesos.forEach((peso) => {
      valores.push(parseFloat(peso.innerHTML));
      const kilos = Array.from(valores);
      const valorKilosTotal = kilos.reduce((a, b) => a + b, 0);
      localOndeFicaOPeso.innerHTML = `Total kilos dos produtos: ${valorKilosTotal
        .toFixed(2)
        .replace(".", ",")}Kg`;
    });
  }
}
