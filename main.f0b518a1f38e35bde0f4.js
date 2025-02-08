/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/validator.js
function isValidCardNumber(number) {
  if (!number || !/^\d+$/.test(number)) {
    console.log(`Invalid input: ${number}`);
    return false;
  }
  const digits = number.split('').reverse().map(n => parseInt(n, 10));
  console.log(`Reversed digits: ${digits}`);
  const checksum = digits.reduce((sum, digit, index) => {
    if (index % 2 === 1) {
      let double = digit * 2;
      if (double > 9) double -= 9;
      return sum + double;
    }
    return sum + digit;
  }, 0);
  console.log(`Checksum: ${checksum}`);
  return checksum % 10 === 0;
}
;// ./src/js/card-type.js
function getCardType(number) {
  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6/,
    mir: /^220[0-4]/
  };
  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(number)) return type;
  }
  return 'unknown';
}
;// ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("card-number");
  const validateBtn = document.getElementById("validate-btn");
  const result = document.getElementById("result");
  const cardIcons = document.querySelectorAll(".card-icon");
  validateBtn.addEventListener("click", () => {
    const cardNumber = input.value.trim();
    if (!cardNumber) {
      result.textContent = "Please enter a card number";
      result.style.color = "red";
      return;
    }
    if (isValidCardNumber(cardNumber)) {
      const cardType = getCardType(cardNumber);
      result.textContent = `Valid card (${cardType})`;
      result.style.color = "green";
      cardIcons.forEach(icon => {
        if (icon.dataset.type === cardType) {
          icon.classList.add("active");
        } else {
          icon.classList.remove("active");
        }
      });
    } else {
      result.textContent = "Invalid card number";
      result.style.color = "red";
      cardIcons.forEach(icon => icon.classList.remove("active"));
    }
  });
});
;// ./src/index.js



// TODO: write your code in app.js
/******/ })()
;