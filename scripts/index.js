//import FormValidation from "./FormValidation.js";
//import { validationObj } from "./validate.js";
import Card from "./Card.js";
import { initialCards } from "./initialСards.js";


//переменные для popup
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');


// создаем переменные для popupadd
const popupAddElement = document.querySelector('.popupadd');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popupadd__close');
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');
const addFormElement = document.querySelector('.popupadd__content');
const popupAddSaveButtonElement = document.querySelector('.popupadd__save');
const inputName = document.querySelector('.popupadd__text_type_place');
const inputLink = document.querySelector('.popupadd__text_type_link');

//переменные для установки картинок и клонирования...
const cardsElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.cards_template');

// переменные для popupimg
const popupImgElement = document.querySelector('.popupimg');
const popupImage = document.querySelector('.popupimg__image');
const popupImgCloseButtonElement = popupImgElement.querySelector('.popupimg__close');
const popupImgOpenButtonElement = document.querySelector('.elements__item');
const popupImgText = document.querySelector('.popupimg__capture');

const submitButton = document.querySelector('.form__submit');



//функции открытия и закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  setPopupEventListener(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened')
  removePopupEventListener(popup);
}

//функция закрытия popup по клику на оверлей
function closePopupByClickOnOverlay(event) {
  const popups = event.target;
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(popups);
}

//функция закрытия popup по нажатию на кнопку Esc
function closePopupByEscape(event) {
  const esc = 'Escape';
  if (event.key === esc) {
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup);
  }
}

function setPopupEventListener(popup) {
  popup.addEventListener('click', closePopupByClickOnOverlay);
  document.addEventListener('keydown', closePopupByEscape);
}

function removePopupEventListener(popup) {
  popup.removeEventListener('click', closePopupByClickOnOverlay);
  document.removeEventListener('keydown', closePopupByEscape);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupElement)
}

// //Функция, которая принимает в качестве аргумента данные карточки...
// function renderNewCard(element) {
//   const cardElement = cardTemplate.content.cloneNode(true); // клонирует template
//   // устанавливаем картинку и название в template...alt не забываем )
//   const cardElementImg = cardElement.querySelector('.elements__item');
//   cardElementImg.src = element.link;
//   cardElement.querySelector('.elements__text').textContent = element.name;
//   cardElementImg.alt = element.name;
//   // 3 обработчика событий - лайк, удаление и открытие большой картинки
//   setCardListeners(cardElement);
//   //возвращаем готовую разметку (вкл. все данные и обработчики)
//   return cardElement
// }

function renderCard(element) {
  const card = new Card(element, '.cards_template', renderOpenPopupImg);
    const cardNewElement = card.generateCard();
    return cardNewElement;
}

function renderNewCards() {
  initialCards.forEach((element) => {
    const cardNewElement = renderCard(element);
    cardsElements.append(cardNewElement);
  });
}

//Функция приинимает данные карточки и ссылку на контейнер, куда положить руз-т
//внутри себя создает разметку карточки, исп-уя ф-ию выше. и кладет в разметку

function addNewCard() {
   const newCard = {
    name: inputName.value,
    link: inputLink.value,
   }
   const cardNewElement = renderCard(newCard);
   cardsElements.prepend(cardNewElement);
 }

function addCards(event) {
  event.preventDefault();
  addNewCard();
  closePopup(popupAddElement);
  disableSubmit();
}

// function setCardListeners(element) {
//   element.querySelector('.elements__heart').addEventListener('click', switchLike);
//   element.querySelector('.elements__trash').addEventListener('click', deleteCard);
//   element.querySelector('.elements__item').addEventListener('click', renderOpenPopupImg);
// }

// function switchLike(event) {
//   event.target.classList.toggle('elements__heart_is-black');
// }

// function deleteCard(event) {
//   event.target.closest('.elements__list-item').remove();
// }

function renderOpenPopupImg(event) {
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupImgText.textContent = event.target.alt;
  openPopup(popupImgElement);
}


function removeError() {
  const removedRedLine = Array.from(document.querySelectorAll('.form__input'));
  removedRedLine.forEach(redLine => {
      redLine.classList.remove('form__input_type_error');
  });
  const removedErrorText = Array.from(document.querySelectorAll('.form__error'));
  removedErrorText.forEach(spanText => {
      spanText.textContent = '';
  });
}

function disableSubmit () {
  const submitButton = popupAddElement.querySelector('.form__submit');
  submitButton.classList.add('form__submit_disabled');
  submitButton.setAttribute('disable', '');
}

//слушатели событий popup
popupOpenButtonElement.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupElement);
  removeError();
});
popupCloseButtonElement.addEventListener('click', () => {
  closePopup(popupElement);
});
formElement.addEventListener('submit', formSubmitHandler);
//слушатели событий popupadd
popupAddOpenButtonElement.addEventListener('click', () => {
  //inputName.value = '';
  //inputLink.value = '';
  addFormElement.reset(); //применили метод reset для очистки формы
  openPopup(popupAddElement);
  removeError();
});
popupAddCloseButtonElement.addEventListener('click', () => {
  closePopup(popupAddElement);
});
addFormElement.addEventListener('submit', addCards);
//слушатели событий popupimg
popupImgCloseButtonElement.addEventListener('click', () => {
  closePopup(popupImgElement);
});

renderNewCards();