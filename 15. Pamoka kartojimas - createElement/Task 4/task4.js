//? Padaryti lentele

const bookTable = document.querySelector("table");
const data = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

document.querySelector("button").addEventListener("click", generateTable);

function generateTable() {
  for (let i = 0; i < data.length; i++) {
    bookTable.append(generateTableRow(data[i]));
  }
}

function generateTableRow(bookData) {
  const trElement = document.createElement("tr");

  const tdTitle = document.createElement("td");
  tdTitle.textContent = bookData.title;
  const tdAuthor = document.createElement("td");
  tdAuthor.textContent = bookData.author;
  const tdYear = document.createElement("td");
  tdYear.textContent = bookData.year;

  trElement.append(tdTitle, tdAuthor, tdYear);
  return trElement;
}
