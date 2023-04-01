//? Padaryti, kad paspaudus ant mygtuko, po apačia
//? atsirastų paragrafe tekstas apie jus.

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").innerText = "Some text";
});
