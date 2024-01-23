let STRUCTURE_C2MTL;
let STRUCTURE_FSC;
let STRUCTURE_HM;
let STRUCTURE_MA;
let PROJECTS_STRUCTURE_LIST = [];

let structureInterval = setInterval(() => {
  if (langData) {
    STRUCTURE_C2MTL = `
    <div class="project__close">X</div>
    <h1 class="project__header" >${langData["c2mtl__title"]}</h1>
    <div class="project__btn js-side-btn--left d-none"></div>
    <div class="project__btn js-side-btn--right"></div>
    <div class="project__content js-side-scroll">
    
      <div class="project__section" data-isVisible="true">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--description">
              <p class="project__section-copy" >${langData["c2mtl__description"]}</p>
              <video class="project__section-media" src="assets/img/c2mtl-video1.mp4" autoplay loop muted>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <video class="project__section-media" src="assets/img/c2mtl-video2.mp4" autoplay loop muted>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["c2mtl__copy1"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/c2mtl-mobile1.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/c2mtl-mobile2.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/c2mtl-mobile3.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <img class="project__section-media" src="assets/img/c2mtl-en1.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <img class="project__section-media" src="assets/img/c2mtl-fr1.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["c2mtl__copy2"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
    
    </div>
    `;
    STRUCTURE_FSC = `
    <div class="project__close">X</div>
    <h1 class="project__header" >${langData["fsc__title"]}</h1>
    <div class="project__btn js-side-btn--left d-none"></div>
    <div class="project__btn js-side-btn--right"></div>
    <div class="project__content js-side-scroll">
    
      <div class="project__section" data-isVisible="true">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--description">
              <p class="project__section-copy" >${langData["fsc__description"]}</p>
              <video class="project__section-media" src="assets/img/fsc-video.mp4" autoplay loop muted>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["fsc__copy1"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <img class="project__section-media" src="assets/img/fsc-en2.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <img class="project__section-media" src="assets/img/fsc-it2.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["fsc__copy2"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/fsc-mobile1.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/fsc-mobile2.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/fsc-mobile3.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/fsc-mobile4.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/fsc-mobile5.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/fsc-mobile6.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    STRUCTURE_HM = `
    <div class="project__close">X</div>
    <h1 class="project__header" >${langData["memory__title"]}</h1>
    <div class="project__btn js-side-btn--left d-none"></div>
    <div class="project__btn js-side-btn--right"></div>
    <div class="project__content js-side-scroll">
    
      <div class="project__section" data-isVisible="true">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--description">
              <p class="project__section-copy" >${langData["memory__description"]}</p>
              <img class="project__section-media" src="assets/img/hm-home.jpg" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <video class="project__section-media" src="assets/img/hm-video.mp4" autoplay loop muted>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["memory__copy"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/hm-mobile1.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/hm-mobile2.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/hm-mobile3.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
    </div>
    `;
    STRUCTURE_MA = `
    <div class="project__close">X</div>
    <h1 class="project__header" >${langData["movie__title"]}</h1>
    <div class="project__btn js-side-btn--left d-none"></div>
    <div class="project__btn js-side-btn--right"></div>
    <div class="project__content js-side-scroll">
    
      <div class="project__section" data-isVisible="true">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--description">
              <p class="project__section-copy" >${langData["movie__description"]}</p>
              <img class="project__section-media" src="assets/img/ma-home.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper">
              <video class="project__section-media" src="assets/img/ma-video.mp4" autoplay loop muted>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-copy-wrapper">
              <h1 class="project__section-copy ttu" >${langData["movie__copy"]}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/ma-mobile1.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/ma-mobile2.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/ma-mobile3.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__section">
        <div class="project__section-wrapper">
          <div class="project__section-content">
            <div class="project__section-media-wrapper project__section-media-wrapper--3">
              <img class="project__section-media" src="assets/img/ma-mobile4.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/ma-mobile5.png" alt="" srcset="">
              <img class="project__section-media" src="assets/img/ma-mobile6.png" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    
    </div>
    `;
    PROJECTS_STRUCTURE_LIST = [STRUCTURE_C2MTL, STRUCTURE_MA, STRUCTURE_FSC, STRUCTURE_HM];
    clearInterval(structureInterval);
  }
}, 500);
