const PROJECTS_LIST = document.querySelectorAll(".projects__list-item");
const PROJECT_EL = document.querySelector(".project");
const PROJECT_BG_LIST = document.querySelector(".project__backgrounds").querySelectorAll("div");

PROJECTS_LIST.forEach((el, index) => {
  let color = el.getAttribute("data-color");
  elementVisibility(el);
  logoColoring(el, color);
  openProject(el.querySelector(".projects__link"), index, color);
});

function logoColoring(element, color) {
  if (canHover) {
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

function openProject(element, index, color) {
  element.addEventListener("click", () => {
    PROJECT_BG_LIST[3].style.backgroundColor = color;
    PROJECT_EL.setAttribute("data-open", true);
    document.body.classList.add("modal-open");

    let projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project__wrapper");
    projectWrapper.innerHTML = PROJECTS_STRUCTURE_LIST[index];
    PROJECT_EL.append(projectWrapper);
    setTimeout(() => {
      projectWrapper.setAttribute("data-isVisible", true);
    }, 1100);
    let projectHeader = projectWrapper.querySelector(".project__header");
    projectHeader.style.backgroundColor = color;
    projectHeader.style.boxShadow = `0 2rem 3rem 3rem ${color}`;

    addSideBtnListener();
    addSideScrollerListener();
    addCloseProjectListener(projectWrapper);
  });
}

function addCloseProjectListener(projectWrapper) {
  let closeBtn = document.querySelector(".project__close");
  closeBtn.addEventListener("click", () => {
    projectWrapper.setAttribute("data-isVisible", false);
    projectWrapper.addEventListener(transitionEnd, () => {
      projectWrapper.remove();
    });
    PROJECT_EL.setAttribute("data-open", false);
    document.body.classList.remove("modal-open");
  });
}
