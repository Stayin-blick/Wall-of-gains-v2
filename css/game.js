let heads = 0;
let tails = 0;
let coin = document.getElementById('coin');
let flipCoin= document.getElementById('flip-button');
let result = document.getElementById('result');
let options = document.querySelectorAll('button');
let userChoice ='';




/* snake script */

function main (currentTime) {
    window.requestAnimationFrame(main);
    console.log (currentTime);
}
window.requestAnimationFrame(main)