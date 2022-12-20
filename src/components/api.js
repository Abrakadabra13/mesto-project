import { avatarInput, nameInput, jobInput, cardName, cardLink } from './variables.js';

export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-15',
  headers: {
    authorization: '54af0da1-f831-4414-9d43-2e686c2dcadd',
    'Content-Type': 'application/json'
  }
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
  })
  .then(checkResponse)
};


export const getInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse)
};

export const sendProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
    })
  })
  .then(checkResponse)
};

export const sendNewCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: cardName.value,
      link: cardLink.value
    })
  })
  .then(checkResponse)
};


export const sendAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      avatar: avatarInput.value,
    })
  })
  .then(checkResponse)
};

export const cardDel = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId.id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
};

export const sendLike = (cardId) => {

  let met = 'PUT';
  if(document.getElementById(cardId.id).querySelector('.element__heart').classList.contains('element__heart_active')) {
    met = 'DELETE';
  }

  return fetch(`${config.baseUrl}/cards/likes/${cardId.id}`, {
    method: met,
    headers: config.headers,
  })
  .then(checkResponse)
};

export const promises = [getCards, getInfo, cardDel, sendProfile, sendNewCard, sendAvatar, sendLike];




