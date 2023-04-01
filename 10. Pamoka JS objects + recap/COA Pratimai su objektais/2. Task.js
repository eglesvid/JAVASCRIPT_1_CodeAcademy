//? Sukuriame formą su dviem input - name ir surname.
//? Pateikus formą, JS turi pasiimti vardą ir pavardę
//? ir sukurti objektą pavadinimu 'person'.
//? Šis objektas turės du parametrus - name ir surname.
//? Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje)
//? - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia.
//? Hint: už funkcijos ribų negali atspausdinti objekto,
//? nes const person = {} yra limituotas konkrečiame bloke
//? (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

//galiu pasiimt forma ir document.forms.ir formos pavadinimas

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e);
  //   eventas turi target, target turi inputus. Galiu ir taip rasyt: const name = e.target[1] ARBA const name = e.target.elements; daug budu yra

  const name = document.querySelector("input").value;
  const surname = document.querySelector("input:nth-of-type(2)").value;

  const person = {
    name: name,
    surname: surname,
  };

  console.log(person);
});

// console.log(person); cia neveiks
