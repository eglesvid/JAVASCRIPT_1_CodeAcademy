//? Padaryti lentele

const data = [
  { name: "John", age: 30, country: "USA" },
  { name: "Jane", age: 25, country: "Canada" },
  { name: "Bob", age: 35, country: "Mexico" },
  { name: "Alice", age: 28, country: "USA" },
  { name: "Tom", age: 32, country: "Canada" },
  { name: "Sue", age: 27, country: "Mexico" },
];

const personTable = document.querySelector("table");
const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const countryInput = document.querySelector('input[name="country"]');

document
  .querySelector("#generate-button")
  .addEventListener("click", generateTable);
document
  .querySelector("#add-button")
  .addEventListener("click", addButtonHandler);

function addButtonHandler() {
  const name = nameInput.value;
  const age = ageInput.value;
  const country = countryInput.value;

  const person = {
    name, //galim sutrumpinima padaryt vietoj name: name,; galim ir name: nameInput.value rasyt
    age,
    country,
  };

  personTable.append(generateTableRow(person));
  clearInputs();
}

function clearInputs() {
  nameInput.value = "";
  ageInput.value = "";
  countryInput.value = "";
}

function generateTable() {
  for (let i = 0; i < data.length; i++) {
    personTable.append(generateTableRow(data[i]));
  }
}

function generateTableRow(personData) {
  const trElement = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = personData.name;
  const tdAge = document.createElement("td");
  tdAge.textContent = personData.age;
  const tdCountry = document.createElement("td");
  tdCountry.textContent = personData.country;

  trElement.append(tdName, tdAge, tdCountry);

  return trElement;
}
