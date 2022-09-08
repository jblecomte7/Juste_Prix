// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let coups = 0;
let nbChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let nbAleatoire = Math.floor(Math.random() * 1001);

// Etape 6 - Créer la fonction vérifier

const verifier = (nombre) => {
  let instruction = document.createElement("div");

  if (nombre < nbAleatoire) {
    // C'est plus
    instruction.textContent = "#" + coups + " (" + nombre + ") C'est plus !";
    instruction.className = "instruction plus";
    // Ajouter un contenu '#1' (nombre) C'est plus !
    // Ajouter les classes CSS
  } else if (nombre > nbAleatoire) {
    // C'est moins
    instruction.textContent = "#" + coups + " (" + nombre + ") C'est moins !";
    instruction.className = "instruction moins";
  } else {
    // Félicitations
    instruction.textContent =
      "#" +
      coups +
      " (" +
      nombre +
      ") Félicitations, vous avez trouvé en " +
      coups +
      " coups !";
    instruction.className = "instruction fini";
    input.disabled = true;
  }

  let bloc = document.querySelector("#instructions");
  bloc.prepend(instruction);
};

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    error.style.display = "none";
    coups++;
    input.style.border = "1px solid silver";
    nbChoisi = input.value;
    input.value = "";
    verifier(nbChoisi);
  }
});
