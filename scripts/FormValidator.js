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

    _hasInvalidInput(inputs) {
        return Array.from(inputs).some((element) => !element.validity.valid); //??
    }
    
    _toggleButtonState() {
        const button = this._form.querySelector(this._submitButtonSelector);
        if (this._hasInvalidInput(this._inputs)) {
            button.classList.add(this._inactiveButtonClass);
            button.setAttribute('disabled', '')
            //button.disabled = true;
        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.removeAttribute('disabled', '')
            //button.disabled = false;
        }
    }
    
    _setInputListeners() {
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._toggleButtonState(this._inputs, this._submitButton, this._inactiveButtonClass);
                this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input); //аргументы правильно?
                this._toggleButtonState(this._inputs, this._submitButton, this._inactiveButtonClass);
            })
        })

    }

    _checkInputValidity(input) {
        // input.classList.toggle(this._inputErrorClass, this._errorClass, !input.validity.valid);
        // const errorContainer = this._form.querySelector(`#${input.id}-error`);
        // errorContainer.textContent = input.validationMessage;
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
}