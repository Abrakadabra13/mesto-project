import '../index.css';
import { enableValidation, closeButtonError } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import { avatarImg, avatarButton, formElementAvatar, avatarInput, popupAvatar,container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
import { createCard } from './card.js';
import { sendAvatar, getCards, getInfo, sendProfile, sendNewCard } from './api.js';


let myId;

Promise.all([getInfo(), getCards()])
  .then(([info, cards]) => {
    profileTitle.textContent = info.name;
    profileSubtitle.textContent = info.about;
    avatarImg.src = info.avatar;

    myId = info._id;

    cards.reverse()
    cards.forEach((card) => {
      renderCard(container, createCard(card, myId));
    })
  })
  .catch((err) => {
    console.error('Ошибка. Запрос не выполнен: ', err);
  });

function saveProfilePopup(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  sendProfile(nameInput.value, jobInput.value)
  .then((info) => {
    profileTitle.textContent = info.name
    profileSubtitle.textContent = info.about
    closePopup(popupProfile)
  })
  .catch((err) => {
    console.error('Ошибка. Запрос не выполнен: ', err);
  })
  .finally(() => {
    const button = document.querySelector('.popup__button');
    button.textContent = 'Сохранить';
  })
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
  closeButtonError()
});


avatarButton.addEventListener('click', function() {
  openPopup(popupAvatar);
  closeButtonError()
})

function addAvatar(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  sendAvatar(avatarInput.value)
  .then((info) => {
    avatarImg.src = '';
    avatarImg.src = info.avatar;
    closePopup(popupAvatar)
  })
  .then(() => {
    avatarInput.value = '';
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  .finally(() => {
    const button = document.querySelector('.popup__button_avatar');
    button.textContent = 'Сохранить';
  })
}

formElementAvatar.addEventListener('submit', addAvatar);

formElementProfile.addEventListener('submit', saveProfilePopup);

formElementCard.addEventListener('submit', addCard);

enableValidation();

function renderCard(container, card) {
  container.prepend(card)
};

function addCard(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...'
  sendNewCard(cardName.value, cardLink.value)
  .then((card) => {
    renderCard(container, createCard(card));
    closePopup(popupCard);
  })
  .then(() => {
    cardName.value = '';
    cardLink.value = '';
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  .finally(() => {
    const button = document.querySelector('.popup__button_card');
    button.textContent = 'Сохранить';
  })
};




