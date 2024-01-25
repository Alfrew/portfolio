let jsSideScroll = document.querySelector(".js-side-scroll");
let jsSideScrollChildList = jsSideScroll ? jsSideScroll.querySelectorAll(".project__section") : [];
let lastClientY = 0;
let latestScrollValue = 0;
let scrollFinished = false;
let leftBtn;
let rightBtn;

function addSideScrollerListener() {
  latestScrollValue = 0;
  jsSideScroll = document.querySelector(".js-side-scroll");
  jsSideScrollChildList = jsSideScroll.querySelectorAll(".project__section");
  if (canHover) {
    jsSideScroll.addEventListener("wheel", (event) => {
      let deltaY = event.deltaY > 100 ? 100 : event.deltaY;
      latestScrollValue -= deltaY;
      smoothSideScroll();
    });
  } else {
    jsSideScroll.addEventListener("touchstart", (event) => {
      lastClientY = event.touches[0].clientY;
    });
    jsSideScroll.addEventListener("touchmove", (event) => {
      let deltaY = lastClientY - event.touches[0].clientY;
      latestScrollValue -= deltaY;
      smoothSideScroll();
      lastClientY = event.touches[0].clientY;
    });
  }
}

addEventListener("resize", () => {
  jsSideScroll.style.transform = `translate(0,0)`;
  latestScrollValue = 0;
});

function addSideBtnListener() {
  leftBtn = document.querySelector(".js-side-btn--left");
  rightBtn = document.querySelector(".js-side-btn--right");
  leftBtn.addEventListener("click", () => {
    let index = Math.round(-latestScrollValue / window.innerWidth);
    latestScrollValue = -(index * window.innerWidth - window.innerWidth);
    jsSideScrollChildList.forEach((el) => {
      el.setAttribute("data-isVisible", false);
    });
    index = Math.round(-latestScrollValue / window.innerWidth);
    jsSideScrollChildList[index].setAttribute("data-isVisible", true);
    updateScrollX();
  });
  rightBtn.addEventListener("click", () => {
    let index = Math.round(-latestScrollValue / window.innerWidth);
    latestScrollValue = -(index * window.innerWidth + window.innerWidth);
    jsSideScrollChildList.forEach((el) => {
      el.setAttribute("data-isVisible", false);
    });
    index = Math.round(-latestScrollValue / window.innerWidth);
    jsSideScrollChildList[index].setAttribute("data-isVisible", true);
    updateScrollX();
  });
}

function smoothSideScroll() {
  if (!scrollFinished && window.innerWidth < mainMediaQuerie) {
    requestAnimationFrame(updateScrollY);
  } else if (!scrollFinished) {
    requestAnimationFrame(updateScrollX);
  }
  jsSideScrollChildList.forEach((el) => {
    elementIsVisibleWheel(el);
  });
  scrollFinished = true;
}

function updateScrollX() {
  scrollFinished = false;
  latestScrollValue = latestScrollValue > 0 ? 0 : latestScrollValue;
  let maxValue = -jsSideScroll.getBoundingClientRect().width * (jsSideScrollChildList.length - 1);
  latestScrollValue = latestScrollValue < maxValue ? maxValue : latestScrollValue;
  jsSideScroll.style.transform = `translateX(${latestScrollValue}px)`;
  if (latestScrollValue == 0) {
    leftBtn.classList.add("d-none");
  } else if (latestScrollValue == maxValue) {
    rightBtn.classList.add("d-none");
  } else {
    leftBtn.classList.remove("d-none");
    rightBtn.classList.remove("d-none");
  }
}

function updateScrollY() {
  scrollFinished = false;
  latestScrollValue = latestScrollValue > 0 ? 0 : latestScrollValue;
  let maxValue = -jsSideScroll.getBoundingClientRect().height + window.innerHeight;
  latestScrollValue = latestScrollValue < maxValue ? maxValue : latestScrollValue;
  jsSideScroll.style.transform = `translateY(${latestScrollValue}px)`;
}
