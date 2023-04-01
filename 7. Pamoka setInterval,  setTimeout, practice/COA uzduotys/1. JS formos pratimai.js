//? Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
//? Tiems darbuotojams, kurie dirba ilgiau nei 10 metų,
//? prideda papildomus 50 eurų (bendrai - 100 eurų).
//? O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų).
//? Parašyk programą, kuri leistų darbuotojui įsivesti
//? skaičių kiek dirbo metų įmonėje,
//? input elementu - atsirastų tekstas su pervedamu bonusu.
//? Pvz: [16] => "Jūsų bonusas: 100 eurų".

const form = document.querySelector("form");
const yearsInput = document.getElementById("years");
const bonusOutput = document.getElementById("bonus-output");

form.addEventListener("submit", getBonus);

function getBonus(e) {
  e.preventDefault();
  const standardBonus = 50;
  const years = yearsInput.value;

  if (years >= 10 && years < 20) {
    bonusOutput.textContent = "Jusu bonusas: " + standardBonus * 2 + " euru";
  } else if (years >= 20) {
    bonusOutput.textContent = "Jusu bonusas: " + standardBonus * 4 + " euru";
  } else {
    bonusOutput.textContent = "Jusu bonusas: " + standardBonus + " euru";
  }
}
