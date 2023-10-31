const lists = document.querySelectorAll(".nav-list li a");

for (list of lists) {
  list.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// show mobile menu
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
  hamburger.style.display = "block";
  close.style.transform = "translateY(-20rem)";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
};

// Submenu Section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
  subMenuThree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  subMenuThree.style.transform = "translateX(-100%)";
});

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);
