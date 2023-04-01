//? Sukurti inputą, kuris priimą skaičių
//? parašyti funkciją, kuri grąžina, ar
//? įvestas skaičius yra tarp 50 ir 99 (Inclusive)

const userNumberInput = document.querySelector("input");
userNumberInput.addEventListener("input", checkIfNumberIsBetween);
const paragraph = document.querySelector("p");

function checkIfNumberIsBetween() {
  const userNumber = userNumberInput.value;
  if (userNumber >= 50 && userNumber <= 99) {
    paragraph.textContent = userNumber + " Is between 50 and 99";
  } else {
    paragraph.textContent = userNumber + " Is not between 50 and 99";
  }
}
