let numero = 0;

    const spanValor = document.getElementById("valor");
    const btnMais = document.getElementById("mais");
    const btnMenos = document.getElementById("menos");

    btnMais.addEventListener("click", () => {
      numero++;
      spanValor.textContent = numero;
    });

    btnMenos.addEventListener("click", () => {
      numero--;
      spanValor.textContent = numero;
    });