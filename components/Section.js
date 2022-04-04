export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = containerSelector; //DOM-элемент, найденный 
  }

  renderItems() { // перебирает массив данных _renderedItems. Вызывает
    //this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    })
  }

  // clear() { // метод удаляет всё содержимое поля _container
  //   this._container.innerHTML = '';
  // }

  addItem(element) { //принимает параметр element и вставляет его
    this._container.prepend(element);
  }

}

// function createCard(data) {
//   //функция создания карточки
//   const card = new Card(data, '.template', handleCardClick);
//   return card;
// };

// const cardList = new Section ({
//   items: initialCards,
//   renderer: (data) => {
//     const ticket = createCard(data);
//     const cardElement = ticket.getElement();
//     cardList.addItem(cardElement);
//   }
// },
// cardContainer
// );

// подскажи, метод renderItems у  экземпляра класса
// Section не забыл вызвать? именно он рендерит изначальный массив