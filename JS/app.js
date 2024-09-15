


// Elemet Cache
const settingsPage = document.querySelector('#settingsPage')
const settingsButEl = document.querySelectorAll('.settingsBut') 
const exitSet = document.querySelector('.exitSettings')
const gameBut = document.querySelector('#gameButton')
const gamePage = document.querySelector('#gamepage')
const homeButtonEl = document.querySelector('.homeButton')
const grid = document.querySelector('.grid')

console.dir(settingsButEl)

// Const



const cellStore = []


// Grid Creation

const width = 57;
const height = 41;
let totalCells = width * height


for (i = 0; i < totalCells; i++) {
    const cellEl = document.createElement('div')
    cellEl.id = i
    // cellEl.innerText = i
    cellEl.classList.add('cell')
    cellEl.style.height = `${100 / height}%`
    cellEl.style.width = `${100 / width}%`
    cellStore.push(cellEl)
    grid.appendChild(cellEl);
}



// Variables







//  Functions
const settingPopUp = () => {
    settingsPage.classList.toggle('popup')
    if (settingsPage.classList == 'popup') {
        settingsPage.classList.remove('popup')
    }
}

const startGame = () => {
    gamePage.classList.toggle('popup')
}

const homeBut = () => {
    settingsPage.classList.toggle('popup')
    gamePage.classList.remove('popup');

}



// Event Listener
settingsButEl.forEach((setbut1) => {
    setbut1.addEventListener('click', settingPopUp);
})

exitSet.addEventListener('click', settingPopUp);
gameBut.addEventListener('click', startGame);
homeButtonEl.addEventListener('click', homeBut);
