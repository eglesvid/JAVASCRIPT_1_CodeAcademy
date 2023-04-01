//? Kai kuriose šalyse reikia eiti į kariuomenę,
//? jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo.
//? Sukurk programą, kuri su input + radio button pasakytų,
//? ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente).
//? Hint: pasirinkite su querySelector tik pažymėtą radio input
//? (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

const form = document.querySelector("form");
const ageInput = document.getElementById("age");
const radioButton = document.getElementById("convicted");
const output = document.getElementById("output");

form.addEventListener("submit", getResult);

function getResult(e) {
  e.preventDefault();
  const age = +ageInput.value;
  const isConvicted = radioButton.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    output.innerText = "Army's calling you";
  } else {
    output.innerText = "No army";
  }
}
