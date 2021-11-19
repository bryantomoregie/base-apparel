/*
If email is not the correct format, outline of the input turns red,
and we get an error. Please provide valid email, with the error icon. 




If not, change style and add that icon
On focus, reset back to original 
*/

const sliderInput = document.querySelector(".slider--input");
const sliderButton = document.querySelector(".slider--icon-arrow");
const errorIcon = document.querySelector(".slider--error");
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

/*
    icon hidden, then shown
    change it red if false 
    onchange, turn back to normal
    onclick, we check and run it back

*/
