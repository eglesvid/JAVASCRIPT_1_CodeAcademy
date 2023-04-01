//? Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,
//? o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

const form = document.querySelector("form");
const temperature = document.getElementById("tempInCelsius");
const output = document.getElementById("output");

form.addEventListener("submit", getFahrenheit);

function getFahrenheit(e) {
  e.preventDefault();
  const celciusTemperature = +temperature.value;
  const fahrenheitTemperature = (celciusTemperature * 1.8 + 32).toFixed(1);

  output.innerText = fahrenheitTemperature;
}
