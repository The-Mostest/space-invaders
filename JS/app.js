


// Elemet Cache
const settingsPage = document.querySelector('#settingsPage')
const settingsButEl = document.querySelectorAll('.settingsBut') 
const exitSet = document.querySelector('.exitSettings')
const gameBut = document.querySelector('#gameButton')
const gamePage = document.querySelector('#gamepage')
const homeButtonEl = document.querySelector('.homeButton')
const grid = document.querySelector('.grid')




// Const





const cellStore = []
let enemyPosition = [25, 26, 27, 28, 29, 30, 31, 32, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 250, 251, 252,  255, 256, 257, 258,  261, 262, 263, 306, 307, 308, 309, 312, 313, 314, 315,  318, 319, 320, 321, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 420, 421, 422, 423, 424, 425, 426,429, 430, 431, 432, 433, 434, 435, 477, 478, 479, 480, 481, 482, 483, 486, 487, 488, 489, 490, 491, 492, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 651,652,655,656,659,660,708,709,712,713,716,717,766,765,769,770,773,774]

let playerPosition = [2191, 2193, 2195, 2249, 2250, 2251, 2305, 2309]



// -------------------------- Grid Creation START ------------------------------

const width = 57;
const height = 41;
let totalCells = width * height


for (i = 0; i < totalCells; i++) {
    const cellEl = document.createElement('div')
    cellEl.id = i
    cellEl.innerText = i
    cellEl.style.fontSize = '10px'
    cellEl.classList.add('cell')
    cellEl.style.height = `${100 / height}%`
    cellEl.style.width = `${100 / width}%`

   if(enemyPosition.indexOf(i) !== -1) {
    cellEl.classList.add('enemy')
   }
   if(playerPosition.indexOf(i) !== -1) {
    cellEl.classList.add('player')
   }

    cellStore.push(cellEl)
    grid.appendChild(cellEl);
}





// -------------------------- Grid Creation END ------------------------------







// Variables







//  Functions

const settingPopUp = () => {
    settingsPage.classList.toggle('popup')
    if (settingsPage.classList == 'popup') {
        settingsPage.classList.remove('popup')
    }
}



const homeBut = () => {
    settingsPage.classList.toggle('popup')
    gamePage.classList.remove('popup');

}



const removePlayerPosition = () => {
    playerPosition.forEach((position) => {
        cellStore[position].classList.remove('player')
})
}


const addPlayerPosition = () => {
    playerPosition.forEach((position) => {
        cellStore[position].classList.add('player')
})
}

const playerMovement = (evt) => {

    removePlayerPosition(); 
    
    const hasHitWall = playerPosition.some(position => evt.code === 'ArrowRight' && position % width === width -1)


    if (evt.code === 'ArrowRight' && playerPosition[i] % width !== width -1) {
                playerPosition[i]++
            } else { hasHitWall

    }if (evt.code === 'ArrowLeft' && playerPosition[i] % width !== 0){
                playerPosition[i]--
            }

    
    addPlayerPosition();

}


console.log(playerPosition)










// const removeEnemyPos = () => {
//     enemyPosition.forEach((position) => {
//         cellStore[position].classList.remove('enemy')
//     })
// }


// const addEnemyPos = () => {
//     enemyPosition.forEach((position) => {
//         cellStore[position].classList.add('enemy')
//     })
// }


// const enemyMovement = () => {
//     if(cellStore ==='') {
//         enemyPosition.id ++
//     }
// }









const startGame = () => {
    gamePage.classList.toggle('popup')
}





// Event Listener
settingsButEl.forEach((setbut1) => {
    setbut1.addEventListener('click', settingPopUp);
})

exitSet.addEventListener('click', settingPopUp);
gameBut.addEventListener('click', startGame,);
homeButtonEl.addEventListener('click', homeBut);

document.addEventListener('keydown', playerMovement)







// const removePlayerPosition = () => {
//     playerPosition.forEach((position) => {
//         cellStore[position].classList.remove('player')
// })
// }


// const addPlayerPosition = () => {
//     playerPosition.forEach((position) => {
//         cellStore[position].classList.add('player')
// })
// }

// const playerMovement = (evt) => {

//     removePlayerPosition(); 

//   for( let i = 0; i < playerPosition.length; i++)
//     { if (evt.code === 'ArrowRight' && playerPosition[i] % width !== width -1) {
//         playerPosition[i]++
//     } else if (evt.code === 'ArrowLeft' && playerPosition[i] % width !== 0){
//         playerPosition[i]--
//     }}
    
//     addPlayerPosition();
