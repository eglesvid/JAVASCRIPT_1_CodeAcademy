//!1 get form object and elements (ivairus variantai:). Skirtumas tarp console.log ir dir: Kai dirbam su DOM, objekto elementais ir mes juos selectinam su tais visais querySelectoriais, es turim ne kaip JS objekta, o kaip HTML elementus. Su console.log, buna, negraziai islogina, sunkiau susigaudyti. SKIRTUMAS KAIP MUMS ATVAIZDUOJA

// console.dir(document.querySelector("form"));
// console.dir(document.forms[0]);
// console.dir(document.forms[0].elements);
// console.dir(document.forms[0].username);
// console.dir(document.querySelector("#username"));

//!2 get values on submit
const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit); //daznai naudojama!!!

function handleFormSubmit(e) {
  e.preventDefault(); //kad sustabdytu standartini veikima, nes kitaip bandys siust kazkur ta forma ir persikraudines puslapis
  console.dir(e.target);

  //!3 get input values
  console.dir(document.querySelector("#username").value);

  //!4 select
  const homeTownSelect = document.querySelector("#hometown");
  //   console.log(homeTownSelect.value); //sita dazniausiai, nes gal norim kokia validacija padaryt
  //   console.log(homeTownSelect.selectedOptions);
  //   console.log(homeTownSelect.selectedIndex); //irankiai, kur kazkada reikes

  //!5 checkbox
  const termsCheckbox = document.querySelector("#terms");
  //   console.dir(termsCheckbox);
  //   console.dir(termsCheckbox.checked);

  //!8 simple validation scenario
  //   const username = document.querySelector("#username");
  //   const errorElements = document.querySelectorAll(".error");

  //   if (username.value === "") {
  //     errorElements[0].textContent = "Please enter a username";
  //     username.style.border = "2px solid red";
  //   } else {
  //     errorElements[0].textContent = "";
  //     username.style.border = "2px solid lightgrey";
  //   }

  //!9 reusable validation scenario
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const repeatPassword = document.querySelector("#repeat-password");
  const homeTown = document.querySelector("#hometown");
  const errorElements = document.querySelectorAll(".error");

  const validateInput = (input, errorElement, message) => {
    if (input.value === "") {
      errorElement.textContent = message;
      input.style.border = "2px solid red";
    } else {
      errorElement.textContent = "";
      input.style.border = "2px solid lightgrey";
    }
  };

  validateInput(username, errorElements[0], "Please enter a username");
  validateInput(email, errorElements[1], "Please enter email");
  validateInput(password, errorElements[2], "Please enter password");
  validateInput(repeatPassword, errorElements[3], "Please repeat password");
  validateInput(homeTown, errorElements[4], "Please enter homeTown");

  const validatePassword = (input, errorElements, message) => {
    // if (repeatPassword.value !== password.value) {
    //   errorElements.textContent = message;
    // }
    repeatPassword.value !== password.value
      ? (errorElements.textContent = message)
      : "";
  };

  validatePassword(repeatPassword, errorElements[3], "Passwords don't match!");
}

//!6 focus and blur events
document
  .querySelector("#username")
  .addEventListener(
    "focus",
    (e) => (e.target.style.backgroundColor = "orange")
  );

document
  .querySelector("#username")
  .addEventListener("blur", (e) => (e.target.style.backgroundColor = "white"));

//!7 change and input events

document.querySelector("#email").addEventListener("change", (e) => {
  document.querySelector("#emailError").textContent = e.target.value;
}); //is target paima value ir iraso i div. change event pasileidziam, kai kazka darom darom ir nublurinam.

document.querySelector("#username").addEventListener("input", (e) => {
  document.querySelector("#usernameError").textContent = e.target.value;
}); //vienu metu rasosi (priesingai nuo change, kai tik parasius jis atsiranda).

//!10 Task
// Sukurti dar viena input field index.html faile, kad vartotojas
// pakartotinai suvestu password. Jei password ir pakartotinis password
// nesutampa, tai atsirastu po repeat password laukeliu pranesimas,
// kad 'Passwords don't match!'
// as virsuj parasiau
