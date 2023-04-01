//? Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>.
//? Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių.
//? List itemuose turi būti tavo vardas :)

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const list = document.getElementById("list");

form.addEventListener("submit", getElements);

function getElements(e) {
  e.preventDefault(e);
  const name = nameInput.value;
  const number = +numberInput.value;

  list.innerHTML = "";
  for (let i = 0; i < number; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = name;
    list.append(listItem);
  }
}
