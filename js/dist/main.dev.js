"use strict";

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
btnSub.addEventListener('click', divide);