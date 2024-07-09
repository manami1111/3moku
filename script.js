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

// A.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2 === 1){
//         A.textContent = '〇'
//     } else {
//         A.textContent = '✖'
//     }
// });

// B.addEventListener('click', () => {
//     count++;
//     if (count%2 === 1){
//         B.textContent = '〇'
//     } else {
//         B.textContent = '✖'
//     }
// });

// C.addEventListener('click', () => {
//     count++;
//     if (count%2 === 1){
//         C.textContent = '〇'
//     } else {
//         C.textContent = '✖'
//     }
// });

// D.addEventListener('click', () => {
//     count++;
//     if (count%2 === 1){
//         D.textContent = '〇'
//     } else {
//         D.textContent = '✖'
//     }
// });

// これは配列が入る
const masu = document.querySelectorAll('.board div');
console.log(masu);


for (let i = 0; i < 9; i++){
    masu[i].addEventListener('click', () => {
        count++;
        if (count % 2 === 1){
            masu[i].textContent = '〇'
            masu[i].classList.toggle('maru');
        } else {
            masu[i].textContent = '✖'
            masu[i].classList.add('batu');
        }

        if (masu[0].textContent === '〇' &&
            masu[1].textContent === '〇' &&
            masu[2].textContent === '〇' 
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        } else if(
            masu[3].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[5].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }
        else if(
            masu[6].textContent === '〇' &&
            masu[7].textContent === '〇' &&
            masu[8].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }else if(
            masu[0].textContent === '〇' &&
            masu[3].textContent === '〇' &&
            masu[6].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }else if(
            masu[1].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[7].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }
        else if(
            masu[2].textContent === '〇' &&
            masu[5].textContent === '〇' &&
            masu[8].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }else if(
            masu[0].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[8].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }else if(
            masu[3].textContent === '〇' &&
            masu[4].textContent === '〇' &&
            masu[6].textContent === '〇'
        ){
            console.log(masu[0].textContent)
            console.log('〇の勝ち!')
        }

//         if (masu[3].textContent === '〇' &&
//             masu[4].textContent === '〇' &&
//             masu[5].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[6].textContent === '〇' &&
//             masu[7].textContent === '〇' &&
//             masu[8].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[0].textContent === '〇' &&
//             masu[3].textContent === '〇' &&
//             masu[6].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[1].textContent === '〇' &&
//             masu[4].textContent === '〇' &&
//             masu[7].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[2].textContent === '〇' &&
//             masu[5].textContent === '〇' &&
//             masu[8].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[0].textContent === '〇' &&
//             masu[4].textContent === '〇' &&
//             masu[8].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }

//         if (masu[2].textContent === '〇' &&
//             masu[4].textContent === '〇' &&
//             masu[6].textContent === '〇' 
//         ){
//             console.log('〇の勝ち!')
//         }
//     });
// }

// イベントの外は読み込んだ瞬間に実行される
// if (masu[0].textContent === '〇'){
//     console.log(masu[0].textContent)
//     console.log('〇の勝ち!')
// }