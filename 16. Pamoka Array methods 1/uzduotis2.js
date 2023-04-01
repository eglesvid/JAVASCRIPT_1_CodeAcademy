//? Turite masyvą:
//? constnumbersArr= [11, -2, 34, 45, 19, -5,  6]
//? Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins
//? masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.

const numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let sum = 0;
  for (const number of arr) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(getMaxSubSum(numbersArr));

//for...of

// function getMinSubSum(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     if (item > 0) {
//       sum += item;
//     }
//   }
//   return sum;
// }
// getMinSubSum(arr);
