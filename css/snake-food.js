import {onsnake, expandsnake} from "./snke-food"
import {randomGrifPosition} from './snake-grid'
let food ={x:0 ,y:0};
const expansion-rate = 1;

export function update () {
    if (onSnake(food)) {
        expandsnake(expansion-rate)
        food = getRandomFoodPosition()
    }
}   

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild (foodElement) 
}

function getRandomFoodPosition () {
    let nweFoodPosition
    while (newFoodPosition == nul || onsnake(newFoodPosition)) {
        newFoodPosition= randomGrifPosition ()
    }
    return newFoodPosition
}
