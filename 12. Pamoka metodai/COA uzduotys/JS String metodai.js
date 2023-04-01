//? Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių.
//? Pirma, patikrink ar skaičius sveikas (jei ne - alert).
//? Jei sveikas, po apačia sukurk h1 elementą kur vardas bus
//? atkartotas tiek kartų, kiek skaičius nurodo.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const quant = Number(document.getElementById("quant").value);

  if (Number.isInteger(quant)) {
    const h1 = document.createElement("h1");
    h1.textContent = name.repeat(quant);
    document.body.append(h1);
  } else {
    alert("Number is not an integer");
  }
});
