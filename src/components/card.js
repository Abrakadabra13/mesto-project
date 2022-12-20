import { openImg } from './modal.js';
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
  const ownerid = card.setAttribute('ownerid', cardEl.owner._id);
  const myId = '65b6aacc51e72cecf0fc46a7';
  const cardId = card.setAttribute('id', cardEl._id);
  const elementsImg = card.querySelector('.element__img');
  const elementsTitle = card.querySelector('.element__title');
  elementsImg.src = cardEl.link;
  elementsImg.alt = cardEl.name;
  elementsTitle.textContent = cardEl.name;
  likeNumber.textContent = cardEl.likes.length;
  elementsImg.addEventListener('click', openImg);
  const like = card.querySelector('.element__heart');
  like.addEventListener('click', () => sendLike(card)
  .then(() => {
    clickLike(card)
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
    deleteCard(card)
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
  );
  return card;
};

export function deleteCard(cardId) {
  cardId.remove();
};

export function clickLike(cardId) {
  sendLike(cardId)
  .then((res) => {
    document.getElementById(cardId.id).querySelector('.element__heart').classList.toggle('element__heart_active');
    document.getElementById(cardId.id).querySelector('.element__likes_number').textContent = res.likes.length;
  if (document.getElementById(cardId.id).querySelector('.element__likes_number').textContent == '0') {
    document.getElementById(cardId.id).querySelector('.element__likes_number').classList.add('element__likes_number_hidden');
  } else {
    document.getElementById(cardId.id).querySelector('.element__likes_number').classList.remove('element__likes_number_hidden');
  }
})
};



