export default class UserInfo {
    constructor({ userName, userJob}) {
        this._userName = userName;
        this._usrJob = userJob;
        this._nameSelector = document.querySelector('.profile-info__name');
        this._infoSelector = document.querySelector('.profile-info__description'); 
    }

    getUserInfo() {
        this._userData = {
            userName: this._userName,
            userJob: this._userJob
        };
        console.log(this.userData)
        return this.userData;
    }

    setUserInfo({ name, description}) {
        this._nameSelector.textContent = name;
        this._infoSelector.textContent = description;
    }
}

// const aboutUserClasss = new UserInfo({
//     userName: infoName.textContent,
//     userJob: description.textContent
// });

// спасибо, исправил, при создании экземпляра класса надо
// было просто указать ссылки на элементы, а текстконтент
// присваивать в самом методе, только так данные становятся
// динамичными и меняются