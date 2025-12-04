const lista = document.getElementById("lista");
const botaoAdd = document.getElementById("add");
let contador = 1;


botaoAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = `Item ${contador} <button class="remover">Remover</button>`;
  lista.appendChild(li);
  contador++;
});

lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("remover")) {
    event.target.parentNode.remove();
  }
});
