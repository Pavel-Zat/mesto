const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');

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

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


const elementsList = document.querySelector('.elements__list');
const cardsImg = document.querySelector('.elements__item');
const heartButton = document.querySelector('.elements__heart');
const cardsTemplate = document.querySelector('.cards_template');

// let editing = null;

function main() {
	initialCards.forEach((element) => {
		renderItem(element);
	})

	formButton.addEventListener('click', handleSubmit);
}

function renderItem(text) {
	//1. Создавать разметку

	const htmlElement = itemTemplate.content.cloneNode(true);

	//2. Заменять в разметке текст
	htmlElement.querySelector('.item__text').innerText = text;

	//2.5 Навесить события
	setListeners(htmlElement);

	//3. Вставлять разметку в наш dom
	list.appendChild(htmlElement);

}



// недоделанный первый вариант
// const imgs = document.querySelectorAll('.elements__item');

// const imgsArray = Array.from(imgs); // такой вызов вернёт полноценный массив 


// console.log('Hello World!');
// console.log(imgsArray);
// // console.log(imgsArray[0].src);

// const imgSrc = imgsArray.map(function (imgs) {
//   const imgLink = initialCards.map(function (element) {
//   return element.link;
//   });
//   return imgs.src = imgLink ;
// });
// console.log(imgSrc) ;

// const imgLink = initialCards.map(function (element) {
//   return element.link;
// });
// console.log(imgLink) ;

// imgSrc.forEach(function (imgs) {

  
//     imgs.src = imgLink;

//   });
