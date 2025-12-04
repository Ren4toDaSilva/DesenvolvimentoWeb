const botao = document.getElementById("btnMenu");
    const menu = document.getElementById("menu");

    botao.addEventListener("click", () => {
      menu.classList.toggle("hidden");

      // muda o texto do botão
      if (menu.classList.contains("hidden")) {
        botao.textContent = "Abrir Menu";
      } else {
        botao.textContent = "Fechar Menu";
      }
    });