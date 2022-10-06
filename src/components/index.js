import '../index.css';
import { enableValidation, closeButtonError } from './validate.js';
import { closePopup, openPopup, saveProfilePopup } from './modal.js';
import { cards, container, formElementCard, profileTitle, profileSubtitle, popupProfile, cardName, cardLink, popupCard, popupsClose, popupEdit, popupAddCard, formElementProfile, nameInput, jobInput } from './variables.js';
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

// document.querySelector('body').addEventListener('click', function (evt) {
//   if (!evt.target.classList.contains('popup__container')) {
//     document.querySelectorAll('.popup').forEach(() => {
//       closePopup(evt.target);
//     })
//   }
// });

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




