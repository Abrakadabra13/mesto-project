import { profileTitle, profileSubtitle, popupTitle, popupImage, popupImg, popupProfile, nameInput, jobInput } from './variables.js';


export function openPopup(element) {
  document.querySelectorAll('.popup__text_error').forEach((item) => {
    item.style.display = 'none';
  })
  document.addEventListener('keydown', closeEsc(element));
  element.classList.add('popup_opened');
};

export function closePopup(element) {
  document.removeEventListener('keydown', closeEsc(element));
  element.classList.remove('popup_opened');
};

export function closeEsc () {
  document.querySelector('body').addEventListener('keydown', function (evt) {
    if(evt.key === 'Escape') {
      const popupOpen = document.querySelector('.popup_opened');
      closePopup(popupOpen)
      }
    })
    };

document.querySelector('body').addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('popup__container')) {
    document.querySelectorAll('.popup').forEach(() => {
      closePopup(evt.target);
    })
  }
});


export function saveProfilePopup(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
};

export function openImg(evt) {
  popupImage.src = evt.target.src;
  popupTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
  openPopup(popupImg);
};

