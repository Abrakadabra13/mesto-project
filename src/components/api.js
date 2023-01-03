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

function request(url, options) {
  return fetch(url, options).then(checkResponse)
};

export const getCards = () => {
  return request(`${config.baseUrl}/cards`, {
  headers: config.headers
  })
};


export const getInfo = () => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
};

export const sendProfile = (name, about) => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
};

export const sendNewCard = (name, link) => {
  return request(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
};


export const sendAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      avatar: avatar,
    })
  })
};

export const cardDel = (cardId) => {
  return request(`${config.baseUrl}/cards/${cardId.id}`, {
    method: 'DELETE',
    headers: config.headers
  })
};


export const sendLike = (cardId, isLiked) => {
  let met = 'PUT';
  if (isLiked) {
    met = 'DELETE';
  }

  return request(`${config.baseUrl}/cards/likes/${cardId.id}`, {
    method: met,
    headers: config.headers,
  })
};
