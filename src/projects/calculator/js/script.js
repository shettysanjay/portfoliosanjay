//initialising variables
let preValue = 0;
let totalValue = 0;
let tempValue;
let operator;
// Getting the DOM
const screen = document.querySelector(".screen");
const buttons = document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (e) {
    buttonClick(e.target.innerText);
  });

//Determining the button click
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screenSet();
}

//Handling if the button clicked is a symbol
function handleSymbol(value) {
  if (value === "C") {
    screenValue = 0;
    preValue = 0;
    return screenValue;
  } else if (value === "←") {
    let newValue = Math.floor(screenValue / 10);
    screenValue = newValue;
    return screenValue;
  } else if (value === "=") {
    if (operator !== undefined) {
      if (operator === "+") {
        screenValue = screenValue + tempValue;
      } else if (operator === "-") {
        screenValue = tempValue - screenValue;
      } else if (operator == "×") {
        screenValue = screenValue * tempValue;
      } else {
        screenValue = tempValue / screenValue;
      }
    }
  } else {
    handleMath(value);
  }
}
//Handling if the button clicked is a number
function handleNumber(value) {
  let numValue = parseInt(value);
  screenValue = preValue * 10 + numValue;
  preValue = screenValue;
}
//Handling Math operation
function handleMath(value) {
  switch (value) {
    case "+":
      operator = value;
      tempValue = screenValue;
      preValue = 0;
      screenValue = 0;
      break;
    case "-":
      operator = value;
      tempValue = screenValue;
      preValue = 0;
      screenValue = 0;
      break;
    case "×":
      operator = value;
      tempValue = screenValue;
      preValue = 0;
      screenValue = 0;
      break;
    case "÷":
      operator = value;
      tempValue = screenValue;
      preValue = 0;
      screenValue = 0;
      break;
    case "default":
      break;
  }
  screenSet();
}
//setting the screen
function screenSet() {
  screen.innerText = screenValue;
}
