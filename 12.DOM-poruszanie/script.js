// #### Zadanie 1

// Wypisz w konsoli:
const buz = document.getElementById("buz");
const baz = document.getElementById("baz");
const foo = document.getElementById("foo");

// 1. Rodzica elementu id="buz"
console.log(buz.parentElement);
// 2. Brata elementu id="baz"
console.log(baz.previousElementSibling);
// 3. Dzieci elementu id="foo"
console.log(foo.parentElement.children);
// 4. rodzica elementu id"foo"
console.log(foo.parentElement);
// 5. pierwsze dziecko elementu id="foo"
console.log(foo.firstElementChild);
// 6. środkowe dziecko elementu id="foo"
const children = foo.children;
console.log(children[(children.length - 1) / 2]);

// #### Zadanie 2
const addListener = (element) => {
  element.addEventListener("click", function () {
    console.log(this.firstElementChild.innerText.trim());
  });
};

addListener(document.getElementById("ex2"));
// #### Zadanie 3

const addEventOnButtons = () => {
  const buttons = document.getElementById("ex3").getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      changeParentColor(this.parentElement);
      const span = this.parentElement.getElementsByTagName("span")[0];

      span.style.display =
        span.style.display === "inline-block" ? "none" : "inline-block";
    });
  }
};

addEventOnButtons();

// #### Zadanie 4
const changeParentColor = (parent) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  parent.style.backgroundColor = randomColor;
};

// #### Zadanie 5

// 1. Tylko pierwszy element listy
const lightFirstElement = (currentColor, elements) => {
  elements[0].style.backgroundColor = currentColor;
};
// 2. tylko ostatni element listy
const lightLastElement = (currentColor, elements) => {
  elements[elements.length - 1].style.backgroundColor = currentColor;
};
// 3. Parzyste elementy listy
const lightEvenElements = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i += 2) {
    elements[i].style.backgroundColor = currentColor;
  }
};
// 4. Wszystkie elementy listy
const lightAllElements = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = currentColor;
  }
};
// 5. Żaden z elementów - tylko cała lista
const lightContainer = (currentColor, elements) => {
  elements[0].parentElement.style.backgroundColor = currentColor;
};

const lightElements = () => {
  const parent = document.getElementById("ex5");
  const colouredDivs = parent.getElementsByTagName("div");

  for (let i = 0; i < colouredDivs.length; i++) {
    colouredDivs[i].addEventListener("mouseenter", function () {
      const currentColor = this.style.backgroundColor;
      const liElements = parent.getElementsByTagName("li");
      //   lightFirstElement(currentColor, liElements);
      //   lightLastElement(currentColor, liElements);
      //   lightLastElement(currentColor, liElements);
      //   lightEvenElements(currentColor, liElements);
      lightContainer(currentColor, liElements);
    });
  }
};

lightElements();
// #### Zadanie 6

const ex6Parrent = document.getElementById("ex6");

// 1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
const firstExample =
  ex6Parrent.firstElementChild.firstElementChild.firstElementChild;

// 2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
const secondExample =
  ex6Parrent.firstElementChild.parentElement.firstElementChild.firstElementChild
    .nextElementSibling.parentElement;

// 3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko

const thirdExample =
  ex6Parrent.parentElement.firstElementChild.parentElement.children[1]
    .firstElementChild.firstElementChild.firstElementChild;
