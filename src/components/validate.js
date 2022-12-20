export const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}_error`);
  formError.style.display = 'none';
  formError.textContent = '';
};

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

export const validation = {
  formInput: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_error',
  popupForm: '.popup__container'
};



const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
  const buttonElement = formElement.querySelector(validation.submitButtonSelector);
  buttonElement.disabled = true;
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


export const enableValidation = (formElement) => {
  const formList = Array.from(document.querySelectorAll(validation.popupForm));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

export function closeButtonError() {
  const button = document.querySelector(validation.submitButtonSelector);
  button.disabled = true;
  button.classList.add('popup__button_inactive');
};



