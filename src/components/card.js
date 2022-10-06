import { openImg } from './modal.js';
import { closePopup } from './utils.js';
import { cardName, cardLink, container, cardTemplate, popupCard } from './variables.js';

const elbrus = new URL('../images/elbrus.jpg', import.meta.url);
const dombaj = new URL('../images/dombaj.jpg', import.meta.url);
const baltiysk = new URL('../images/baltiysk.jpg', import.meta.url);
const altaj = new URL('../images/altaj.jpg', import.meta.url);
const kareliya = new URL('../images/kareliya.jpg', import.meta.url);
const karachaevо = new URL('../images/karachaevo-cherkes.jpg', import.meta.url);

const cards = [
  { name: 'Гора Эльбрус', link: elbrus },
  { name: 'Домбай', link: dombaj },
  { name: 'Балтийск', link: baltiysk },
  { name: 'Алтай', link: altaj },
  { name: 'Карелия', link: kareliya },
  { name: 'Карачаево-Черкессия', link: karachaevо },
];

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

function renderCard(container, card) {
  container.prepend(card)
};

cards.forEach((item) =>
  renderCard(container, createCard(item.name, item.link))
);

export function addCard(evt) {
  evt.preventDefault();
  renderCard(container, createCard(cardName.value, cardLink.value));
  closePopup(popupCard);
};

function deleteCard(evt) {
  evt.target.closest('.element').remove()
};

function clickLike(evt) {
  evt.target.classList.toggle('element__heart_active')
};



