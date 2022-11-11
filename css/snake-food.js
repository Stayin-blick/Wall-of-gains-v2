import {onSnake, expandSnake} from "./snake.js"
import {randomGridPosition} from "./snake-grid.js"
let food ={x:0 ,y:0};
const EXPANSION_RATE = 1;

export function update () {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
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
    let newFoodPosition
    while (newFoodPosition == null || onsnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
