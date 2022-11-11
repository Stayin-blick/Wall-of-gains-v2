const grid-size = 21;

export function RandomGridPosition () {
    return {
        x: Math.floor(Math.random() * grid-size) + 1,
        y: Math.floor(Math.random() * grid-size) + 1
    }
}

export function outsideGrid(position) {
    position.x < 1 || position.x > grid-size ||
    position.y < 1 || position.x > grid-size ||
}