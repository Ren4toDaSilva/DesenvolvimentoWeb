const pontosRestantes = document.getElementById("pts");
const botoesMais = document.querySelectorAll(".mais");
const botoesMenos = document.querySelectorAll(".menos");
const confirmar = document.getElementById("confirmar");
const resultado = document.getElementById("resultado");

let pontos = 10;

function atualizarTela() {
  pontosRestantes.textContent = pontos;

  if (pontos === 0) {
    pontosRestantes.style.color = "red";
  } else {
    pontosRestantes.style.color = "black";
  }
}

atualizarTela();

botoesMais.forEach(btn => {
  btn.addEventListener("click", () => {
    if (pontos === 0) return;

    const atributo = btn.dataset.attr;
    const span = document.getElementById(atributo);

    span.textContent = Number(span.textContent) + 1;
    pontos--;

    atualizarTela();
  });
});

botoesMenos.forEach(btn => {
  btn.addEventListener("click", () => {
    const atributo = btn.dataset.attr;
    const span = document.getElementById(atributo);

    if (Number(span.textContent) === 0) return;

    span.textContent = Number(span.textContent) - 1;
    pontos++;

    atualizarTela();
  });
});

confirmar.addEventListener("click", () => {
  resultado.style.display = "none";

  if (pontos > 0) {
    alert("Ainda restam pontos para distribuir!");
    return;
  }

  const forca = document.getElementById("forca").textContent;
  const agi = document.getElementById("agi").textContent;
  const int = document.getElementById("int").textContent;

  resultado.innerHTML = `
    <h3>Distribuição Final</h3>
    <p>Força: ${forca}</p>
    <p>Agilidade: ${agi}</p>
    <p>Inteligência: ${int}</p>
  `;

  resultado.style.display = "block";
});