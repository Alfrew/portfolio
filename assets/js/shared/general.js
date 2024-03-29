const IMG_LIST = document.querySelectorAll("img");
const VIDEO_LIST = document.querySelectorAll("video");
const PARALLAX_ASSET_LIST = document.querySelectorAll(".parallax-asset");
const canHover = window.matchMedia("(hover: hover)").matches;
const mainMediaQuerie = 992;
let transitionEnd = whichTransitionEvent();

IMG_LIST.forEach((img) => {
  img.addEventListener("load", img.classList.add("base-image__img--loaded"));
});
VIDEO_LIST.forEach((video) => {
  video.addEventListener("load", video.parentElement.classList.add("base-video--loaded"));
});
setTimeout(() => {
  PARALLAX_ASSET_LIST.forEach((el) => {
    elementIsVisible(el);
  });
}, 1500);
PARALLAX_ASSET_LIST.forEach((el) => {
  window.addEventListener("scroll", () => {
    parallaxAsset(el);
  });
});

function elementIsVisible(element) {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const triggerRight = window.innerWidth;

  const boxTop = element.getBoundingClientRect().top;
  const boxLeft = element.getBoundingClientRect().left;

  if (boxTop < triggerBottom && boxLeft < triggerRight) {
    element.setAttribute("data-isVisible", true);
    window.removeEventListener("scroll", () => {
      elementIsVisible(element);
    });
  }
}

function elementIsVisibleWheel(element) {
  const triggerBottom = window.innerHeight * 0.5;
  const triggerRight = window.innerWidth * 0.5;

  const boxTop = element.getBoundingClientRect().top;
  const boxLeft = element.getBoundingClientRect().left;
  const triggerLeft = -element.getBoundingClientRect().width / 2;
  const triggerTop = -element.getBoundingClientRect().height / 2;
  if (boxTop < triggerBottom && boxTop > triggerTop && boxLeft < triggerRight && boxLeft > triggerLeft) {
    element.setAttribute("data-isVisible", true);
  } else {
    element.setAttribute("data-isVisible", false);
  }
}

function wordSplitter(el, delayS) {
  el.forEach((line) => {
    let word = line.querySelector(".text-splitter");
    let charArray = word.textContent.split("");
    word.innerHTML = "";
    charArray.forEach((char) => {
      let charEl = document.createElement("div");
      charEl.classList.add("anim-char");
      charEl.style.transitionDelay = `${delayS}s`;
      charEl.style.display = "inline-block";
      charEl.textContent = char;
      word.appendChild(charEl);
      delayS += 0.04;
    });
    word.classList.add("text-splitter--splitted");
    delayS -= 0.05;
  });
}

function textSplitter(el, delayS) {
  el.forEach((line) => {
    let words = line.querySelectorAll(".text-splitter");
    for (let i = 0; i < words.length; i++) {
      delayS = 0.15 * i;
      let word = words[i];
      let charArray = word.textContent.split("");
      word.innerHTML = "";
      charArray.forEach((char) => {
        let charEl = document.createElement("div");
        charEl.classList.add("anim-char");
        charEl.style.transitionDelay = `${delayS}s`;
        charEl.style.display = "inline-block";
        charEl.innerHTML = char !== " " ? char : "&nbsp;";
        word.appendChild(charEl);
        delayS += 0.04;
      });
      word.classList.add("text-splitter--splitted");
    }
  });
}

function whichTransitionEvent() {
  let t;
  let el = document.createElement("fakeEL");
  let transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

function parallaxAsset(element) {
  let child = element.querySelector(".parallax-asset__wrapper");
  let windowHeight = window.innerHeight;
  let elTop = element.getBoundingClientRect().top;
  let elHeight = element.getBoundingClientRect().height;
  let translateY = scale(elTop, windowHeight, -elHeight, -10, 10);
  if (elTop > windowHeight) {
    translateY = -10;
  }
  if (elTop < -elHeight) {
    translateY = 10;
  }
  child.style.transform = `translateY(${translateY}%)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
