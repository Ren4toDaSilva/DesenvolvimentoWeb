const btnRegistrar = document.getElementById("registrar");
const btnLimpar = document.getElementById("limpar");
const lista = document.getElementById("lista");

btnRegistrar.addEventListener("click", () => {
  const li = document.createElement("li");

  const agora = new Date();
  const data = agora.toLocaleDateString();
  const hora = agora.toLocaleTimeString();

  li.textContent = `Clique registrado — ${data} ${hora}`;
  lista.appendChild(li);
});

btnLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
});