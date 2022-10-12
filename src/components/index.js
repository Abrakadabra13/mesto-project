import '../index.css';
import { enableValidation, closeButtonError } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import { avatarButton, formElementAvatar, avatarInput, popupAvatar, popupTitle, popupImage, popupImg, container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
import { createCard } from './card.js';
import { sendAvatar, getCards, getInfo, sendProfile, sendNewCard } from './api.js';


getCards();
getInfo();


export function saveProfilePopup(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  sendProfile();
  closePopup(popupProfile)
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
  const button = document.querySelector('.popup__button');
  button.textContent = 'Сохранить';
  closeButtonError()
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  cardName.value = '';
  cardLink.value = '';
  const button = document.querySelector('.popup__button_card');
  button.textContent = 'Сохранить';
  closeButtonError()
});


avatarButton.addEventListener('click', function() {
  openPopup(popupAvatar);
  avatarInput.value = '';
  const button = document.querySelector('.popup__button_avatar');
  button.textContent = 'Сохранить';
  closeButtonError()
})

function addAvatar(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  sendAvatar();
  closePopup(popupAvatar);
}

formElementAvatar.addEventListener('submit', addAvatar);

formElementProfile.addEventListener('submit', saveProfilePopup);

formElementCard.addEventListener('submit', addCard);

enableValidation();

export function renderCard(container, card) {
  container.prepend(card)
};

export function addCard(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...'
  sendNewCard()
  // renderCard(container, createCard(cardName.value, cardLink.value, '65b6aacc51e72cecf0fc46a7'));
  // closePopup(popupCard);
};


export function openImg(evt) {
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
  openPopup(popupImg);
};


