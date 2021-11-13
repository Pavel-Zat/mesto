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




const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  // console.log('Open popup clicked');
}

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup()
}
//функции открытия и закрытия popupadd
const openPopupAdd = function () {
  popupAddElement.classList.add('popupadd_is-opened');
}
const closePopupAdd = function () {
  popupAddElement.classList.remove('popupadd_is-opened');
}


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
//слушатели событий popupadd
popupAddOpenButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButtonElement.addEventListener('click', closePopupAdd);
//addFormElement.addEventListener('submit', formSubmitHandler);


const elementBlock = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// initialCards.forEach((element) => {
//     renderCard(createCard(element.link, element.name));
// })

// function createCard(srcValue, titleValue) {
//     const cardElement = cardTemplate.cloneNode(true);
//     console.log(cardElement);
//     const cardImage = cardElement.querySelector('.elements__item');
//     initialCards.link = srcValue;
//     initialCards.name = titleValue;
//     cardElement.querySelector('.elements__text').textContent = titleValue;
//     cardElement.querySelector('.elements__heart').addEventListener('click', function (evt) {
//         evt.target.classList.toggle('elements__heart_is-black');
//     });
//     cardElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
//         const card = evt.target.closest('.elements__list-item');
//         card.remove();
//     });
//     cardImage.addEventListener('click', imagePopup);
//     return cardElement;
// }
// function renderCard(element) {
//     elementBlock.prepend(createCard());
// }

// function imagePopup(evt) {
//     const srcValue = evt.target.src;
//     const caption = evt.target.alt;
//     popupImage.querySelector('.popup__image').src = srcValue;
//     popupImage.querySelector('.popup__image').alt = caption;
//     popupImage.querySelector('.popup__caption').textContent = caption;
//     openPopup(popupImage);
// }