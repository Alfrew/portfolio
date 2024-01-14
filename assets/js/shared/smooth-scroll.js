const body = document.body,
  jsScroll = document.getElementsByClassName("js-scroll")[0],
  scrollHeight = jsScroll.getBoundingClientRect().height - 1,
  scrollSpeed = 0.1;

let scrollOffset = 0;

body.style.height = Math.floor(scrollHeight) + "px";

function smoothScroll() {
  scrollOffset += (window.pageYOffset - scrollOffset) * scrollSpeed;

  let scroll = "translateY(-" + scrollOffset + "px) translateZ(0)";
  jsScroll.style.transform = scroll;

  raf = requestAnimationFrame(smoothScroll);
}
smoothScroll();

//to-do: ricalcolo height al resize della pagina
