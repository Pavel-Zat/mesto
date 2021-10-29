const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const profileElement = document.querySelector('.profile')
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  console.log('Open popup clicked');
}

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  formElement.querySelector('.popup__text_type_name').value;
  formElement.querySelector('.popup__text_type_job').value;
  nameInput.value = formElement.querySelector('.popup__text_type_name').value;
  jobInput.value = formElement.querySelector('.popup__text_type_job').value;

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  // console.log(nameInput.value);
  closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
