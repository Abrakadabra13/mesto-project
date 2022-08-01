const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup__card');
const popupClose = document.querySelectorAll('.popup__close');
const popupEdit = document.querySelector('.profile__edit');
const popupAddCard = document.querySelector('.profile__add');
const formElement = document.querySelectorAll('.popup__container');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elements = Array.from(document.querySelectorAll('.element'));
const popupText = document.querySelectorAll('.popup__text');
const popupTextCard = document.querySelectorAll('.popup__text_card');
const cardName = document.querySelector('.popup__namecard');
const cardLink = document.querySelector('.popup__link');
const like = document.querySelectorAll('.element__heart');
const del = document.querySelectorAll('.element__delete');
const elementImg = document.querySelectorAll('.element__img');
const elementTitle = document.querySelector('.element__title');
const popupImg = document.querySelector('.popup__img');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title')

const initialCards = [
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.png'
  },
  {
    name: 'Домбай',
    link: './images/dombaj.png'
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

function closePopup(el) {
 el.classList.remove('popup_opened')
}

function openPopup(el) {
  el.classList.add('popup_opened')
}

popupClose.forEach((item) =>
  item.addEventListener('click', (evt) =>
    closePopup(evt.target.closest('.popup'))
  ));

popupEdit.addEventListener('click', function() {
  openPopup(popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

popupText[0].addEventListener('click', function() {
  popupText[0].value = '';
});

popupText[1].addEventListener('click', function() {
  popupText[1].value = '';
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  cardName.value = 'Название';
  cardLink.value = 'Ссылка на картинку'
});

popupTextCard[0].addEventListener('click', function() {
  popupTextCard[0].value = '';
});

popupTextCard[1].addEventListener('click', function() {
  popupTextCard[1].value = '';
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popup)
};

formElement[0].addEventListener('submit', formSubmitHandler);

function createCard() {
  const elementCopy = elements[0].cloneNode(true);
  const elTitle = elementCopy.querySelector('.element__title');
  elTitle.textContent = cardName.value;
  const elLink = elementCopy.querySelector('.element__img');
  elLink.src = cardLink.value;
  elLink.alt = cardName.value;
  const el = document.querySelector('.elements');
  const heart = elementCopy.querySelector('.element__heart');
  heart.addEventListener('click', likeClick);
  heart.classList.remove('element__heart_active');
  el.prepend(elementCopy);
  const de = elementCopy.querySelector('.element__delete');
  de.addEventListener('click', delEl);
  elementCopy.querySelector('.element__img').addEventListener('click', imgOpen);
};

function addCard(evt) {
  evt.preventDefault();
  createCard();
  closePopup(popupCard)
};

formElement[1].addEventListener('submit', addCard);

function likeClick(evt) {
  this.classList.toggle('element__heart_active')
}

like.forEach((button) => {
  button.addEventListener('click', likeClick)
});

function delEl(evt) {
  evt.target.parentElement.remove()
}

del.forEach((button) => {
  button.addEventListener('click', delEl)
});

function imgOpen(evt) {
  openPopup(popupImg);
  popupImage.src = this.src;
  popupImage.alt = this.alt;
  popupTitle.textContent = this.alt;
}

elementImg.forEach((img) => {
  img.addEventListener('click', imgOpen)
});








