// Récupération des éléments HTML5
const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const navbarLinks = document.querySelectorAll(".navbar a");
const slides = document.querySelector(".carousel .slides");
const dots = document.querySelectorAll(".carousel .dots button");

// Déclaration de la fonction toggleMenu qui va permettre d'afficher/ cacher le menu burger et la navigation
const toggleMenu = () => {
  // Ecoute de l'événement "click" sur le menu burger
  burger.addEventListener("click", () => {
    // Activation / désactivation de la classe show-nav
    navbar.classList.toggle("show-nav");
  });

  navbarLinks.forEach((link) => {
    // Ecoute de l'événement "click" sur le lien
    link.addEventListener("click", () => {
      // Activation / désactivation de la classe show-nav
      navbar.classList.toggle("show-nav");
    });
  });
};
// Appel de la fonction toggleMenu()
toggleMenu();

// Création de la variable index
let index = 0;
// Ajout de la balise img dans le DOM
slides.innerHTML = `<img src="img/slide-${index + 1}.jpg" alt="" />`;

// La méthode setInterval() de l'interface Window appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
const interval = setInterval(() => {
  // Incrémentation de la variable index
  index++;
  // console.log(index);

  // Condition if
  if (index > 2) {
    index = 0;
  }
  // Ajout de la balise img dans le DOM
  slides.innerHTML = `<img src="img/slide-${index + 1}.jpg" alt="" />`;
  dots.forEach((dot) => dot.classList.replace("activeDots", "inactiveDots"));
  dots[index].classList.replace("inactiveDots", "activeDots");
}, 2000);

// Boucle for qui va parcourir les boutons dots
for (let i = 0; i < dots.length; i++) {
  // Ecoute de l'événement "click" sur le bouton dot
  dots[i].addEventListener("click", (e) => {
    // Suppression du comportement par défaut du bouton
    e.preventDefault();
    dots.forEach((dot) => dot.classList.replace("activeDots", "inactiveDots"));
    e.target.classList.replace("inactiveDots", "activeDots");
    slides.innerHTML = `<img src="img/slide-${i + 1}.jpg" alt="" />`;
  });
}
