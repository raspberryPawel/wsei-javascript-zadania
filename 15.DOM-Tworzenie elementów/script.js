// #### Zadanie 1
const newDiv = document.createElement("div");
newDiv.innerText = "To jest nowy element";
document.body.appendChild(newDiv);

// #### Zadanie 2
const newUl = document.createElement("ul");
newUl.setAttribute("id", "fruits_ul");
const fruits = [
  "jabłko",
  "brzoskwinia",
  "ananas",
  "arbuz",
  "coś",
  "banan",
  "coś jeszcze",
];

fruits.forEach((element) => {
  const li = document.createElement("li");
  li.innerText = element;

  newUl.appendChild(li);
});

document.body.appendChild(newUl);

// #### Zadanie 3
window.addEventListener("removeFruits", function () {
  const children = document.getElementById("fruits_ul").children;
  for (let i = 0; i < children.length; i += 2) {
    children[i].remove();
  }
  console.log("Usunięto elementy");
});

const event = new CustomEvent("removeFruits");

setTimeout(() => {
  window.dispatchEvent(event);
}, 1000);

// #### Zadanie 4
const button = document.createElement("button");
button.innerText = "Kliknij to się usunę";

button.addEventListener("click", function (e) {
  this.remove();
});

document.body.appendChild(button);

// #### Zadanie 5
const number = Math.floor(Math.random() * 11);

for (let i = 0; i < number; i++) {
  const div = document.createElement("div");
  div.innerText = `to jest div numer ${i + 1}`;

  document.body.appendChild(div);
}

// #### Zadanie 6

// Trochę ją rozbudowałem żeby sprawdzić jak radzi sobie z
// bardziej zagnieżdżonymmi obiektami. Radzi ;)

const structure = {
  div1: "to jest div nr 1",
  span1: "to jest span nr 1",
  div2: {
    div3: "to jest div nr 3",
    div4: {
      span3: "to jest kolejny span nr 3",
      div5: {
        span4: "to jest kolejny span nr 4 ",
        span5: "to jest kolejny span nr 5 ",
        span6: "to jest kolejny span nr 6 ",
        span7: "to jest kolejny span nr 7 ",
        div6: {
          div7: "to jest div nr 7",
          span8: "to jest kolejny span nr 8 ",
          span9: "to jest kolejny span nr 9 ",
        },
      },
    },
  },
  span2: "to jest span nr 2",
};

const createElements = (domStructure) => {
  const domElementsArr = [];

  for (key in domStructure) {
    if (typeof domStructure[key] === "object") {
      const newElement = createDOMElement(domStructure, key);
      const newElements = createElements(domStructure[key]);

      appendElementsTo(newElement, newElements);

      domElementsArr.push(newElement);
    } else {
      domElementsArr.push(createDOMElement(domStructure, key));
    }
  }
  return domElementsArr;
};

const createDOMElement = (domStructure, key) => {
  if (key.indexOf("div") !== -1) {
    const div = document.createElement("div");
    div.classList.add(key);
    if (typeof domStructure[key] !== "object") {
      div.innerText = domStructure[key];
    }

    return div;
  } else if (key.indexOf("span") !== -1) {
    const span = document.createElement("span");
    span.classList.add(key);
    span.innerText = `${domStructure[key]} `;

    return span;
  }
};

const appendElementsTo = (appendToThisElement, elements) => {
  for (let i = 0; i < elements.length; i++) {
    appendToThisElement.appendChild(elements[i]);
  }
};

const elements = [document.createElement("br")];
elements.push(...createElements(structure));
appendElementsTo(document.body, elements);

// #### Zadanie 7
const firstList = [
  "pierwszy",
  "drugi",
  "trzeci",
  "czwarty",
  "piąty",
  "szósty",
  "siódmy",
];
const secondList = [];

const firstListElement = document.createElement("ul");
const secondListElement = document.createElement("ul");
const firstButtonElement = document.createElement("button");
const secondButtonElement = document.createElement("button");

firstButtonElement.innerText = "Przenieś w górę";
secondButtonElement.innerText = "Przenieś w dół";

firstButtonElement.addEventListener("click", () => {
  firstList.push(secondList[secondList.length - 1]);
  secondList.pop();

  createDOMElements();
});

secondButtonElement.addEventListener("click", () => {
  secondList.push(firstList[firstList.length - 1]);
  firstList.pop();

  createDOMElements();
});

const disabledButtons = () => {
  secondList.length > 0
    ? firstButtonElement.removeAttribute("disabled")
    : firstButtonElement.setAttribute("disabled", true);

  firstList.length > 0
    ? secondButtonElement.removeAttribute("disabled")
    : secondButtonElement.setAttribute("disabled", true);
};

const createDOMElements = () => {
  firstListElement.innerHTML = "";
  secondListElement.innerHTML = "";

  createListElements(firstList, firstListElement, firstButtonElement);
  createListElements(secondList, secondListElement, secondButtonElement);
  disabledButtons();
};

const createListElements = (list, domElement) => {
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    domElement.appendChild(li);
  });
};

document.body.append(firstListElement);
document.body.append(firstButtonElement);
document.body.append(secondListElement);
document.body.append(secondButtonElement);

createDOMElements();

// #### Zadanie 8
const br = document.createElement("br");
document.body.append(br);

const descritption = document.createElement("div");
descritption.innerText =
  "Dodaj elementy do strony: (rodzaj; tekst; kolor; ilość)";
document.body.append(descritption);

const input = document.createElement("input");
input.setAttribute("type", "text");
document.body.append(input);

const newButton = document.createElement("button");
newButton.innerText = "Dodaj do strony";
newButton.addEventListener("click", function () {
  const inputValue = input.value;
  const values = inputValue.split(";");

  if (values.length !== 4) {
    throw new Error("Nieprawidłowa ilość atrybutów");
  }

  const count = parseInt(values[3]);

  if (isNaN(count)) {
    throw new Error("Trzeci atrybut musi być liczbą");
  }

  for (let i = 0; i < count; i++) {
    let newElement = null;

    try {
      newElement = document.createElement(values[0]);
      newElement.style.color = values[2];
      newElement.innerText = values[1];
    } catch (err) {
      console.log(err);
    }

    if (newElement) {
      document.body.appendChild(newElement);
    }
  }
});
document.body.append(newButton);

// #### Zadanie 9
const parent = document.createElement("div");
const parentForTable = document.createElement("div");

document.body.append(parent);
document.body.append(parentForTable);

const formArray = [["Imię", "Nazwisko", "Wiek", "Ilość dzieci", null]];
const addElements = () => {
  const newRow = [];
  newRow.push(null);
  newRow.push(null);
  newRow.push(null);
  newRow.push(null);
  newRow.push(null);
  formArray.push(newRow);
};

const createForm = () => {
  const table = document.createElement("table");
  formArray.forEach((row, rowIndex) => {
    let newRow = document.createElement("tr");

    row.forEach((td, tdIndex) => {
      let newElement = null;
      const newTd = document.createElement("td");

      if (tdIndex === formArray[rowIndex].length - 1 && rowIndex !== 0) {
        newElement = document.createElement("button");
        newElement.addEventListener("click", function () {
          this.parentElement.parentElement.remove();
          formArray.splice(rowIndex, 1);
        });
        newElement.innerText = "usuń";
      } else if (tdIndex !== formArray[rowIndex].length - 1) {
        newElement = document.createElement("input");
        newElement.setAttribute("type", "text");
        newElement.addEventListener("change", function (e) {
          formArray[rowIndex][tdIndex] = e.target.value;
        });

        if (td) {
          newElement.value = td;
        }
      }

      if (newElement) {
        newTd.appendChild(newElement);
      }
      newRow.appendChild(newTd);
    });

    table.appendChild(newRow);
  });

  parent.innerHTML = "";
  parent.appendChild(table);
};

addElements();
createForm();

const moreButton = document.createElement("button");
moreButton.innerText = "dodaj kolejny wiersz";
moreButton.addEventListener("click", function () {
  addElements();
  createForm();
});

const createButton = document.createElement("button");
createButton.innerText = "Stwórz tabelę";

createButton.addEventListener("click", createTable);

function createTable() {
  const table = document.createElement("table");

  formArray.forEach((row, rowIndex) => {
    let newRow = document.createElement("tr");

    row.forEach((td, tdIndex) => {
      if (tdIndex !== formArray[rowIndex].length - 1) {
        const newTd = document.createElement("td");
        newTd.innerText = td;
        newRow.appendChild(newTd);
      }
    });

    table.appendChild(newRow);
  });

  parentForTable.innerHTML = "";
  parentForTable.appendChild(table);
}
document.body.appendChild(createButton);
document.body.appendChild(moreButton);

// #### Zadanie 10

const validateForm = () => {
  formArray.forEach((row, rowIndex) => {
    row.forEach((td, tdIndex) => {
      if (typeof td === "string") {
        const word = td.charAt(0).toUpperCase() + td.slice(1);
        formArray[rowIndex][tdIndex] = word;
      }
    });
  });
};

const validateButton = document.createElement("button");
validateButton.innerText = "Zmień litery na duże";
validateButton.addEventListener("click", function () {
  validateForm();
  createTable();
});

document.body.appendChild(validateButton);

// #### Zadanie 11

const findNumbersInString = (string) => {
  const numbers = [];
  let buff = "";

  [...string, ""].forEach((char) => {
    console.log();
    if (!isNaN(parseInt(char))) {
      buff += char;
    } else {
      if (buff) {
        numbers.push(buff);
        buff = "";
      }
    }
  });

  const sumUp = numbers.reduce((sum, item) => {
    return sum + parseInt(item);
  }, 0);
  const multiply = numbers.reduce((multi, item) => {
    return multi * parseInt(item);
  }, 1);

  console.log("Suma ze stringa: ", sumUp);

  const parentForElements = document.createElement("div");
  document.body.append(parentForElements);

  for (let i = 0; i < multiply; i++) {
    const element = document.createElement("div");
    element.innerText = string;
    parentForElements.appendChild(element);
  }
};

findNumbersInString("11ascd2saw1s1d1e2d3s1");

// #### Zadanie 12
const exampleObject = {
  exampleProperty: "",
  findAndReplace: function () {
    const stringToReplace = "Ala";
    const index = this.exampleProperty.indexOf(stringToReplace);
    if (index !== -1) {
      this.exampleProperty = this.exampleProperty.replace(
        stringToReplace,
        "Ola"
      );
      console.log("this.exampleProperty: ", this.exampleProperty);
    } else {
      const div = document.createElement("div");
      div.innerText = "\nSłowo Ala nie występuje w tekście.\n";
      document.body.appendChild(div);
    }
  },
};

const addPropertyToObject = (string) => {
  exampleObject.exampleProperty = string;
};

addPropertyToObject("to ta Ala ma kota, Hania nie ma kota");
exampleObject.findAndReplace();

addPropertyToObject("to ta Ola ma kota, Hania nie ma kota");
exampleObject.findAndReplace();

// #### Zadanie 13
const arrayOfStrings = [
  "aaa",
  "bbbbbb",
  "cc",
  "dddddddddddd",
  "eeeeeee",
  "fff",
  "g",
  "hhhhhhhhhhh",
];

const returnArrayWithStringLength = (stringArray) => {
  return stringArray.map((string) => string.length);
};

const returnSumOfStringsLength = (stringLengthArray) => {
  return stringLengthArray.reduce((sumUp, item) => sumUp + item);
};

const returnAverageOfStringsLength = (stringLengthArray) => {
  return (
    stringLengthArray.reduce((sumUp, item) => sumUp + item) /
    stringLengthArray.length
  );
};

const newArray = returnArrayWithStringLength(arrayOfStrings);
const sum = returnSumOfStringsLength(newArray);
const average = returnAverageOfStringsLength(newArray);
console.log("newArray, sum, average => ", newArray, sum, average);
// #### Zadanie 14
let secondObject = {
  name: "",
  surname: "",
  age: "",
};

const setProperty = (name, surname, age) => {
  secondObject.name = name;
  secondObject.surname = surname;
  secondObject.age = age;

  secondObject.nameLength = name.length;
  secondObject.surnameLength = surname.length;
  secondObject.ageLength = age.length;

  if (name.length > 5 || surname.length > 5 || age.length > 5) {
    const button = document.createElement("button");
    button.innerText = "Resetuj obiekt";
    button.addEventListener("click", function () {
      console.log("Przed przywróceniem: ", secondObject);
      secondObject = {
        name: "",
        surname: "",
        age: "",
      };
      console.log("Po przywróceniu: ", secondObject);
    });
    document.body.appendChild(button);
  }
};

setProperty("aaaaa", "bb", "cccccc");
