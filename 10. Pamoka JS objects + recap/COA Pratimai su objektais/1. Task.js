//? 1. TASK
//? Susikuriame objektą "car".
//? Duodame jam tris properties: "doors", "color", "brand".
//? Reikšmes įrašykite patys, tik atminkite - doors bus skaičius,
//? o color ir brand - string'ai.
//? Pasiconsole'inkite ir patikrinkite ar matosi car objektas,
//? ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

const car = {
  doors: 6,
  color: "red",
  brand: "VW",
};

// console.log(car.doors);

if (car.doors === 5) {
  alert("turi 5 duris");
} else if (car.doors === 4) {
  alert("turi 4 duris");
} else {
  alert("turi neiprasta skaiciu duru");
}
