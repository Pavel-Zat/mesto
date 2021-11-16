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



//функции открытия, закрытия и заполнения формы popup
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


//слушатели событий popup
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
//слушатели событий popupadd
popupAddOpenButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButtonElement.addEventListener('click', closePopupAdd);
//addFormElement.addEventListener('submit', formSubmitHandler);



//переменные для 
const cardsElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.cards_template');
const inputName = document.querySelector('.elements__text');
const inputLink = document.querySelector('.elements__item');


//Функция, которая принимает в качестве аргумента данные карточки...
function renderNewCard(element) {
  const cardElement = cardTemplate.content.cloneNode(true); // клонирует template
  // устанавливаем картинку и название в template...alt не забываем )
  const cardElementImg = cardElement.querySelector('.elements__item');
  cardElementImg.src = element.link;
  cardElement.querySelector('.elements__text').textContent = element.name;
  cardElementImg.alt = element.name;
  // 3 обработчика событий - лайк, удаление и открытие больной картинки

  //возвращаем готовую разметку (вкл. все данные и обработчики)
  return cardElement
  
}

function renderNewCards() {
  initialCards.forEach((element) => {
    renderCard(element);
  });
}

//Функция приинимает данные карточки и ссылку на контейнер, куда положить руз-т
//внутри себя создает разметку карточки, исп-уя ф-ию выше. и кладет в разметку
//
/// ф-ция добавления пользовательской карточки
function addNewCard() {
  const newCard = {
      name: inputName.value,
      link: inputLink.value,
  }
  renderCard(newCard);
}

///колбек самбита добавления карточек
function addCards(event){
  event.preventDefault();
  addNewCard();
  removePopupAddVisibility();
}


function renderCard(element) {
  const  cardNewElement = renderNewCard(element);
  cardsElements.prepend(cardNewElement);
}

renderNewCards();
//Нерабочий код, просто тренировка
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