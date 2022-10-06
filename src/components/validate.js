import { formInput, formElement } from './variables.js';

const isValid = (formElement, formInput) => {
  if (formInput.validity.patternMismatch) {
  formInput.setCustomValidity(formInput.dataset.errorMessage);
} else {
  formInput.setCustomValidity('');
}

if (!formInput.validity.valid) {
  showInputError(formElement, formInput, formInput.validationMessage);
} else {
  hideInputError(formElement, formInput);
}
};

const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}_error`);
  formError.style.display = 'block';
  formError.textContent = errorMessage;
};

const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}_error`);

  formError.style.display = 'none';
  formError.textContent = '';
};


const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__button');
  buttonElement.disabled = true;
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};


