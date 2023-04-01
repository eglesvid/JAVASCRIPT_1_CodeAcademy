//? TASK 1.
//? Parašykite variable su jūsų vardu.
//? Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai -
//? tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

// let myName = prompt("Enter your name here");
// if (myName.length < 5) {
//   console.log("Short name");
// } else {
//   console.log("Long name");
// }

//arba (ir sitas teisingiau pagal uzduoti, nes ternary)

// const myName = "Egle";
// console.log(myName.length < 5 ? "Short Name" : "Long Name");

//? TASK 2.
//? Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'.
//? Patikriname ar vartotojas gali vairuoti automobilį -
//? t.y. clientAge didesnis arba lygus legalAge.
//? Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

// let clientAge = prompt("Enter your age");
// let legalAge = 18;
// if (clientAge >= legalAge) {
//   console.log("Can drive");
// } else {
//   console.log("Can't drive");
// }

//arba (ir sitas teisingiau pagal uzduoti, nes ternary)

// let clientAge = 16;
// let legalAge = 18;
// console.log(clientAge >= legalAge ? "Can drive" : "Can't drive");

//arba

// let clientAge = 16;
// let legalAge = 18;
// clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

//? TASK 3.
//? Ahh, o jeigu antrame pratime įvesti -1 kaip amžių?
//? Darom double ternary operator - t.y. operatorius operatoriuje.
//? Pirma paklausiame - jei amžius mažesnis nei 0;
//? arba didesnis nei 120 - išmetame "Invalid Age".
//? Jei vis tik ne - tada false statement'e bus dar vienas
//? operatorius su antru pratimo klausimu.

// let clientAge = 19;
// let legalAge = 18;
// clientAge < 0 || clientAge > 120
//   ? console.log("Invalid Age")
//   : clientAge >= legalAge
//   ? console.log("Can drive")
//   : console.log("Can't drive");

//? TASK 4.
//? Sukurkite variable 'phone', kuris būtų lygus 'iPhone'.
//? Taip pat sukurkite variable isIphoneUser, kuris turėtų būti
//? prilygintas Boolean reikšmei (t.y. true arba false) priklausomai
//? ar phone yra 'iPhone' ar bet koks kitas.

// const phone = "iPhone";
// isIphoneUser = false;

// isIphoneUser
//   ? console.log("Is an iPhone User")
//   : console.log("Not an iPhone user");

//arba 4 naudojai ternary operator? O kam? Ne visada reikia conditional statementų,
//kad pasiektume rezultatą - jie dažniausiai skirti, kai norime paleisti skirtingas kodo eilutes.
//O jei tik norime sužinoti ar true, ar false - galime tiesiog paprasčiausiai paklausti.

const phone = "iPhone";
const isIphoneUser = phone === "iPhone";
