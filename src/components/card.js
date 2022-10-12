import { openImg } from './index.js';

import { cardTemplate } from './variables.js';

import { sendLike, cardDel } from './api.js';

export function createCard(cardEl) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const likeNumber = card.querySelector('.element__likes_number');
  if (cardEl.likes.length === 0) {
    likeNumber.classList.add('element__likes_number_hidden');
  } else {
    likeNumber.classList.remove('element__likes_number_hidden');
  }
  const myId = card.setAttribute('ownerid', cardEl.owner._id);
  const cardId = card.setAttribute('id', cardEl._id);
  const elementsImg = card.querySelector('.element__img');
  const elementsTitle = card.querySelector('.element__title');
  elementsImg.src = cardEl.link;
  elementsImg.alt = cardEl.name;
  elementsTitle.textContent = cardEl.name;
  likeNumber.textContent = cardEl.likes.length;
  elementsImg.addEventListener('click', openImg);
  const like = card.querySelector('.element__heart');
  like.addEventListener('click', () => sendLike(card));
  const exit = card.querySelector('.element__delete');
    if(cardEl.owner._id == '65b6aacc51e72cecf0fc46a7') {
      exit.style.display = 'block';
    }
  exit.addEventListener('click', () => cardDel(card));

  return card;
};

export function deleteCard(evt) {
  evt.target.closest('.element').remove();
};

// export function clickLike(evt) {
//   evt.target.classList.toggle('element__heart_active');
// };

