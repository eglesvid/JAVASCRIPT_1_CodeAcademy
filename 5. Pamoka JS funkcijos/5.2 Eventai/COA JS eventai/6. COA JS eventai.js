//? Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random
//? skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.

// const clickButton = document.querySelector("button");
// clickButton.addEventListener("click", generateRandomNumber);

// function generateRandomNumber() {
//   const randomNumber = Math.ceil(Math.random() * 100);
//   document.querySelector("h1").innerText = randomNumber;
// }

//arba COA ats.

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

document.querySelector("button").addEventListener("click", () => {
  const randomNumber = generateRandomNumber();
  document.querySelector("h1").innerText = randomNumber;
});
