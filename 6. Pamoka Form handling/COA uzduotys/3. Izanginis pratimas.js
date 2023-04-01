//? Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių.
//? Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]";
//? jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

// const form = document.querySelector("form");
// const yourNameInput = document.getElementById("name");
// const yourAgeInput = document.getElementById("age");
// const result = document.getElementById("result");

document.querySelector("form").addEventListener("submit", getResult);

function getResult(e) {
  e.preventDefault();

  const formElements = e.target.elements;
  const yourName = formElements.name.value;
  const yourAge = formElements.age.value;

  if (yourAge >= 18) {
    document.querySelector("h1").textContent = "Vairuoti gali: " + yourName;
  } else {
    document.querySelector("h1").textContent =
      "Dar mokysis vairuoti: " + yourName;
  }
}
