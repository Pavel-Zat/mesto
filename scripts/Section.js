export default class Section {

    constructor( { items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer; 
    
        this._container = document.querySelector(containerSelector); //DOM-элемент, найденный 
  }

  renderItems() { // перебирает массив данных _renderedItems. Вызывает
    this.clear();

    this._renderedItems.forEach(item => {
        this._renderer(item);
    })
  }

  clear() { // метод удаляет всё содержимое поля _container
    this._container.innerHTML = '';
  }

  setItem(element) { //принимает параметр element и вставляет его
    this._container.append(element);
  }
}
