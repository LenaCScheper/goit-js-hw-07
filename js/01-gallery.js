import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const instance = basicLightbox;
galleryContainer.addEventListener('click', onGalleryClick);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardMarkup(galleryItems));

function galleryCardMarkup(img) {
   return img.map(({preview,original,description}) => {
      return  `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
 }).join("");
};
function onGalleryClick(e) {
    е.preventDefault();
    if (е.target.NODENAME !== 'IMG') {
    return;
    }
    if (e.target.nodeName === "IMG") {
        basicLightbox.create(`${original}`, {
            onShow: (instance) => {
                instance.element().querySelector('a').onclick = instance.close
            }
        })
    }
    window.addEventListener("keyup", clickKey);
  }
  function onClickHandlerClose(e) {
    е.preventDefault(); 

    window.removeEventListener("keyup", clickKey);
  }
function clickKey(event) {
    if (event.code === "Escape") {
      onClickHandlerClose();
    }
  }
  
