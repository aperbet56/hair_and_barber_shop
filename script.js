// Récupération des éléments HTML5
const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const navbarLinks = document.querySelectorAll(".navbar a");

// Déclaration de la fonction toggleMenu qui va permettre d'afficher/ cacher le menu burger et lanavigation
const toggleMenu = () => {
  // Ecoute de l'événement "click" sur le menu burger
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });

  navbarLinks.forEach((link) => {
    // Ecoute de l'événement "click" sur le lien
    link.addEventListener("click", () => {
      navbar.classList.toggle("show-nav");
    });
  });
};
// Appel de la fonction toggleMenu()
toggleMenu();
