//? Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę).
//? Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Ir toliau naudojame trim(), kad išventume bėdų
//   const fullName = document.getElementById("fullname").value.trim().split();

//   const name = document.createElement("h1");
//   name.textContent = fullName[0];

//   const surname = document.createElement("h1");
//   surname.textContent = fullName[1];

//   document.body.append(name, surname);
// });

//? Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();

  const name = document.createElement("h1");
  name.textContent = fullName.split(" ")[0];

  const surname = document.createElement("h1");
  // Vardą+Pavardę paėmus, pakeičiame vardą - tarpeliu (ir nutriname vieną tarpelį). Paliekame visą kitą.
  surname.textContent = fullName.replace(name, "").slice(1);

  document.body.append(name, surname);
});
