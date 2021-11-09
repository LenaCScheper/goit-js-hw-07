import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

galleryContainer.addEventListener('click', modalOpen);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardMarkup(galleryItems));

function galleryCardMarkup(img) {
   return img.map(({preview,original,description}) => {
      return  `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
 }).join("");
};
function modalOpen(event) {
  event.preventDefault();
    if (event.target.nodeName !== "IMG") {
     return next.simplelightbox};

  
  document.addEventListener('keydown', modalCloseByEsc);
  modalBtnClose.addEventListener('click', modalClose);

};
function modalClose(event) {
 modal.classList.remove("is-open");

};
function modalCloseByEsc(event) {
 if (event.code === "Escape") {
      modalClose(event)        
  }
};



