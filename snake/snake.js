import { getInputDirection } from "./snake-input.js";
/*snake defaults
speed
starting point */
export const snakeSpeed = 5; 
const snakeBody = [{ x: 11, y: 11}]
let newSegments = 0

/*snake movement - 
take the position of a segment and the segment after it becomes the new position
2nd last segement and last segement will become equal to eachother
snake head moves due to input direction*/
export function update () {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody [i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

/*create snake body on gameboard*/
export function draw(gameBoard) {
     snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
     })
    }
/*expanded snake after food*/
export function expandSnake(amount) {
    newSegments += amount
}
/*checks snakes position and segment position*/
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some ((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0] 
}

export function snakeIntersection () {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

/*generated body*/
function addSegments () {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length -1]})
        }
    newSegments = 0
}