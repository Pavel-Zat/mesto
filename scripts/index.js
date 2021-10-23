const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const profileElement = document.querySelector('.profile')

const togglePopupVisibility = function () {
  popupElement.classList.toggle('popup_is-opened')
}

const openPopup = function () {
  popupElement.classList.add('popup_is-opened')
  console.log('Open popup clicked')
}

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened')
}

const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget)
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)


profileElement.addEventListener('click', function () {

  console.log('Profile clicked')
})

const addEventListener = function (type, callback) {
  console.log(type)
  const event = {
    target: '',
    currentTarget: ''
  }
  callback(event)
}
console.log("Привет, Мир!");

let formElement = document.querySelector(".popup__content");

let nameInput = formElement.querySelector(".popup__text_type_name");
let jobInput = formElement.querySelector(".popup__text_type_job");

function formSubmitHandler(evt) {
  evt.preventDefault();

  formElement.querySelector(".popup__text_type_name").value;
  formElement.querySelector(".popup__text_type_job").value;
  nameInput.value = formElement.querySelector(".popup__text_type_name").value;
  jobInput.value = formElement.querySelector(".popup__text_type_job").value;

  let name = document.querySelector('.profile__info-title');
  let job = document.querySelector('.profile__info-subtitle');

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  console.log(nameInput.value);
  closePopup()
}
formElement.addEventListener('submit', formSubmitHandler);


const heartBlack = document.querySelector('.elements__heart_is-black');
const heartBlacks = document.querySelectorAll('.elements__heart_is-black');
console.log(heartBlacks);

const heart = document.querySelector('.elements__heart');
const hearts = document.querySelectorAll('.elements__heart');
console.log(hearts);


Array.from(document.querySelectorAll('.elements__heart')).forEach(element => {
  element.addEventListener('click', function () {
    const changeHeart = this.classList.toggle('elements__heart_is-black');
  });
});