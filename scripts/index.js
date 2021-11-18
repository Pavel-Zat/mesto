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
const popupImgCloseButtonElement = popupAddElement.querySelector('.popupimg__close');
const popupImgOpenButtonElement = document.querySelector('.elements__item');
const popupImgText = document.querySelector('.popupimg__capture');



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
// моя верхняя выполняет это const savePopup = function(event){
//  event.preventDefault();
//  profileElementFirstname.textContent = popupIdName.value;
//  profileElementText.textContent = popupIdText.value;
//  closesPopup(popupElementProfile);
//};
//????function removePopupClick(evt) {
//  const openidPopup = evt.target.closest('.popup_is-opened');
//  closesPopup(openidPopup);
//};

//функции открытия и закрытия popupadd
const openPopupAdd = function () {
  popupAddElement.classList.add('popupadd_is-opened');
}
const closePopupAdd = function () {
  popupAddElement.classList.remove('popupadd_is-opened');
}


//Функция, которая принимает в качестве аргумента данные карточки...
function renderNewCard(element) {
  const cardElement = cardTemplate.content.cloneNode(true); // клонирует template
  // устанавливаем картинку и название в template...alt не забываем )
  const cardElementImg = cardElement.querySelector('.elements__item');
  cardElementImg.src = element.link;
  cardElement.querySelector('.elements__text').textContent = element.name;
  cardElementImg.alt = element.name;
  // 3 обработчика событий - лайк, удаление и открытие большой картинки
  setCardListeners(cardElement);
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
  removePopupAddVisibility(popupImgElement);
}


function renderCard(element) {
  const  cardNewElement = renderNewCard(element);
  cardsElements.prepend(cardNewElement);
}

function setCardListeners(element) {
  element.querySelector('.elements__heart').addEventListener('click', switchLike);
  element.querySelector('.elements__trash').addEventListener('click', deleteCard);
  element.querySelector('.elements__item').addEventListener('click', renderOpenPopupImg);
}

function switchLike(event) {
  event.target.classList.toggle('elements__heart_is-black');
}

function deleteCard(event) {
  event.target.closest('.elements__list-item').remove();
}

function renderOpenPopupImg (event){
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupImgText.textContent = event.target.alt;
  openPopup(popupImgElement);
}

//слушатели событий popup
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
//слушатели событий popupadd
popupAddOpenButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButtonElement.addEventListener('click', closePopupAdd);
popupImgElement.addEventListener('submit', addCards);


renderNewCards();