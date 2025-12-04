const botao = document.getElementById("toggleTheme");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Muda o texto do botão conforme o tema atual
  if (document.body.classList.contains("dark")) {
    botao.textContent = "Modo Light";
  } else {
    botao.textContent = "Modo Dark";
  }
});