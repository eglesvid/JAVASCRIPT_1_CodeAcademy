//? Sukurk programą, kurioje reikia įvesti elektroninį paštą ir
//? paspausti mygtuką "sutinku gauti laiškus".
//? Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas,
//? išmeta - "Registracija nesėkminga.
//? Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const didAgreeToGetLetter = document.getElementById("checked");
const output = document.getElementById("output");

form.addEventListener("submit", checkRegistration);

function checkRegistration(e) {
  e.preventDefault();
  const email = emailInput.value;

  if (didAgreeToGetLetter.checked) {
    output.innerText = `El. paštas ${email} sėkmingai užregistruotas`;
  } else {
    output.innerText = "Registracija nesėkminga";
  }
}
