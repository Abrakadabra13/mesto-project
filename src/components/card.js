import { openImg } from './modal.js';
import { cardTemplate } from './variables.js';
import { sendLike, cardDel } from './api.js';

export function createCard(cardEl, myId) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const likeNumber = card.querySelector('.element__likes_number');
  if (cardEl.likes.length === 0) {
    likeNumber.classList.add('element__likes_number_hidden');
  } else {
    likeNumber.classList.remove('element__likes_number_hidden');
  }
  const cardId = card.setAttribute('id', cardEl._id);
  const elementsImg = card.querySelector('.element__img');
  const elementsTitle = card.querySelector('.element__title');
  elementsImg.src = cardEl.link;
  elementsImg.alt = cardEl.name;
  elementsTitle.textContent = cardEl.name;
  likeNumber.textContent = cardEl.likes.length;
  elementsImg.addEventListener('click', () => openImg(cardEl));
  const like = card.querySelector('.element__heart');
  cardEl.likes.forEach((cardLike) => {
  if (cardLike._id == myId) {
    like.classList.add('element__heart_active');
    }
  });
  let isLiked = false;
  like.addEventListener('click', () => {
    if (like.classList.contains('element__heart_active')) {
      isLiked = true;
    }
  });
  like.addEventListener('click', () => sendLike(card, isLiked)
  .then((res) => {
    like.classList.toggle('element__heart_active');
    likeNumber.textContent = res.likes.length;
    if (likeNumber.textContent == '0') {
      likeNumber.classList.add('element__likes_number_hidden');
    } else {
      likeNumber.classList.remove('element__likes_number_hidden');
    }
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  );
  const exit = card.querySelector('.element__delete');
    if(cardEl.owner._id == myId) {
      exit.style.display = 'block';
    }
  exit.addEventListener('click', () => cardDel(card)
  .then(() => {
    card.remove();
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  );
  return card;
};



