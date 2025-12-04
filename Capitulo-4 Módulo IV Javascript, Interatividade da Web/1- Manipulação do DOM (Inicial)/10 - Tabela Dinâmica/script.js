const tabela = document.getElementById("tabela");
    const btnAdd = document.getElementById("add");
    const btnRemove = document.getElementById("remove");

    let contador = 1;

    btnAdd.addEventListener("click", () => {
      const novaLinha = tabela.insertRow();
      const novaCelula = novaLinha.insertCell();
      novaCelula.textContent = "Linha " + contador++;
    });

    btnRemove.addEventListener("click", () => {
      const totalRows = tabela.rows.length;

      if (totalRows > 1) {
        tabela.rows[totalRows - 1].remove();
        contador--;
      }
    });