//? 1 TASK.
//? Sukurk variable 'milkPrice'.
//? Su JS patikrink ir informuok vartotoją alert()
//? ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// const milkPrice = 12;
// if (Number.isInteger(milkPrice)) {
//   alert("Centu nereikia");
// } else {
//   alert("Centu reikia");
// }

//? 2 TASK.
//? Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą
//? - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// const milkPrice = 12.3453;
// if (Number.isInteger(milkPrice)) {
//   alert("Centu nereikia");
// } else {
//   alert("Centu reikia");
// }

// alert(milkPrice.toFixed(2));

//? Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML):
//? viename įvedame kainą su trim skaičias po kablelio,
//? antrame - degalų kiekį, su vienu skaičiu po kablelio
//? (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti).
//? Pavyzdžiui: 1.399Eur x 5.1L.
//? Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS),
//? su dviem skaičiais po kablelio (pvz. 7.13 Eur).

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Pasiimant input value, visada paduoda string. Nepamirštame konveruoti į skaičių su Number()
  const price = document.getElementById("price").value;
  const quant = document.getElementById("quant").value;

  const total = price * quant;

  const priceDisplay = document.createElement("h1");
  priceDisplay.textContent = total.toFixed(2);
  document.body.append(priceDisplay);
});
