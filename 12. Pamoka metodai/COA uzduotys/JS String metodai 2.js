//? Sukurk input, kur vartotojas įves savo vardą.
//? Įvedus - alert'ink kokio ilgio yra vardas.
//? Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Visą magiją daro .trim()
  const name = document.getElementById("name").value.trim();

  alert("Length: " + name.length);
});
