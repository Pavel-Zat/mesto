export default class Popup {
    constructor(popupSelector) {
        this._container = document.querySelector(popupSelector);
        this.setEventListeners();
    }

    open() {
        this._popupSelector.add('popup_is-opened');
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupSelector.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        const esc = 'Escape';
        if (event.key === esc) {
            const openPopup = document.querySelector('.popup_is-opened');
            closePopup(openPopup);
        }
    }

    setEventListeners() {
        this._container.addEventListener('click', (event) => {
            if (event.target.classList.contains("popup_is-opened") ||
                event.target.classList.contains("popup__close")) {
                this.close();
            }
        })
    }
}