//? Sukurk input į kurį įvesi savo amžių.
//? Padaryk, kad submit paspaudus, viršuj esančiame
//? h1 elemente atsirastų "Tavo amžius: [amžius]".

const form = document.querySelector("form");
const ageInput = document.getElementById("age");
console.dir(age.target);
form.addEventListener("submit", enterYourAge);

function enterYourAge(e) {
  e.preventDefault();
  document.getElementById("output").innerText =
    "Tavo amžius: " + +ageInput.value;
}
