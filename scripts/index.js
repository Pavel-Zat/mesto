// Проверяем, что подключили скрипт и он работает
console.log('Привет, Мир!')

// Делаем выборку DOM элементов
///const popupOpenButtonElement = document.querySelector('.menu__open-popup')
const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
///const headerElement = document.querySelector('.header')
const profileElement = document.querySelector('.profile')

console.log(popupOpenButtonElement, popupElement, popupCloseButtonElement)

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
