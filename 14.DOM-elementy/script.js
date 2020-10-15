// #### Zadanie 1
const getTags = (elements) => {
  const tags = [];
  for (let i = 0; i < elements.length; i++) {
    tags.push(elements[i].tagName);
  }
  return tags;
};

const tagsArray = getTags(document.getElementsByClassName("more-divs"));
console.log("Tagi: ", tagsArray);

// #### Zadanie 2
const showElements = (element) => {
  console.log("Wewnętrzny:\n ", element.innerHTML);
  console.log("Zewnętrzny:\n ", element.outerHTML);
  console.log("Klasy string:\n ", element.className);
  console.log("Klasy array:\n ", element.classList);
  console.log("Dataset:\n ", element.dataset);
};

showElements(document.getElementsByClassName("short-list")[0]);

// #### Zadanie 3
const calculate = (element) => {
  const dataAttr = element.dataset;
  let add = 0;
  let sub = 0;

  for (key in dataAttr) {
    if (!isNaN(parseInt(dataAttr[key]))) {
      add += parseInt(dataAttr[key]);
      sub -= parseInt(dataAttr[key]);
    }
  }

  return {
    add: add,
    sub: sub,
  };
};

const result = calculate(document.getElementById("datasetCheck"));
console.log(`Dodawanie: ${result.add}, odejmowanie: ${result.sub}`);

// #### Zadanie 4
document.getElementById("spanText").innerText = "testowe podmienienie";

// #### Zadanie 5
document.getElementById("spanText").className = "nowa_klasa test itp";
document.getElementById("spanText").classList.add("nowa_klasa_testowa");

// #### Zadanie 6
const showElementsClass = (element) => {
  const classes = [];

  for (let i = 0; i < element.length; i++) {
    classes.push(element[i]);
    console.log(element[i]);
  }

  console.log(classes.join("+"));
};

showElementsClass(document.getElementById("classes").classList);

try {
  document.getElementById("classes").classList = [];
  console.log("Usunięto wszystkie klasy");
} catch {
  console.log("Nie Usunięto wszystkich klas");
}

// #### Zadanie 7
const addData = (elements) => {
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].dataset["data-text"]) {
      elements[i].setAttribute("data-text", "text");
    }
  }
};

const li = document.getElementById("longList").getElementsByTagName("li");
addData(li);

// #### Zadanie 8
const buildElement = (name) => {
  const objectWithName = {
    newClass: name,
  };
  addClass(objectWithName);
};

const addClass = (objectWithName) => {
  const className = objectWithName.newClass;
  document.getElementById("myDiv").classList.add(className);
};

buildElement("nowa_clasa_testowa");

// #### Zadanie 9
const addClassToElement = (number) => {
  if (number % 2 === 0) {
    document.getElementById("numbers").className = "even";
  } else {
    document.getElementById("numbers").className = "odd";
  }
};

addClassToElement(Math.floor(Math.random() * 11));

// #### Zadanie 10
const getElementsValues = (element) => {
  const children = element.children;
  const array = [];

  for (let i = 0; i < children.length; i++) {
    array.push(children[i].textContent);
  }

  return array;
};

const arr = getElementsValues(document.getElementById("longList"));
console.log("Tablica z wartościami elementów: ", arr);

// #### Zadanie 11
const setTextAndSaveOldInDataAttr = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("data-old-text", elements[i].textContent);
    elements[i].innerText = Math.floor(Math.random() * 11);
  }
};

setTextAndSaveOldInDataAttr(document.getElementById("longList").children);
