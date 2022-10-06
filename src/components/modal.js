import { closePopup, openPopup } from './utils.js';
import { formElementCard, profileTitle, profileSubtitle, popupTitle, popupImage, popupImg, popupProfile } from './variables.js';

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

