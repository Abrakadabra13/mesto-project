//Токен: 54af0da1-f831-4414-9d43-2e686c2dcadd
//Идентификатор группы: plus-cohort-15


function getCards() {
  fetch('https://nomoreparties.co/v1/plus-cohort-15/cards', {
  headers: {
    authorization: '54af0da1-f831-4414-9d43-2e686c2dcadd'
  }
})
  .then(res => res.json())
  .then((cards) => {
    cards.forEach((card) => {
      renderCard(container, createCard(card.name, card.link))
    })
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
}

getCards();


// function createPost(newPost) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // нужно указать метод запроса
//     // тело запроса
//     body: JSON.stringify({
//       title: newPost.title,
//       body: newPost.body
//     }),
//     // и заголовки
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8'
//     }
//   })
//    .then(res => res.json())
//   .then((post) => {
//  console.log(post)
// })
// }

export function getProfile(newProfile) {
  fetch('https://nomoreparties.co/v1/plus-cohort-15/users/me', {
    method: 'PATCH ',
  headers: {
    authorization: '54af0da1-f831-4414-9d43-2e686c2dcadd',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify({
    name: newProfile.name,
    about: newProfile.about
  })
})
  .then(res => res.json())
  .then((profile) => {
    profile.name = profileTitle.textContent;
    profile.about = profileSubtitle.textContent;
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })
}
getProfile()


// export function saveProfilePopup(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = jobInput.value;
//   closePopup(popupProfile)
// };



