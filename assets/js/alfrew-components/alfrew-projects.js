const PROJECTS_LIST = document.querySelectorAll(".projects__list-item");
const PROJECT_EL = document.querySelector(".project");
const PROJECT_BG_LIST = document.querySelector(".project__backgrounds").querySelectorAll("div");

PROJECTS_LIST.forEach((el) => {
  elementVisibility(el);
  logoColoring(el);
  openProject(el);
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

function openProject(element) {
  let color = element.getAttribute("data-color");
  element.addEventListener("click", () => {
    PROJECT_BG_LIST[3].style.backgroundColor = color;
    PROJECT_EL.setAttribute("data-open", true);
    document.body.classList.add("modal-open");
    jsSideScroll = document.querySelector(".js-side-scroll");
    jsSideScrollChildList = jsSideScroll.children;
  });
}
