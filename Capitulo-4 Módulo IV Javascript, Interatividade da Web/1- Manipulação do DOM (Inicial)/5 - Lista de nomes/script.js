const input = document.getElementById("nomeInput");
    const btnAdd = document.getElementById("btnAdd");
    const btnLimpar = document.getElementById("btnLimpar");
    const ul = document.getElementById("lista");

    btnAdd.addEventListener("click", () => {
      const texto = input.value.trim();

      if (texto === "") return; // evita adicionar vazio

      const li = document.createElement("li");
      li.textContent = texto;

      ul.appendChild(li);

      input.value = "";        // limpa o input
      input.focus();           // volta o cursor para o input
    });

    btnLimpar.addEventListener("click", () => {
      ul.innerHTML = "";       // limpa toda a lista
    });