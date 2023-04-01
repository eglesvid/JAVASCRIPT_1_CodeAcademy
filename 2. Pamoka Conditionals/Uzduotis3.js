//? Task 3. Parašykite if...else sąlygą, kuri:
//? − consolė’je atspausdins „lyginis“, jei skaičius yra lyginis skaičius;
//? − consolė’je atspausdins „nelyginis“, jei skaičius yra nelyginis skaičius.
//? Pvz.: Jei skaičius lygus 1, tada konsolėje turėtų būti atspausdinama “nelyginis”.
//? Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.
//? ! Galima pasinaudoti aritmetiniu operatoriumi liekanai gauti: %;

// const number = prompt("Prasome ivesti skaiciu");
// if (number % 2 === 0) {
//   console.log("Lyginis");
// } else {
//   console.log("Nelyginis");
// }

//? Ta pati uzduotis su ternary operator

const number = prompt("Prasome ivesti skaiciu");
const result =
  number % 2 === 0 ? console.log("Lyginis") : console.log("Nelyginis");
