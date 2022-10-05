import '../index.css';
import { cardName, cardLink, addCard } from './card.js';
import { saveProfilePopup, closeButtonError, formElementCard, popupProfile, profileTitle, profileSubtitle } from './modal.js';
import { enableValidation } from './validate.js';
import { closePopup, openPopup } from './utils.js';

export const popupCard = document.querySelector('.popup__card');
export const popupsClose = document.querySelectorAll('.popup__close');
export const popupEdit = document.querySelector('.profile__edit');
export const popupAddCard = document.querySelector('.profile__add');
export const popupTitle = document.querySelector('.popup__title');
export const formElementProfile = document.querySelector('.popup__container_profile');
export const nameInput = document.querySelector('.popup__name');
export const jobInput = document.querySelector('.popup__job');


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




