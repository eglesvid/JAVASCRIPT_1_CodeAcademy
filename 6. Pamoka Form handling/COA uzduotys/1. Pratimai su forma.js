//? Sukurkite kino teatro kainos apskaičiavimo platformą.
//? Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių,
//? o JS apskaičiuoja kainą ir išmeta ją h1 elemente.
//? Standartinis bilietas – 6eu,
//? iki 16 metų – 50proc nuolaida,
//? 1/3 nuolaida vyresniems nei 60.
//? Variable turi būti aprašyti viršuj, kad būtų lengva keist.

const form = document.querySelector("form");
const ageInput = document.getElementById("userAge");
const priceDisplay = document.getElementById("price");

let radios = document.getElementById("convicted");
for (i = 0; i < radios.length; i++) {
  radios[i].onclick = function (e) {
    if (e.ctrlKey) {
      this.checked = false;
    }
  };
}

function getPrice(e) {
  e.preventDefault();
  const price = 6;
  const age = +ageInput.value;

  if (age >= 60) {
    priceDisplay.textContent = (1 / 3) * price.toFixed(2);
  } else if (age <= 16) {
    priceDisplay.textContent = (1 / 2) * price.toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}

form.addEventListener("submit", getPrice);
