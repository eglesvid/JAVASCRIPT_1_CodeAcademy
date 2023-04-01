//? TASK 1.
//? Suskaičiuok su JS koks bus cos(0)
//? (t.y. cos, kai kampas 0 radians).

// console.log(Math.cos(0));

//? TASK 2.
//? Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).

// console.log(Math.floor(Math.random() * 5) + 1);

//? TASK 3.
//? Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).
// console.log(Math.floor(Math.random() * (12 - 5 + 1)) + 5);

//? TASK 4.
//? Sukurk programą, kur vartotojui atidarius puslapį,
//? alert išmestų ar jis laimėjo bilietą ar ne.
//? Tikimybė laimėti - viena iš penkių.
//? (Hint: čia reikės if-else su math random).

const randomNumber = Math.floor(Math.random() * 5) + 1;
if (randomNumber === 1) {
  alert("You won");
} else {
  alert("Try again next time");
}
