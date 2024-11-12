const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo"); // Adiciona ou remove a classe 'ativo' no menu
  NavMenu.classList.toggle("ativo"); // Adiciona ou remove a classe 'ativo' no menu de navegação
});
