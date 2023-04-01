// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//?Factorial task FOR

// const num = 5;
// let res = 1;

// for (let i = 1; i < num; i++) {
//   res = res + i * res;
// }

// console.log(res);

//?WHILE

// let i = 0;

// while (i < 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//?DO WHILE

// let i = 0;

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 21);

// do {
//     console.log(i)
//     i++;
// } while (i > 21);

//?Array

// const names = ["Marius", "Tomas", "Mantas"];
// console.log(names[2]);

// names[1] = "Egle";
// console.log(names.length);

//?TASK 1. Create variable with array containing 10 names.
// const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

//?TASK 2. Write while loop that iterates 5 times, each time prints your name.
// const name = "Egle";
// let i = 0;

// while (i < 5) {
//   console.log(name);
//   i++;
// }

//?TASK 3. Use do…while loop to print your name only once.
// let i = 0;
// do {
//   console.log("Egle");
// } while (i > 0);

//? arba

// let i = 0;
// do {
//   console.log("Egle");
//   i++;
// } while (i < 1);

//?TASK 4. 1.Create variable with array containing 5 Strings. One of them has to be your name.
//?        2.Loop over that array using for, but print only when value is your name.
// const names = ["a", "b", "c", "d", "Egle"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i] === "Egle") {
//     console.log(names[i]);
//   }
// }

//?arba
// const strings = [
//   "stuff",
//   "more stuff",
//   "Ainas",
//   "even more stuff",
//   "yep, stuff",
// ];
// for (let i = 0; i < strings.length; i++) {
//   if (strings[i] == "Ainas") {
//     console.log(strings[i]);
//   }
// }

//?Gausite irasyti 5 vardus ir td jie atsispausdins.
//?cia tas array declaration budas yra skirtas jeigu jau zinai kokio ilgio bus array bet values nori gauti negrynai pats irasydamas vos sukurs ta array, kaip va cia kad user irasytu pats vardus tarkim, tai tada sitaip declarini ir i skliaustelius irasai array length
// {
//   const names = new Array(5);

//   for (let i = 0; i < names.length; i++) {
//     names[i] = prompt("insert name");
//   }

//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
// }

//?Task ilgesne
const price = prompt("Iveskite prekes kaina");
const isDeliveryNeeded = prompt(
  "Ar reikalingas pristatymas i namus? (taip/ne)"
);
let city;
const DELIVERY_FEE = 20;

if (isDeliveryNeeded === "taip") {
  city = prompt("I kuri miesta reiks pristatyti?");
}

//Pirmas variantas
//Prekes kaina: xx.xx €
//Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

// if (isDeliveryNeeded !== "taip") {
//   console.log(
//     `Prekes kaina ${price}€ \nPreke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`
//   );
// }

//Antras variantas
//Prekes kaina: xx.xx €
//Pristatymas: xx.xx €
//Is viso: xx.xx €
//Preke pristatysime i "ivestas miestas" per 1-3 dienas

//Kai yra nemokamas pristatymas, mums reikia atspausdinti sita gabala:
//Prekes kaina: xx.xx €
//Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

if (isDeliveryNeeded !== "taip") {
  console.log(
    `Prekes kaina ${price}€ \nPreke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`
  );
} else if (price >= 50 || city === "Vilnius") {
  console.log(
    `Prekes kaina : ${price} € \nPreke nemokamai pristatysime i ${city} per 1-3 dienas.`
  );
} else {
  console.log(
    `Prekes kaina : ${price} € \nPristatymas: ${DELIVERY_FEE} € \nIs viso: ${
      +price + DELIVERY_FEE
    } €\nPreke pristatysime i ${city} per 1-3 dienas.`
  );
}
