




function checkInputValidity(formElement, inputElement) { //функция проверки валидности инпута
    if (!inputElement.validity.valid) {
      //showInputError(formElement, inputElement, inputElement.validationMessage);
      console.log('Инпут невалидный');
    } else {
      //hideInputError(formElement, inputElement);
      console.log('Инпут валидный');
    }
  };



function setInputListeners(formElement, {inputSelector}) {
    const inputs = Array.from(formElement.querySelectorAll(inputSelector)); // выбираем инпуты в форме

    inputs.forEach((input) => { //проходим по инпутам и добавляем событие 'input'
        input.addEventListener('input', () => {
                                //здесь проверяем валидность ввода + поведение кнопки
            checkInputValidity(formElement, input);
        })
    })
}


function enableValidation({formSelector, ...rest}) { 
    // собрать все формы для валидации
    const forms = document.querySelectorAll(formSelector);
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault(); // отключили стандартное поведение для формы
        });
        setInputListeners(formElement, rest);
    });
}


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});