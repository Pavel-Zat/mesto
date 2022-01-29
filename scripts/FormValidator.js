export default class FormValidator {
    constructor (data, form) {
        this._form = form;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        
        // ***
        this._inputs = Array.from(this._form.querySelectorAll('.form__input'));
        this._errorText = Array.from(this._form.querySelectorAll('.form__error'));
    }

    _showInputError(input, errorMessage) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideInputError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _hasInvalidInput() {
        return this._inputs.some((element) => !element.validity.valid);
    }
    
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputs)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.setAttribute('disabled', '')
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled', '')
            this._submitButton.disabled = false;
        }
    }
    
    _setInputListeners() {
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._toggleButtonState(this._inputs, this._submitButton, this._inactiveButtonClass);
                this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            })
        })
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
        } else {
            this._hideInputError(input);
        }
    }

    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._setInputListeners();
    }
    removeError() {
        this._inputs.forEach((input) => {
            input.classList.remove(this._inputErrorClass);
        });
        this._errorText.forEach((input) => {
            input.textContent = '';
        })
    }
    disableSubmit() {
        this._toggleButtonState();
    }
}