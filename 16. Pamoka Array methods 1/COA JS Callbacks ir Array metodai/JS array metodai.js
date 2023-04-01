//? TASK 1
//? Nusikopijuok array (const cars = ["BMW", "VW", "Audi"])
//? ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((value) => console.log(value));

//? TASK 2
//? Pakoreguok pirmą pratimą, kad atspaudintum index: value
//? (pvz: "0: BMW", "1: VW" ir t.t.).

const cars = ["BMW", "VW", "Audi"];

cars.forEach((value, index) => console.log(index + ": " + value));
