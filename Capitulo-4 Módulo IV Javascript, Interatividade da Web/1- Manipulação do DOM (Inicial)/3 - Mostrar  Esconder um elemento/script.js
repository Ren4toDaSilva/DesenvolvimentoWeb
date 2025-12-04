const quadrado = document.getElementById("box");
    const botao = document.getElementById("toggleBtn");

    botao.addEventListener("click", function () {
      quadrado.classList.toggle("hidden");
    });