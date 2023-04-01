const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const emailInput = document.querySelector('input[name="email"]');

const colorInputs = document.querySelectorAll('input[name="color"]');
console.log(colorInputs);

const carSelect = document.querySelector("select");

document.querySelector("button").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameInput.value); // cia value paimamas tik tada, kai mes paspausdziam mygtuka
  console.log(ageInput.value);
  console.log(emailInput.value);

  console.log(colorInputs[0].checked);

  console.log(carSelect.value);
});
