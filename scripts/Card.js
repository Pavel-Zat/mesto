class Card {
    // принимает в конструктор её данные и селектор её template-элемента;
    constructor(trash, item, text, heart) {
        this._selector = selector;
        this._trash = trash;
        this._item = item;
        this._text = text;
        this._heart = heart;

    }
    // содержит приватные методы, которые работают с разметкой, 
    // устанавливают слушателей событий;
	// содержит приватные методы для каждого обработчика;
	// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
    _getTemplate() {
      const cardElement = document
        //.querySelector(this._selector)
        .querySelector('.elements__list-item')
        .content
        .querySelector('.cards')
        .cloneNode(true);
  
      return cardElement;
    }

    
  
//    _handleOpenPopup() {
//      popupImage.src = this._image;
//      popupElement.classList.add('popup_is-opened');
    }
  
//    _handleClosePopup() {
 //     popupImage.src = '';
//      popupElement.classList.remove('popup_is-opened');
    }
  
//    _setEventListeners() {
//      this._element.addEventListener('click', () => {
//        this._handleOpenPopup();
//      });
  
//      popupCloseButton.addEventListener('click', () => {
 //       this._handleClosePopup();
 //     });
    }
  }
 export default Card; 

 //Для каждой карточки создайте экземпляр класса Card.