//! Tips
// collect elements to constants (e.g. startButton, secondsFields, minutesField, ring)
// add event listener on startButton and on click:
// if it was START that was pressed, start interval with function, which will change values of minutes and seconds every interval;
// if it was STOP that was pressed, stop interval;
// ...
// Good luck...

const startButton = document.querySelector(".start");
const secondsField = document.querySelector(".seconds input");
const minutesField = document.querySelector(".minutes input");
const ring = document.querySelector(".ring");

let intervalID;

const startTimer = () => {
  if (+secondsField.value === 0 && +minutesField.value === 0) {
    ring.classList.add("ending");
    clearInterval(intervalID);
    startButton.textContent = "Reset";
  } else if (+secondsField.value === 0) {
    secondsField.value = "59";
    minutesField.value -= 1;
  } else secondsField.value -= 1;
};

startButton.addEventListener("click", () => {
  switch (startButton.textContent.toLocaleLowerCase()) {
    case "start":
      startButton.textContent = "Stop";
      intervalID = setInterval(startTimer, 1000);
      break;
    case "reset":
      startButton.textContent = "Start";
      secondsField.value = "00";
      minutesField.value = "15";
      ring.classList.remove("ending");
      break;
    case "stop":
      startButton.textContent = "Start";
      if (intervalID) {
        clearInterval(intervalID);
      }
      break;
    default:
      break;
  }
});
