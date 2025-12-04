const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    const btn = document.getElementById("enviar");
    const msgErro = document.getElementById("msgErro");
    const msgSucesso = document.getElementById("msgSucesso");

    btn.addEventListener("click", () => {
      // Oculta mensagens anteriores
      msgErro.style.display = "none";
      msgSucesso.style.display = "none";

      if (nome.value === "" || email.value === "" || mensagem.value === "") {
        msgErro.style.display = "block";
      } else {
        msgSucesso.style.display = "block";
      }
    });