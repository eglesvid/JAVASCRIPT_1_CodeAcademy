//? Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas.
//? Paspaudus ant mygtuko, skaičius padidėja (+1).

let counter = 0;

document.querySelector("button").addEventListener("click", () => {
  counter++;
  document.querySelector("h1").innerText = counter;
});
