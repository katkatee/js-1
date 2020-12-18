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

const btnPlus = document.querySelector('.card__btn--plus');
const btnMinus = document.querySelector('.card__btn--minus');
const btnColor = document.querySelector('.card__btn--color');
const text = document.querySelector('.card__text--lorem');

let i = 18;

const incrase = () =>  {
    i = i + 5;
    text.style.fontSize = i + 'px';
};

const decrease = () =>  {
    i = i - 5;
    text.style.fontSize = i + 'px';
};

const colorChanger = () =>  {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    text.style.color = "rgb(" + r + "," + g + "," + b + ")";
};

btnPlus.addEventListener('click', incrase);
btnMinus.addEventListener('click', decrease);
btnColor.addEventListener('click', colorChanger);

