const btnMul = document.querySelector('.card__btn--mul');
const btnSub = document.querySelector('.card__btn--sub');
const textOriginal = document.querySelector('.card__text--mul');
const textScore = document.querySelector('.card__text--sub');

let $score;

const add = (a, b) => {
    $score = a+b;
    textOriginal.innerHTML = $score;
};

add(2,6);

const multiply = () => {
    const newScore = $score * 2;
    textScore.innerHTML = newScore;
}; 

const divide = () => {
    let newScore = $score / 2;
    textScore.innerHTML = newScore;
}; 

btnMul.addEventListener('click', multiply);
btnSub.addEventListener('click', divide);