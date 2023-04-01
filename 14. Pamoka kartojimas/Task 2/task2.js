//? Create an HTML form that asks the user to select
//? their favorite foods from a list of options.
//? The form should have the following elements:
//? A checkbox group with options for pizza, pasta, and sushi
//? A select element with options for fruit (apple, orange, banana) and vegetables (carrot, broccoli, potato)
//? A submit button
//? Use JavaScript to retrieve the values of the form elements
//? when the submit button is clicked.
//? When the submit button is clicked,
//? display an alert message with the selected foods in a list format,
//? e.g. "You selected pizza, pasta, broccoli, and apple."

const checkboxGroup = document.querySelectorAll('input[type="checkbox"]');
const fruitVegetableSelect = document.querySelector("select");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let res = "You selected";

  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      res += ` ${checkboxGroup[i].value}`;
    }
  }

  res += ` ${fruitVegetableSelect.value}`;
  alert(res);
});
