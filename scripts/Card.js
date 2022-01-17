// import { initialCards } from "./initialСards";
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

//export {initialCards};

export default class Card {
    // принимает в конструктор её данные и селектор её template-элемента;
    constructor(name, link, selector) {
        this._selector = selector;
        this._name = name;
        this._link = link;
    }
    // содержит приватные методы, которые работают с разметкой, 
    // устанавливают слушателей событий;
	// содержит приватные методы для каждого обработчика;
	// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
    _getTemplate() {
      const cardElement = document
        .querySelector(this._selector)
        .querySelector('.elements__list-item')
        .content
        .querySelector('.cards')
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard() {
      // Запишем разметку в приватное поле _element. 
      // Так у других элементов появится доступ к ней.
      this._element = this._getTemplate();
      // Добавим данные
      this._element.querySelector('.elements__item').src = this._link;
      this._element.querySelector('.elements__text').textContent = this._name;
      // Вернём элемент наружу
      return this._element;

    }
    
     
//    _handleOpenPopup() {
//      popupImage.src = this._image;
//      popupElement.classList.add('popup_is-opened');
//    }
  
//    _handleClosePopup() {
 //     popupImage.src = '';
//      popupElement.classList.remove('popup_is-opened');
//    }
  
//    _setEventListeners() {
//      this._element.addEventListener('click', () => {
//        this._handleOpenPopup();
//      });
  
//      popupCloseButton.addEventListener('click', () => {
 //       this._handleClosePopup();
 //     });
 //   }
}

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.link, item.name, item.selector);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements__list').append(cardElement);

});



//export {Card}; 

 //Для каждой карточки создайте экземпляр класса Card.