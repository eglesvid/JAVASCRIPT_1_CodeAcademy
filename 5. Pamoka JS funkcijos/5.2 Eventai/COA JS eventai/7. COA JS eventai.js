//? Sukurk programą, kurioje du mygtukai -
//? "Turiu bent 18 metų" ir "Mažiau nei 18 metų".
//? Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus".
//? Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

document
  .getElementById("adult")
  .addEventListener(
    "click",
    () => (document.getElementById("output").innerText = "Alus")
  );

document
  .getElementById("child")
  .addEventListener(
    "click",
    () =>
      (document.getElementById("output").innerText =
        "Nepilnametis - nieko neturim")
  );
