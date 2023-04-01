const data = ["Apple", "Banana", "Orange", "Grape", "Peach", "Mango"];

const ulElement = document.createElement("ul");

for (let i = 0; i < data.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = data[i];
  ulElement.append(liElement);
}

document.querySelector("main").append(ulElement); //leidzia prideti string'a, jis galingesnis negu appendChild. Appendchild leidzia tik viena elementa skliausteliuose rasyti ir neleidzia string'o
