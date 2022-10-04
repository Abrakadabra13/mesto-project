export const formElementCard = document.querySelector('.popup__container_card');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const popupImage = document.querySelector('.popup__image');
export const popupImg = document.querySelector('.popup__img');
export const popupProfile = document.querySelector('.popup__profile');

import { nameInput, jobInput, popupTitle } from './index.js'
import { closePopup, openPopup } from './utils.js'

// export function closePopup(element) {
//   element.classList.remove('popup_opened');
//   removeEsc();
// };

// export function openPopup(element) {
//   element.classList.add('popup_opened');
//   closeEsc();
// };


export function closeButtonError() {
  const button = formElementCard.querySelector('.popup__button');
  button.disabled = true;
  button.classList.add('popup__button_inactive');
  const formError = document.querySelectorAll('.popup__text_error');
  formError.forEach((item) => {
    item.style.display = 'none';
  })
}

export function saveProfilePopup(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
};

export function openImg(evt) {
  openPopup(popupImg);
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
};

