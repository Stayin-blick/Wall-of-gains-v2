let heads = 0;
let tails = 0;
let coin = document.getElementById('coin');
let flipCoin= document.getElementById('flip-button');
let result = document.getElementById('result');
let options = document.querySelectorAll('button');
let userChoice ='';




/* snake script */

import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js'

let lastRenderTime = 0 
const gameBoard = document.getElementById('gameBoard')

function main (currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 2 / snakeSpeed) return 
   
    
    lastRenderTime =  currentTime;

    update ()
    draw ()
}
window.requestAnimationFrame(main)

function update () {
    updateSnake()
}

function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
}