//? Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height.
//? Jame įrašykite "Nejudinkite pelytės".
//? Jeigu vartotojas pajudins pelytę,
//? pakeiskite tekstą į "Kiek galima neklausyti?!".

document.body.addEventListener("mouseover", () => {
  document.getElementById("output").innerHTML = "Kiek galima neklausyti?!";
});
