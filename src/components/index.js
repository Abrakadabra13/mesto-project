import '../index.css';
import { enableValidation, disableButton, validation } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import { avatarImg, avatarButton, formElementAvatar, avatarInput, popupAvatar,container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, closeButtons, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
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
    evt.submitter.textContent = 'Сохранить';
  })
};

closeButtons.forEach((item) =>
  item.addEventListener('click', function(evt) {
    closePopup(evt.target.closest('.popup'));
  }
  ));

popupEdit.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  disableButton(formElementProfile)
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  disableButton(formElementCard)
});


avatarButton.addEventListener('click', function() {
  openPopup(popupAvatar);
  disableButton(formElementAvatar)
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
    evt.submitter.textContent = 'Сохранить';
  })
}

formElementAvatar.addEventListener('submit', addAvatar);

formElementProfile.addEventListener('submit', saveProfilePopup);

formElementCard.addEventListener('submit', addCard);

enableValidation(validation);

function renderCard(container, card) {
  container.prepend(card)
};

function addCard(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...'
  sendNewCard(cardName.value, cardLink.value)
  .then((card) => {
    renderCard(container, createCard(card));
    if(card.owner._id == myId) {
      document.querySelector('.element__delete').style.display = 'block';
    }
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
    evt.submitter.textContent = 'Сохранить';
  })
};




