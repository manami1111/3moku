const A = document.querySelector('#A');
const B = document.querySelector('#B');
const C = document.querySelector('#C');
const D = document.querySelector('#D');
const E = document.querySelector('#E');
const F = document.querySelector('#F');
const G = document.querySelector('#G');
const H = document.querySelector('#H');
const I = document.querySelector('#I');

let count = 0;

A.addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count%2 === 1){
        A.textContent = '〇'
    } else {
        A.textContent = '✖'
    }
});
