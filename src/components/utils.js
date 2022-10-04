import { removeEsc, closeEsc } from './index.js'

export function closePopup(element) {
  element.classList.remove('popup_opened');
  removeEsc();
};

export function openPopup(element) {
  element.classList.add('popup_opened');
  closeEsc();
};
