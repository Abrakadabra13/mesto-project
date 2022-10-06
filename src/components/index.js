import '../index.css';
import { addCard } from './card.js';
import { saveProfilePopup, closeButtonError, formElementCard, popupProfile, profileTitle, profileSubtitle } from './modal.js';
import { enableValidation } from './validate.js';
import { closePopup, openPopup } from './utils.js';
import { formElementCard, profileTitle, profileSubtitle, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';

export function closeEsc () {
  document.querySelector('body').addEventListener('keydown', function (evt) {
    if(evt.key === 'Escape') {
      document.querySelectorAll('.popup').forEach((item) => {
      closePopup(item);
      })
    }
  })};

 export function removeEsc () {
  document.querySelector('body').removeEventListener('keydown', closeEsc);
};

popupsClose.forEach((item) =>
  item.addEventListener('click', function(evt) {
    closePopup(evt.target.closest('.popup'));
  }
  ));

popupEdit.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  closeButtonError()
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  cardName.value = '';
  cardLink.value = '';
  closeButtonError()
});

formElementProfile.addEventListener('submit', saveProfilePopup);

formElementCard.addEventListener('submit', addCard);

enableValidation();

document.querySelector('body').addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('popup__container')) {
    document.querySelectorAll('.popup').forEach(() => {
      closePopup(evt.target);
    })
  }
});




