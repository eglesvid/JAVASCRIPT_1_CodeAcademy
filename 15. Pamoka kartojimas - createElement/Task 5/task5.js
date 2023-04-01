//? atvaizduoti visas prekes duotas masyve ir sukurti input fieldus su kuriais bus galima pridėti naujų prekių.

const itemTable = document.querySelector("table");
const items = [
  {
    name: "Item 1",
    price: 10,
  },
  {
    name: "Item 2",
    price: 20,
  },
  {
    name: "Item 3",
    price: 30,
  },
  {
    name: "Item 4",
    price: 40,
  },
  {
    name: "Item 5",
    price: 50,
  },
];

const generateTableButton = document.querySelector("#generateTable");
const addNewItemButton = document.querySelector("#addNewItem");
const nameInput = document.querySelector('input[name="name"]');
const priceInput = document.querySelector('input[name="price"]');

generateTableButton.addEventListener("click", generateTable);
addNewItemButton.addEventListener("click", addNewItem);

function addNewItem() {
  const name = nameInput.value;
  const price = priceInput.value;

  const itemsInfo2 = {
    name,
    price,
  };

  itemTable.append(generateTableRow(itemsInfo2));
}

function generateTable() {
  for (let i = 0; i < items.length; i++) {
    itemTable.append(generateTableRow(items[i]));
  }
}

function generateTableRow(itemsInfo) {
  const trElement = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = itemsInfo.name;
  const tdPrice = document.createElement("td");
  tdPrice.textContent = itemsInfo.price;

  trElement.append(tdName, tdPrice);
  return trElement;
}
