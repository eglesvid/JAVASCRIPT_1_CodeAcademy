//? Uzduotis nr. 3
//? Turite masyvą:
//? letrandomArr= [11, “cat”, true, 4, “mouse” 5, 9, 5, 76, false]
//? Sukurkite funkciją getArrayByData(array, dataType),
//? kuri kaip parametrus priims array(masyvą) ir
//? dataType(string, kuris nurodo duomenų tipą: “number” arba “string” arba “boolean”)
//? ir grąžins naują masyvą.
//? Naujo masyvo duomenys bus paimami iš pirmo argumento array(masyvo)
//? išfiltruoti pagal duomenų tipą nurodytą kaip dataType.
//?
//? Iškvietus: getArrayByData(randomArr, “string”)
//? Rezultatas: [“cat”, “mouse”]
//?
//? Iškvietus: getArrayByData(randomArr, “number”)
//? Rezultatas: [11, 4, 5, 9, 5, 76]

const randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === dataType) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(getArrayByData(randomArr, "number"));

// function getArrayByData(array, dataType) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === dataType) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(getArrayByData(randomArr, "string"));

// Marijaus sprendimas

// let randomArr = [11, "cat", true, false, 4, "mouse", 5, 9, 5, 76];
// function getArrayByData(array, dataType) {
//   let newArray = [];
//   for (const item of array) {
//     if (dataType == typeof item) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }
// console.log(getArrayByData(randomArr, "number"));
