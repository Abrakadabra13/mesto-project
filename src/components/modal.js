import { popupTitle, popupImage, popupImg } from './variables.js';

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

export function handleEscape (evt) {
  if(evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
    }
  };

export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

export function openImg(cardEl) {
  popupImage.src = cardEl.link;
  popupTitle.textContent = cardEl.name;
  popupImage.alt = cardEl.name;
  openPopup(popupImg);
};





