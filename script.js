const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu ul li");

openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.add("open");
});

menu.addEventListener('click', (e) => {
    e.stopPropagation();
})

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

[...menuLinks].forEach((links) => {
  links.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

window.addEventListener("click", () => {
  menu.classList.remove("open");
});
