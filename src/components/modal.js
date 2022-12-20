import { popupTitle, popupImage, popupImg } from './variables.js';


export function closeEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen)
    }
  };

export function openPopup(element) {
  document.querySelectorAll('.popup__text_error').forEach((item) => {
    item.style.display = 'none';
  })
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
};

export function openPopupImg(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
};

export function openImg(evt) {
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
  openPopupImg(popupImg);
};

export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.querySelector('body').removeEventListener('keydown', closeEsc);
};


document.querySelector('body').addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('popup__container')) {
   closePopup(evt.target);
  }
});




