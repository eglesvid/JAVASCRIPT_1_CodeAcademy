//? Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių.
//? Pateikus duomenis, turi susikurti objektas,
//? kuriame du properties - name ir isLegalAge.
//? Name - string, o isLegalAge - boolean.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const age = Number(e.target.elements.age.value);
  const isLegalAge = age >= 18; //net nereikia taip rasyt -> const isLegalAge = age >= 18 ? true : false;

  const person = {
    name: name,
    isLegal: isLegalAge,
  };

  console.log(person);
});
