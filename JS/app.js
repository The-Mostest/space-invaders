


const settingPopUp = () => {
    settingsPage.classList.toggle('popup')
    if (settingsPage.classList == 'popup') {
        settingsPage.classList.remove('popup')
    }
}






// Elemet Cache
const settingsPage = document.querySelector('#settingsPage')
const settingsBut = document.querySelector('#settingsButton')
const exitSet = document.querySelector('.exitSettings')



// Const



// Grid Creation





// Variables





// Event Listener

settingsBut.addEventListener('click', settingPopUp);
exitSet.addEventListener('click', settingPopUp);