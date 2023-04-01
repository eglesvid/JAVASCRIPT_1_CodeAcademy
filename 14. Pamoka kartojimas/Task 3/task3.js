//? Create an HTML form that asks the user to enter their personal information,
//? including their name, age, gender, and address.
//? The form should have the following elements:
//? A text input for the name
//? A number input for the age
//? A radio button group with options for male, female, and other for the gender
//? A text input for the address
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, display an alert message
//? with the information that the user entered in the following format:
//? "Name: [name]\nAge: [age]\nGender: [gender]\nAddress: [address]"

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const addressInput = document.querySelector('input[name="address"]');

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const address = addressInput.value;

  let gender;
  //kadangi mes norim pereit per kiekviena is input'u ir pasiziureti, kuris is ju yra pazymetas
  //querySelectorAll paduoda array
  //checked grazina boolean reiksme, idealiai tinka isideti i if'o vidu
  //jeigu yra pazymetas sitas input, kuri mes ziurim, mes galim issisaugot jo value kazkur
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break; //mums reikia, kad sustotu tikrinti, kada suranda pazymeta (break = nustoja cikla vykdyt)
    }
  }

  alert(
    `Name: ${name}\nAge: ${age}\nGender: ${
      gender ? gender : "no gender is selected"
    }\nAddress: ${address}`
  );
});
