const mainTag = document.querySelector("main");

const cityList = document.createElement("ul");

const cityListItem1 = document.createElement("li");
cityListItem1.textContent = "Vilnius";
const cityListItem2 = document.createElement("li");
cityListItem2.textContent = "Kaunas";
const cityListItem3 = document.createElement("li");
cityListItem3.textContent = "Klaipeda";

cityList.append(cityListItem1, cityListItem2, cityListItem3);

const cityInput = document.createElement("input");
cityInput.type = "text";
cityInput.addEventListener("keypress", (e) => {
  //   const warningText = document.querySelector("p");
  //   if (warningText) {
  //     warningText.remove();
  //   }

  if (e.key === "Enter") {
    // pasiimti is inputo miesta
    // susikurti li elementa
    // duoti li elementui text value
    // prideti nauja li elementa prie egzistuojancio ul

    const inputValue = e.target.value;
    if (checkIfCityAlreadyExists(inputValue)) {
      if (!document.querySelector("p")) {
        // sukuriam p taga, kuris raso, kad jau yra
        const cityAlreadyExistsWarning = document.createElement("p");
        cityAlreadyExistsWarning.textContent = "City already exists";
        mainTag.append(cityAlreadyExistsWarning);
        setTimeout(() => {
          cityAlreadyExistsWarning.remove();
        }, 3000);
      }
    } else {
      //regular stuff
      const newCityLiElement = document.createElement("li");
      newCityLiElement.textContent = inputValue;
      cityList.append(newCityLiElement);
    }

    // pasiimti jau ivestus miestus
    // palyginti nauja miesta su jau ivestais miestais
    // jei miestas jau egzistuoja, sukuriam nauja paragrafa, kuriame parasyta, kad toks miestas jau egzistuoja
    // jei tokio miesto dar nera ivesta, tiesiog ivedam kaip ir pries tai
    e.target.value = "";
  }
});

function checkIfCityAlreadyExists(inputValue) {
  const allCities = document.querySelectorAll("li");
  for (let i = 0; i < allCities.length; i++) {
    if (inputValue.toLowerCase() === allCities[i].textContent.toLowerCase()) {
      return true;
    }
  }
  return false; //ieskojom ir neradom - grazinam false
}

mainTag.append(cityList, cityInput);
