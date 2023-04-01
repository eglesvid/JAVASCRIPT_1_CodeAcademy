const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const output = document.getElementById("output");
const sumButton = document.getElementById("sumButton");
const subButton = document.getElementById("subButton");
const divButton = document.getElementById("divButton");
const mulButton = document.getElementById("mulButton");
const modButton = document.getElementById("modButton");
const clearButton = document.getElementById("clearButton");

sumButton.addEventListener("click", calculate);
subButton.addEventListener("click", calculate);
divButton.addEventListener("click", calculate);
mulButton.addEventListener("click", calculate);
modButton.addEventListener("click", calculate);

function calculate(e) {
  const buttonId = e.target.id;

  switch (buttonId) {
    case "sumButton":
      output.textContent = +firstInput.value + +secondInput.value;
      break;

    case "subButton":
      output.textContent = +firstInput.value - +secondInput.value;
      break;
    case "divButton":
      output.textContent = (+firstInput.value / +secondInput.value).toFixed(2);
      break;
    case "mulButton":
      output.textContent = +firstInput.value * +secondInput.value;
      break;
    case "modButton":
      output.textContent = +firstInput.value % +secondInput.value;
      break;
  }
}

function clearInputs() {
  if (firstInput.value != "") {
    firstInput.value = "";
  }
  if (secondInput.value != "") {
    secondInput.value = "";
  }
  output.textContent = "";
}
