export const validation = {
  formInput: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_error',
};

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
    buttonElement.classList.add(validation.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validation.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, validation) => {
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


export const enableValidation = (validation) => {
  const formList = Array.from(document.querySelectorAll(validation.formInput));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validation);
  });
};

export function disableButton(formElement) {
  const button = formElement.querySelector(validation.submitButtonSelector);
  button.disabled = true;
  button.classList.add(validation.inactiveButtonClass);
};



