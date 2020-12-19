"use strict";

// projekt#1
var btnMul = document.querySelector('.card__btn--mul');
var btnSub = document.querySelector('.card__btn--sub');
var textOriginal = document.querySelector('.card__text--mul');
var textScore = document.querySelector('.card__text--sub');
var $score;

var add = function add(a, b) {
  $score = a + b;
  textOriginal.innerHTML = $score;
};

add(2, 6);

var multiply = function multiply() {
  var newScore = $score * 2;
  textScore.innerHTML = newScore;
};

var divide = function divide() {
  var newScore = $score / 2;
  textScore.innerHTML = newScore;
};

btnMul.addEventListener('click', multiply);
btnSub.addEventListener('click', divide); //priject#2

var btnPlus = document.querySelector('.card__btn--plus');
var btnMinus = document.querySelector('.card__btn--minus');
var btnColor = document.querySelector('.card__btn--color');
var text = document.querySelector('.card__text--lorem');
var i = 18;

var incrase = function incrase() {
  i = i + 5;
  text.style.fontSize = i + 'px';
};

var decrease = function decrease() {
  i = i - 5;
  text.style.fontSize = i + 'px';
};

var colorChanger = function colorChanger() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  text.style.color = "rgb(" + r + "," + g + "," + b + ")";
};

btnPlus.addEventListener('click', incrase);
btnMinus.addEventListener('click', decrease);
btnColor.addEventListener('click', colorChanger); //project#3

var password = document.querySelector('.card__input--pass');
var result = document.querySelector('.card__text--result');
var letters = /[a-z]/i;
var numbers = /[0-9]/;
var special = /[!@#$%^&*()]/;
var minValue = 10;

var checkPassword = function checkPassword() {
  if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
    result.innerHTML = "Masz super silne hasło!";
  } else if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)) {
    result.innerHTML = "Masz silne hasło!";
  } else {
    result.innerHTML = "Za krótkie hasło!";
  }
};

password.addEventListener('keyup', function () {
  if (password.value != '') {
    checkPassword();
  } else {
    result.innerHTML = "Nie podałeś hasła!";
  }

  ;
}); //project#4

var spanC = document.querySelector('.card__text--cel');
var spanF = document.querySelector('.card__text--fah');
var btnConvert = document.querySelector('.card__btn--convert');
var btnReset = document.querySelector('.card__btn--reset');
var btnChange = document.querySelector('.card__btn--change');
var temp = document.querySelector('.card__input--temp');
var resultTemp = document.querySelector('.card__text--resultTemp');
var cel;
var fah;

var reset = function reset() {
  resultTemp.innerHTML = " ";
  temp.value = "";
};

var swap = function swap() {
  if (spanC.innerText === "°F") {
    spanC.innerText = "°C";
    spanF.innerText = "°F";
  } else {
    spanC.innerText = "°F";
    spanF.innerText = "°C";
  }
};

var convert = function convert() {
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
};

btnReset.addEventListener('click', reset);
btnChange.addEventListener('click', swap);
btnConvert.addEventListener('click', convert);