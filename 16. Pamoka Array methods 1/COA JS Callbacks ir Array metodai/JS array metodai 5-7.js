//? TASK 5
//? Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas").
//? Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// const cities = ["Vilnius", "Kaunas", "Klaipeda"];
// console.log(cities.find((v) => v.charAt(0) === "K"));

//? TASK 6
//? Penktame pratime esantį sprendimą pakoreguot ir patikrink su some
//? ar bent vienas miestas prasideda iš mažosios.

// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase()));

//? TASK 7
//? Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas
//? prasideda ir mažosios, bet ar visi iš didžiosios.

const cities = ["Vilnius", "Kaunas", "klaipeda"];
console.log(cities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
