let jsSideScroll = document.querySelector(".js-side-scroll");
let jsSideScrollChildListLength = jsSideScroll.children.length;
let lastClientY = 0;
let latestScrollValue = 0;
let scrollFinished = false;

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

addEventListener("resize", () => {
  jsSideScroll.style.transform = `translate(0,0)`;
  latestScrollValue = 0;
});

function smoothSideScroll() {
  if (!scrollFinished && window.innerWidth < mainMediaQuerie) {
    requestAnimationFrame(updateScrollY);
  } else if (!scrollFinished) {
    requestAnimationFrame(updateScrollX);
  }
  scrollFinished = true;
}

function updateScrollX() {
  scrollFinished = false;
  latestScrollValue = latestScrollValue > 0 ? 0 : latestScrollValue;
  let maxValue = -jsSideScroll.getBoundingClientRect().width * (jsSideScrollChildListLength - 1);
  latestScrollValue = latestScrollValue < maxValue ? maxValue : latestScrollValue;
  jsSideScroll.style.transform = `translateX(${latestScrollValue}px)`;
}

function updateScrollY() {
  scrollFinished = false;
  latestScrollValue = latestScrollValue > 0 ? 0 : latestScrollValue;
  let maxValue = -jsSideScroll.getBoundingClientRect().height + window.innerHeight;
  latestScrollValue = latestScrollValue < maxValue ? maxValue : latestScrollValue;
  jsSideScroll.style.transform = `translateY(${latestScrollValue}px)`;
}
