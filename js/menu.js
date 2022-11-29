const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.menu-close-btn');
const openMenuBtn = document.querySelector('.menu-open-btn');

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("menu-hidden");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("menu-hidden");
});
