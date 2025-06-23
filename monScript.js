// Variables globales pour le carrousel
let imagesActuelles = [];
let indexImage = 0;

function ouvrirModal(images, titre, texte) {
  imagesActuelles = images; // Tableau d'images
  indexImage = 0;
  document.getElementById("modalImg").src = imagesActuelles[indexImage];
  document.getElementById("modalTitre").innerHTML = titre;
  document.getElementById("modalTexte").innerHTML = texte;
  document.getElementById("modal").style.display = "block";
}

function fermerModal() {
  document.getElementById("modal").style.display = "none";
}

function suivantImage() {
  if (indexImage < imagesActuelles.length - 1) {
    indexImage++;
    document.getElementById("modalImg").src = imagesActuelles[indexImage];
  }
}

function precedentImage() {
  if (indexImage > 0) {
    indexImage--;
    document.getElementById("modalImg").src = imagesActuelles[indexImage];
  }
}

function validerChoix() {
  alert("✅ Vous avez choisi ce logement !");
}
