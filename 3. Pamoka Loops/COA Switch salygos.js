//? TASK 1.
//? Ar atsimenat paskutinį IF-ELSE pratimą? Būtent jį efektyviau apsirašyti su Switch, pasibandykime:
//? Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//? Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
//? VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//? BMW group priklauso: BMW, Mini, Rolls-Royce.

// let car = prompt("Iveskite automobilio brand'a");
// switch (car) {
//   case "VW":
//   case "Audi":
//   case "Bentley":
//   case "Bugatti":
//   case "Lamborghini":
//   case "Porsche":
//     console.log("VW group");
//     break;
//   case "BMW":
//   case "Mini":
//   case "Rolls-Royce":
//     console.log("BMW group");
//     break;
//   default:
//     console.log("Unknown group");
// }

//? TASK 2.
//? Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'.
//? Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė.
//? Pridėkite bent 5 kiekvienos kategorijos
//? (trūksta idėjų? Wiki į pagalbą: vaisiai, daržovės).

// let userInput = prompt("Ivesk vaisiu ar darzove is pasirinkimu");
// switch (userInput) {
//   case "Obuolys":
//   case "Kriause":
//   case "Apelsinas":
//   case "Mandarinas":
//   case "Granatas":
//     console.log("Vaisius");
//     break;
//   case "Agurkas":
//   case "Salieras":
//   case "Cukinija":
//   case "Morka":
//   case "Baklazanas":
//   case "Bulve":
//     console.log("Darzove");
//     break;
//   default:
//     console.log("Unknown");
// }

//? TASK 3.
//? Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus
//? skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1;
//? trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių
//? ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu.
//? Vėliau, atspausdink kintamąjį.

let weekDay = 4;

switch (weekDay) {
  case 0:
    console.log("Pirmadienis");
    break;
  case 1:
    console.log("Antradienis");
    break;
  case 2:
    console.log("Treciadienis");
    break;
  case 3:
    console.log("Ketvirtadienis");
    break;
  case 4:
    console.log("Penktadienis");
    break;
  case 5:
    console.log("Sestadienis");
    break;
  case 6:
    console.log("Sekmadienis");
    break;
  default:
    console.log("Unknown day");
}
