const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupsClose = document.querySelectorAll('.popup__close');
const popupEdit = document.querySelector('.profile__edit');
const popupAddCard = document.querySelector('.profile__add');
const popupImg = document.querySelector('.popup__img');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');
const formElementProfile = document.querySelector('.popup__container_profile');
const formElementCard = document.querySelector('.popup__container_card');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardName = document.querySelector('.popup__namecard');
const cardLink = document.querySelector('.popup__link');
const container = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content;

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

function createCard(name, link) {
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
}

function renderCard(container, card) {
  container.prepend(card)
}

cards.forEach((item) =>
  renderCard(container, createCard(item.name, item.link))
);

function closePopup(element) {
  element.classList.remove('popup_opened')
}

function openPopup(element) {
  element.classList.add('popup_opened')
}

popupsClose.forEach((item) =>
  item.addEventListener('click', function(evt) {
    closePopup(evt.target.closest('.popup'));
  }
  ));

popupEdit.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  cardName.value = '';
  cardLink.value = ''
});

function saveProfilePopup(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
};

formElementProfile.addEventListener('submit', saveProfilePopup);

function addCard(evt) {
  evt.preventDefault();
  renderCard(container, createCard(cardName.value, cardLink.value))
  closePopup(popupCard)
};

formElementCard.addEventListener('submit', addCard);

function openImg(evt) {
  openPopup(popupImg);
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
}

function deleteCard(evt) {
  evt.target.closest('.element').remove()
}

function clickLike(evt) {
  evt.target.classList.toggle('element__heart_active')
}





