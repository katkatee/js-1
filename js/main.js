// projekt#1
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

//priject#2

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

//project#3


const password = document.querySelector('.card__input--pass');
const result = document.querySelector('.card__text--result');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const checkPassword = () => {
    if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
        result.innerHTML = "Masz super silne hasło!";
    } else if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)) {
        result.innerHTML = "Masz silne hasło!";
    } else {
        result.innerHTML = "Za krótkie hasło!";
    }
}

password.addEventListener('keyup', function () {
    if (password.value != '') {
        checkPassword();
    } else {
        result.innerHTML = "Nie podałeś hasła!";
    };
});

//project#4
const spanC = document.querySelector('.card__text--cel');
const spanF = document.querySelector('.card__text--fah');
const btnConvert = document.querySelector('.card__btn--convert');
const btnReset = document.querySelector('.card__btn--reset');
const btnChange = document.querySelector('.card__btn--change');
const temp = document.querySelector('.card__input--temp');
const resultTemp = document.querySelector('.card__text--resultTemp');

let cel;
let fah;

const reset = () => {
    resultTemp.innerHTML = " ";
    temp.value = "";
    
};

const swap = () => {
    if (spanC.innerText === "°F") {
        spanC.innerText = "°C"
        spanF.innerText = "°F"
    } else {
        spanC.innerText = "°F"
        spanF.innerText = "°C"
    }
};

const convert = () => {
    if (temp.value != '') {
        if (spanC.innerText === "°C") {
            cel = temp.value;
            fah = cel * 1.8 + 32;
            resultTemp.innerHTML = cel + "°C to " + fah + "°F.";
        } else {
            fah = temp.value;
            cel = (fah - 32) / 1.8;
            resultTemp.innerHTML = fah + "°F to " + cel.toFixed(1) + "°C.";
        }
    } else {
        resultTemp.innerText = "Wprowadź liczbę stopni do przekonwertowania.";

    }
}

btnReset.addEventListener('click', reset);
btnChange.addEventListener('click', swap);
btnConvert.addEventListener('click', convert);