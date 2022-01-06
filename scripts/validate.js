


const showError = (form, input, errorMessage, errorClass, inputErrorClass) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideError = (form, input, errorClass, inputErrorClass) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

const hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((el) => !el.validity.valid);
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    console.log(hasInvalidInput(inputs))
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}

const checkIfInputValid = (form, input, { inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, errorClass, inputErrorClass);
    } else {
        hideError(form, input, errorClass, inputErrorClass);
    }
}

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkIfInputValid(form, input, rest);
            toggleButtonError(inputs, submitButton,inactiveButtonClass);
        });
    });
}

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setInputListeners(form, rest);
    });
}
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
});