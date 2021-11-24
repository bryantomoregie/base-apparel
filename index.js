const sliderInput = document.querySelector(".slider--input");
const sliderButton = document.querySelector(".slider--icon-arrow");
const errorIcon = document.querySelector(".slider--error");
let hero = document.querySelector(".image__hero");
let heroHidden = document.querySelector(".image__hero--desktop");
const main = document.querySelector(".main");
let input = sliderInput.value;

sliderInput.addEventListener("keydown", () => {
  errorIcon.style.display = "none";
  sliderInput.classList.remove("error");
  input = sliderInput.value;
});

function getValue() {
  var id = document.getElementsByTagName("input")[0];
  alert(id.value);
}

function emailIsValid(email) {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    errorIcon.style.display = "inline";
    sliderInput.classList.add("error");
  }
}

sliderButton.addEventListener("click", () => emailIsValid(input));

/**
 
 */
