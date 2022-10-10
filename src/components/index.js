import '../index.css';
import { enableValidation, closeButtonError } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import { popupTitle, popupImage, popupImg, cards, container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
import { createCard } from './card.js';

popupsClose.forEach((item) =>
  item.addEventListener('click', function(evt) {
    closePopup(evt.target.closest('.popup'));
  }
  ));

popupEdit.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  closeButtonError()
});

popupAddCard.addEventListener('click', function() {
  openPopup(popupCard);
  cardName.value = '';
  cardLink.value = '';
  closeButtonError()
});

formElementProfile.addEventListener('submit', saveProfilePopup);

formElementCard.addEventListener('submit', addCard);

enableValidation();


export function saveProfilePopup(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
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


export function openImg(evt) {
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
  openPopup(popupImg);
};

