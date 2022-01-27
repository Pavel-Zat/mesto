export default class Card {
    // принимает в конструктор её данные и селектор её template-элемента;
    constructor(data, cardSelector, renderOpenPopupImg) {
      this._cardSelector = cardSelector;
      this._name = data.name;
      this._image = data.link;
      this._renderOpenPopupImg = renderOpenPopupImg;
  }
  // содержит приватные методы, которые работают с разметкой, 
  // устанавливают слушателей событий;
	// содержит приватные методы для каждого обработчика;
	// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__list-item')
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard() {
      // Запишем разметку в приватное поле _element. 
      // Так у других элементов появится доступ к ней.
      this._element = this._getTemplate();
      // Добавим данные
      this._element.querySelector('.elements__item').alt = this._name;
      this._element.querySelector('.elements__item').src = this._image;
      this._element.querySelector('.elements__text').textContent = this._name;
      this._setEventListeners();
      // Вернём элемент наружу
      return this._element;

    }
    _setEventListeners() {
      this._element
          .querySelector('.elements__heart')
          .addEventListener('click', this._switchLike);
      this._element
          .querySelector('.elements__trash')
          .addEventListener('click', this._deleteCard);
      this._element
          .querySelector('.elements__item')
          .addEventListener('click', this._renderOpenPopupImg);
  }
  _switchLike = (evt) => {
      evt.target.classList.toggle('elements__heart_is-black');
  }
  _deleteCard = () => {
      this._element.remove();
      this._element = null;
  }
  

}
