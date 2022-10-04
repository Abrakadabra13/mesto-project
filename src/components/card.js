export const cardName = document.querySelector('.popup__namecard');
export const cardLink = document.querySelector('.popup__link');
export const container = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#element').content;

import { openImg } from './modal.js';
import { closePopup } from './utils.js';
import { popupCard } from './index.js';

 const cards = [
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/dombaj.jpg'
  },
  {
    name: 'Балтийск',
    link: './images/baltiysk.jpg'
  },
  {
    name: 'Алтай',
    link: './images/altaj.jpg'
  },
  {
    name: 'Карелия',
    link: './images/kareliya.jpg'
  }
  ];

export function createCard(name, link) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const elementsImg = card.querySelector('.element__img');
  const elementsTitle = card.querySelector('.element__title');
  elementsImg.src = link;
  elementsImg.alt = name;
  elementsTitle.textContent = name;
  elementsImg.addEventListener('click', openImg);
  const like = card.querySelector('.element__heart');
  like.addEventListener('click', clickLike);
  const exit = card.querySelector('.element__delete');
  exit.addEventListener('click', deleteCard);
  return card;
};

function renderCard(container, card) {
  container.prepend(card)
};

cards.forEach((item) =>
  renderCard(container, createCard(item.name, item.link))
);

export function addCard(evt) {
  evt.preventDefault();
  renderCard(container, createCard(cardName.value, cardLink.value));
  closePopup(popupCard);
};

function deleteCard(evt) {
  evt.target.closest('.element').remove()
};

function clickLike(evt) {
  evt.target.classList.toggle('element__heart_active')
};



