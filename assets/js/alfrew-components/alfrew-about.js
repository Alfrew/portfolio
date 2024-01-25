const ABOUT_OPEN_BTN = document.querySelector(".js-open-about");
const ABOUT_CLOSE_BTN = document.querySelector(".js-close-about");
const ABOUT_CLOSE_BTN_EL = document.querySelector(".about__close").querySelectorAll(".overflow");
const ABOUT_CONTAINER = document.querySelector(".about");
const ABOUT_LOGO = ABOUT_CONTAINER.querySelector(".logo");

ABOUT_OPEN_BTN.addEventListener("click", openAbout, { once: true });
window.addEventListener("scroll", moveAboutLogo);
setTimeout(() => {
  wordSplitter(ABOUT_CLOSE_BTN_EL, 0);
}, 1400);

function moveAboutLogo() {
  let top = LOGO_EL.getBoundingClientRect().y - ABOUT_CONTAINER.getBoundingClientRect().y;
  ABOUT_LOGO.style.top = top + "px";
}

function openAbout() {
  LOGO_EL.style.zIndex = "15";
  LOGO_EL.style.transform = "scale(10)";
  document.body.classList.add("modal-open");
  LOGO_EL.addEventListener(
    transitionEnd,
    () => {
      ABOUT_CONTAINER.setAttribute("data-open", "true");
      ABOUT_CLOSE_BTN.addEventListener("click", closeAbout, { once: true });
    },
    { once: true }
  );
}
function closeAbout() {
  ABOUT_CONTAINER.setAttribute("data-open", "false");
  LOGO_EL.style.transform = "scale(1)";
  document.body.classList.remove("modal-open");
  LOGO_EL.addEventListener(
    transitionEnd,
    () => {
      LOGO_EL.style.zIndex = "";
      ABOUT_OPEN_BTN.addEventListener("click", openAbout, { once: true });
    },
    { once: true }
  );
}
