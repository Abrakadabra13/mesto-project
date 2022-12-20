import '../index.css';
import { enableValidation, closeButtonError } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import { avatarImg, avatarButton, formElementAvatar, avatarInput, popupAvatar,container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
import { createCard } from './card.js';
import { promises, sendAvatar, getCards, getInfo, sendProfile, sendNewCard } from './api.js';

Promise.all(promises)

getInfo()
.then((info) => {
  profileTitle.textContent = info.name;
  profileSubtitle.textContent = info.about;
  avatarImg.src = info.avatar;
})
.catch((err) => {
  console.log('Ошибка. Запрос не выполнен: ', err);
})


getCards()
  .then((cards) => {
    cards.reverse()
    cards.forEach((card) => {
      renderCard(container, createCard(card));
      card.likes.forEach((like) => {
        if (like._id == '65b6aacc51e72cecf0fc46a7') {
          document.getElementById(card._id).querySelector('.element__heart').classList.add('element__heart_active');
        }
      });
    })
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

function saveProfilePopup(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  sendProfile()
  .then((info) => {
    console.log(info);
    profileTitle.textContent = info.name
    profileSubtitle.textContent = info.about
    closePopup(popupProfile)
  })
  .catch((err) => {
    console.error('Ошибка. Запрос не выполнен: ', err);
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
  sendAvatar()
  .then((info) => {
    avatarImg.src = '';
    avatarImg.src = info.avatar;
    closePopup(popupAvatar)
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
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
  sendNewCard()
  .then((card) => {
    renderCard(container, createCard(card));
    closePopup(popupCard);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
};

// export function openImg(evt) {
//   popupImage.src = evt.target.src;
//   popupTitle.textContent = evt.target.alt;
//   popupImage.alt = evt.target.alt;
//   openPopupImg(popupImg);
// };





