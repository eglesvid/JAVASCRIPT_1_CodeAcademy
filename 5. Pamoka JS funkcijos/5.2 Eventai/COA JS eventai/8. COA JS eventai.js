//? Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3,
//? kai tik užsikrauna puslapis.
//? Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit).
//? Ekrane - trys mygtukai (1, 2, 3).
//? Vartotojas turi spėti koks random skaičius susigeneravo.
//? Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

function generateRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);

document
  .getElementById("one")
  .addEventListener("click", () =>
    randomNumber === 1 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("two")
  .addEventListener("click", () =>
    randomNumber === 2 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("three")
  .addEventListener("click", () =>
    randomNumber === 3 ? alert("Yay") : alert("Nay")
  );
