const PROJECTS_LIST = document.querySelectorAll(".projects__list-item");

PROJECTS_LIST.forEach((el) => {
  elementVisibility(el);
  logoColoring(el);
});

function logoColoring(element) {
  if (canHover) {
    let color = element.getAttribute("data-color");
    element.addEventListener("mouseover", () => {
      LOGO_EL.style.backgroundColor = color;
    });
    element.addEventListener("mouseleave", () => {
      LOGO_EL.style.backgroundColor = "";
    });
  }
}

function elementVisibility(element) {
  setTimeout(() => {
    elementIsVisible(element);
    window.addEventListener("scroll", () => {
      elementIsVisible(element);
    });
  }, 1500);
}
