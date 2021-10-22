// Проверяем, что подключили скрипт и он работает
//console.log('Привет, Мир!')

// Делаем выборку DOM элементов
///const popupOpenButtonElement = document.querySelector('.menu__open-popup')
const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
///const headerElement = document.querySelector('.header')
const profileElement = document.querySelector('.profile')

//console.log(popupOpenButtonElement, popupElement, popupCloseButtonElement)

/**
 * Функция, которая «переключает» состояние всплывающего окошка
 */
const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_is-opened')
}

const openPopup = function() {
  popupElement.classList.add('popup_is-opened')
  console.log('Open popup clicked')
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened')
}

/**
 * Функция, которая закрывает окошко по клику на затемненную область.
 */
const closePopupByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget)
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup()
}

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)

///headerElement.addEventListener('click', function() {
profileElement.addEventListener('click', function() {  

  console.log('Profile clicked')
})

// Как работают функции обратного вызова (на упрощенном примере)
const addEventListener = function(type, callback) {
  console.log(type)
  const event = {
    target: '',
    currentTarget: ''
  }
  callback(event)
}
console.log("Привет, Мир!");
//let popup = document.querySelector(".popup");
//let popupContainer = document.querySelector(".popup__container");
//let namesContainer = document.querySelector(".names-container");
//let addButton = document.querySelector(".popup__save_action_add");

// Находим форму в DOM
//let formElement = // Воспользуйтесь методом querySelector()
let formElement = document.querySelector(".popup__content");

// Находим поля формы в DOM

//let nameInput = // Воспользуйтесь инструментом .querySelector()
//let jobInput = // Воспользуйтесь инструментом .querySelector()
let nameInput = formElement.querySelector(".popup__text_type_name");
let jobInput = formElement.querySelector(".popup__text_type_job");

//console.log(document.querySelector(".popup__text_type_job").value);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  formElement.querySelector(".popup__text_type_name").value;
  formElement.querySelector(".popup__text_type_job").value;
 nameInput.value = formElement.querySelector(".popup__text_type_name").value;
 jobInput.value = formElement.querySelector(".popup__text_type_job").value;
  //renderAdded();
  //console.log(nameInput.value);
  //console.log(jobInput.value);
  // Выберите элементы, куда должны быть вставлены значения полей
let name = document.querySelector('.profile__info-title');
let job = document.querySelector('.profile__info-subtitle');
  // Вставьте новые значения с помощью textContent
name.textContent = nameInput.value;  
job.textContent = jobInput.value; 
  console.log(nameInput.value);
closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
