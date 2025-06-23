function ouvrirModal(imgSrc, titre, texte) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalTitre").innerHTML = titre;
  document.getElementById("modalTexte").innerHTML = texte;
  document.getElementById("modal").style.display = "block";
}

function fermerModal() {
  document.getElementById("modal").style.display = "none";
}
