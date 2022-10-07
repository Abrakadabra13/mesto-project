import { openImg } from './index.js';

import { cardTemplate } from './variables.js';


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

function deleteCard(evt) {
  evt.target.closest('.element').remove()
};

function clickLike(evt) {
  evt.target.classList.toggle('element__heart_active')
};



