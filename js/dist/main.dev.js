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
btnColor.addEventListener('click', colorChanger);