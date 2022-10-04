// export const popupProfile = document.querySelector('.popup__profile');
export const popupCard = document.querySelector('.popup__card');
export const popupsClose = document.querySelectorAll('.popup__close');
export const popupEdit = document.querySelector('.profile__edit');
export const popupAddCard = document.querySelector('.profile__add');
// export const popupImg = document.querySelector('.popup__img');
// export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title');
export const formElementProfile = document.querySelector('.popup__container_profile');
// export const formElementCard = document.querySelector('.popup__container_card');
export const nameInput = document.querySelector('.popup__name');
export const jobInput = document.querySelector('.popup__job');
// export const profileTitle = document.querySelector('.profile__title');
// export const profileSubtitle = document.querySelector('.profile__subtitle');
// export const cardName = document.querySelector('.popup__namecard');
// export const cardLink = document.querySelector('.popup__link');
// export const container = document.querySelector('.elements');
// export const cardTemplate = document.querySelector('#element').content;
// export const formElement = document.querySelector('.popup__container')
// export const formInput = document.querySelector('.popup__text')

// export const cards = [
//   {
//     name: 'Карачаево-Черкессия',
//     link: './images/karachaevsk.jpg'
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: './images/elbrus.jpg'
//   },
//   {
//     name: 'Домбай',
//     link: './images/dombaj.jpg'
//   },
//   {
//     name: 'Балтийск',
//     link: './images/baltiysk.jpg'
//   },
//   {
//     name: 'Алтай',
//     link: './images/altaj.jpg'
//   },
//   {
//     name: 'Карелия',
//     link: './images/kareliya.jpg'
//   }
//   ];

// function createCard(name, link) {
//   const card = cardTemplate.querySelector('.element').cloneNode(true);
//   const elementsImg = card.querySelector('.element__img');
//   const elementsTitle = card.querySelector('.element__title');
//   elementsImg.src = link;
//   elementsImg.alt = name;
//   elementsTitle.textContent = name;
//   elementsImg.addEventListener('click', openImg);
//   const like = card.querySelector('.element__heart');
//   like.addEventListener('click', clickLike);
//   const exit = card.querySelector('.element__delete');
//   exit.addEventListener('click', deleteCard);
//   return card;
// };

// function renderCard(container, card) {
//   container.prepend(card)
// };

// cards.forEach((item) =>
//   renderCard(container, createCard(item.name, item.link))
// );

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

// export function closePopup(element) {
//   element.classList.remove('popup_opened');
//   removeEsc();
// };

// export function openPopup(element) {
//   element.classList.add('popup_opened');
//   closeEsc();
// };

popupsClose.forEach((item) =>
  item.addEventListener('click', function(evt) {
    closePopup(evt.target.closest('.popup'));
  }
  ));

// function closeButtonError() {
//   const button = formElementCard.querySelector('.popup__button');
//   button.disabled = true;
//   button.classList.add('popup__button_inactive');
//   const formError = document.querySelectorAll('.popup__text_error');
//   formError.forEach((item) => {
//     item.style.display = 'none';
//   })
// }

import { cardName, cardLink, addCard } from './card.js';
import { saveProfilePopup, closeButtonError, formElementCard, popupProfile, profileTitle, profileSubtitle } from './modal.js';
import { enableValidation } from './validate.js';
import { closePopup, openPopup } from './utils.js'

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

// function saveProfilePopup(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = jobInput.value;
//   closePopup(popupProfile)
// };


formElementProfile.addEventListener('submit', saveProfilePopup);

// function addCard(evt) {
//   evt.preventDefault();
//   renderCard(container, createCard(cardName.value, cardLink.value));
//   closePopup(popupCard);
// };


formElementCard.addEventListener('submit', addCard);



// export function openImg(evt) {
//   openPopup(popupImg);
//   popupImage.src = evt.target.src;
//   popupTitle.textContent = evt.target.alt;
//   popupImage.alt = evt.target.alt;
// };

// function deleteCard(evt) {
//   evt.target.closest('.element').remove()
// };

// function clickLike(evt) {
//   evt.target.classList.toggle('element__heart_active')
// };

// const isValid = (formElement, formInput) => {
//   if (formInput.validity.patternMismatch) {
//   formInput.setCustomValidity(formInput.dataset.errorMessage);
// } else {
//   formInput.setCustomValidity('');
// }

// if (!formInput.validity.valid) {
//   showInputError(formElement, formInput, formInput.validationMessage);
// } else {
//   hideInputError(formElement, formInput);
// }
// };

// const showInputError = (formElement, formInput, errorMessage) => {
//   const formError = formElement.querySelector(`.${formInput.id}_error`);
//   formError.style.display = 'block';
//   formError.textContent = errorMessage;
// };

// const hideInputError = (formElement, formInput) => {
//   const formError = formElement.querySelector(`.${formInput.id}_error`);

//   formError.style.display = 'none';
//   formError.textContent = '';
// };


// const hasInvalidInput = (inputList) => {
//   return inputList.some((formInput) => {
//     return !formInput.validity.valid;
//   })
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//     buttonElement.classList.add('popup__button_inactive');
//   } else {
//     buttonElement.disabled = false;
//     buttonElement.classList.remove('popup__button_inactive');
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
//   const buttonElement = formElement.querySelector('.popup__button');
//   buttonElement.disabled = true;
//   inputList.forEach((formInput) => {
//     formInput.addEventListener('input', () => {
//       isValid(formElement, formInput);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__container'));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement);
//   });
// };

enableValidation();


document.querySelector('body').addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('popup__container')) {
    document.querySelectorAll('.popup').forEach(() => {
      closePopup(evt.target);
    })
  }
});




