const imgGrande = document.getElementById("imgGrande");
    const miniaturas = document.querySelectorAll(".thumbs img");

    miniaturas.forEach(img => {
      img.addEventListener("click", () => {
        imgGrande.src = img.src; // troca a imagem principal
      });
    });