// #### Zadanie 1

// 1. Kliknięcie w przycisk o id="test-event"
document
  .getElementById("test-event")
  .addEventListener("click", function (event) {
    console.log(event); //event click
  });

// 2. Ruch myszką na ekranie
// window.addEventListener("mousemove", function (event) {
//   console.log(event); //event mousemove
// });

// 3. Najechanie myszką na przycisk o id="test-event"
document
  .getElementById("test-event")
  .addEventListener("mouseenter", function (event) {
    console.log(event); //event mouseenter
  });

// 4. naciśnięcie klawisza na klawiaturze
window.addEventListener("keydown", function (event) {
  console.log(event); //event keydown
});

// 5. scrollowanie strony w dół i w górę
// window.addEventListener("scroll", function (event) {
//   console.log(event); //event ecroll
// });

// 6. zmianę tekstu w input id="input-test"
document
  .getElementById("input-test")
  .addEventListener("input", function (event) {
    console.log(event); //event input
  });

// #### Zadanie 2
function clickOnEx2(event) {
  const text = event.target.attributes["data-text"].nodeValue;
  event.target.nextElementSibling.innerText = text;
}

document.getElementById("ex2").addEventListener("click", clickOnEx2);

// #### Zadanie 3
function changeColor(event) {
  if (event.type === "mouseleave") {
    event.target.style.backgroundColor = "red";
    return;
  }
  event.target.style.backgroundColor = "blue";
}

document.getElementById("ex3").addEventListener("mouseenter", changeColor);

document.getElementById("ex3").addEventListener("mouseleave", changeColor);

// #### Zadanie 4
function validate(event) {
  if (!isNaN(event.data)) {
    document.getElementById("ex3-err").innerText = "NIe można wpisywać numerów";
  }
}

document.getElementById("input-test").addEventListener("input", validate);

// #### Zadanie 5
let counter = 0;
function counterFunc() {
  if (counter >= 10) {
    document
      .getElementById("ex5-button")
      .removeEventListener("click", counterFunc);
  } else {
    counter++;
    this.parentElement.getElementsByTagName("span")[0].innerText = counter;
  }
}

document.getElementById("ex5-button").addEventListener("click", counterFunc);

// #### Zadanie 6
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    console.log("oj");
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

// #### Zadanie 7

let currentResult = 0;
let currentNumber = "";

function showResult() {
  currentNumber = "";
  document
    .getElementById("calculator")
    .getElementsByTagName("input")[0].value = currentResult;
}

function checkIfCanMakeCalculation() {
  if (isNaN(parseInt(currentNumber))) {
    return false;
  }
  return true;
}

function makeCalculation(event) {
  const target = event.target.textContent;
  switch (target) {
    case "+":
      if (checkIfCanMakeCalculation()) {
        currentResult += parseInt(currentNumber);
        showResult();
      }
      break;
    case "-":
      if (checkIfCanMakeCalculation()) {
        currentResult -= parseInt(currentNumber);
        showResult();
      }
      break;
    case "*":
      if (checkIfCanMakeCalculation()) {
        currentResult *= parseInt(currentNumber);
        showResult();
      }
      break;
    case "/":
      if (checkIfCanMakeCalculation()) {
        currentResult /= parseInt(currentNumber);
        showResult();
      }
      break;
    default:
      currentNumber += target;
      break;
  }
}

const buttons = document
  .getElementById("calculator")
  .getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", makeCalculation);
}
