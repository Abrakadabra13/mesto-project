import { renderCard } from './index.js';
import { createCard } from './card.js';
import { popupCard, avatarImg, avatarInput, container, nameInput, jobInput, profileTitle, profileSubtitle, cardName, cardLink } from './variables.js';
import { closePopup } from './modal.js';



export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-15',
  headers: {
    authorization: '54af0da1-f831-4414-9d43-2e686c2dcadd',
    'Content-Type': 'application/json'
  }
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getCards = () => {
  fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
  })
    .then(checkResponse)
    .then((cards) => {
      cards.reverse()
      cards.forEach((card) => {
        renderCard(container, createCard(card));
        card.likes.forEach( (like) => {
          if (like._id == '65b6aacc51e72cecf0fc46a7') {
            document.getElementById(card._id).querySelector('.element__likes button').classList.add('element__heart_active');
          }
        });
      })
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
}

export const cardDel = (cardId) => {

  return fetch(`${config.baseUrl}/cards/${cardId.id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
  .then(() => {
    cardId.remove();
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

};

export const getInfo = () => {
  fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse)
    .then((info) => {
      profileTitle.textContent = info.name
      profileSubtitle.textContent = info.about
      avatarImg.src = info.avatar
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
}

export const sendProfile = () => {
  fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
    })
  })
  .then(checkResponse)
  .then((info) => {
    profileTitle.textContent = info.name
    profileSubtitle.textContent = info.about
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
}

export const sendNewCard = () => {
  fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: cardName.value,
      link: cardLink.value
    })
  })
  .then(checkResponse)
  .then((card) => {
    renderCard(container, createCard(card));
    closePopup(popupCard);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
}


export const sendAvatar = () => {
  fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      avatar: avatarInput.value,
    })
  })
  .then(checkResponse)
  .then((info) => {
    avatarImg.src = '';
    avatarImg.src = info.avatar;
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
}

export const sendLike = (cardId) => {

  let met = 'PUT';
  if(document.getElementById(cardId.id).querySelector(".element__likes button").classList.contains("element__heart_active")) {
    met = 'DELETE';
  }

  return fetch(`${config.baseUrl}/cards/likes/${cardId.id}`, {
    method: met,
    headers: config.headers,
  })
  .then(checkResponse)
  .then((res) => {
    document.getElementById(cardId.id).querySelector('.element__likes button').classList.toggle('element__heart_active');
    document.getElementById(cardId.id).querySelector('.element__likes_number').textContent = res.likes.length;
    if (document.getElementById(cardId.id).querySelector('.element__likes_number').textContent == '0') {
      document.getElementById(cardId.id).querySelector('.element__likes_number').classList.add('element__likes_number_hidden');
    } else {
      document.getElementById(cardId.id).querySelector(".element__likes_number").classList.remove('element__likes_number_hidden');
    }
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

};

