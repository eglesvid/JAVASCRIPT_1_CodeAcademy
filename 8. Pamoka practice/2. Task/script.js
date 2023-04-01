//? 1. Sukurti inputą kuris priima skaičių (temperatūra C)
//? 2. apačioj parodyti kokia tai būtų temperatūra F
//? 3. Formulė:  C x 1.8 + 32

const number = document.querySelector("input");
number.addEventListener("input", convertToF);

const text = document.querySelector("p");

function convertToF() {
  const temp = number.value;
  const result = temp * 1.8 + 32;
  text.textContent = result;
}
