//? Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje.
//? Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaroketuri muzikantai.
//? Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
//? −Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
//? −Atspausdins consolėje "solo" jei muzikantų yra 1;
//? −Atspausdins consolėje "duetas" jei muzikantų yra 2;
//? −Atspausdins consolėje "trio" jei muzikantų yra 3;
//? −Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
//? −Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.
//? Pvz., Jeigu muzikantų yra 3, tada "trio" turi būti atspausdinama consolėje.

// const number = prompt("Iveskite muzikantu skaiciu");

// if (number <= 0) {
//   console.log("Ne grupe");
// } else if (number == 1) {
//   console.log("Solo");
// } else if (number == 2) {
//   console.log("Duetas");
// } else if (number == 3) {
//   console.log("Trio");
// } else if (number == 4) {
//   console.log("Kvartetas");
// } else if (number > 4) {
//   console.log("Didele grupe");
// }

//?Ta pati uzduotis su switch

// const number = 3;
// switch (number) {
//   case 0:
//     console.log("Ne grupe");
//     break;
//   case 1:
//     console.log("Solo");
//     break;
//   case 2:
//     console.log("Duetas");
//     break;
//   case 3:
//     console.log("Trio");
//     break;
//   case 4:
//     console.log("Kvartetas");
//     break;
//   case 5:
//     console.log("Didele grupe");
//     break;
//   default:
//     console.log("Nesuprantama, ka norite pasakyti");
// }

//? "improvement" su switch versija, kad galetu coverinti
//? nuo 5 ir daugiau, kai didesne grupe

const number = prompt("Iveskite muzikantu skaiciu");
switch (true) {
  case number == 0:
    console.log("Ne grupe");
    break;
  case number == 1:
    console.log("Solo");
    break;
  case number == 3:
    console.log("Trio");
    break;
  case number == 4:
    console.log("Kvartetas");
    break;
  case number >= 5:
    console.log("Ne grupe");
    break;
  default:
    console.log("Nesuprantama, ka norite pasakyti");
}
