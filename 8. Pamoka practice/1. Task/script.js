//? TASK 1.
//? 1. sukurti 2 inputus kurie priima 2 skaičius
//? 2. sukurti 2 mygtukus “Padauginti” ir “Padalinti”
//? 3. paspaudus mygtuką turi atsirasti atsakymas

const firstNumber = document.querySelector("input[name=first]");
const secondNumber = document.querySelector("input[name=second]");
const paragraph = document.querySelector("p");

document.querySelector("#pirmas").addEventListener("click", multiButton);
document.querySelector("#antras").addEventListener("click", divButton);

function multiButton() {
  const firstValue = firstNumber.value;
  const secondValue = secondNumber.value;

  paragraph.textContent = firstValue * secondValue;
}

function divButton() {
  const firstValue = firstNumber.value;
  const secondValue = secondNumber.value;

  paragraph.textContent = firstValue / secondValue;
}
