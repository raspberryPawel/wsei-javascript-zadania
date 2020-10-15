// #### Zadanie 1
console.log("\nZADANIE 1:\n");

function Person(name, surname, age, country, city, language) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;
}

Person.prototype.changeAge = function (age) {
  this.age = age;
};
Person.prototype.changeCity = function (city) {
  this.city = city;
};

const persons = [];
persons.push(new Person("Paweł", "Malina", 32, "poland", "Kraków", "Polski"));
persons.push(new Person("Adam", "Malina", 11, "Czechy", "Praga", "Czzeski"));
persons.push(
  new Person("Krzysztof", "Malina", 45, "Słowacja", "Kraków", "Słowacki")
);
persons.push(
  new Person("Stefan", "Malina", 33, "poland", "Warszawa", "Polski")
);
persons.push(
  new Person("Halina", "Malina", 87, "Niemcy", "Berlin", "NIemiecki")
);
//dzięki prototype oszczędzamy pamięć i pamiętamy o reużywalności kodu

persons[2].changeAge(99);
persons[2].changeCity("ZMIENIONE MIASTO");
//tylko osoba z indeksem 2 ma zmieniony wiek i miasto - nie wszystkie

persons.forEach((person, index) => {
  console.log(`person ${index + 1} => `, person);
});

// #### Zadanie 2
console.log("\nZADANIE 2:\n");

function Calculator() {
  this.cache = 0;
}

Calculator.prototype.makeAction = function (action, number) {
  switch (action) {
    case "+":
      this.adding(number);
      break;
    case "-":
      this.subtraction(number);
      break;
    case "/":
      this.division(number);
      break;
    case "*":
      this.multiplication(number);
      break;
  }
};

Calculator.prototype.adding = function (number) {
  this.cache += number;
};

Calculator.prototype.subtraction = function (number) {
  this.cache -= number;
};

Calculator.prototype.multiplication = function (number) {
  this.cache *= number;
};

Calculator.prototype.division = function (number) {
  this.cache /= number;
};

Calculator.prototype.clear = function () {
  this.cache = 0;
};

Calculator.prototype.show = function () {
  console.log("Wynik: ", this.cache);
};

const calcOne = new Calculator();
const calcTwo = new Calculator();

console.log("Kalkulator 1: ");
calcOne.makeAction("+", 22);
calcOne.makeAction("+", 33);
calcOne.show();
calcOne.makeAction("/", 2);
calcOne.show();
calcOne.makeAction("*", 10);
calcOne.show();
calcOne.makeAction("-", 75);
calcOne.show();

console.log("\nKalkulator 2: ");
calcTwo.makeAction("+", 66);
calcTwo.makeAction("+", 44);
calcTwo.show();
calcTwo.makeAction("/", 10);
calcTwo.show();
calcTwo.makeAction("*", 30);
calcTwo.show();
calcTwo.makeAction("-", 94);
calcTwo.show();

// #### Zadanie 3( gra )

console.log("\nZADANIE 3:\n");

let gameOne;
let gameTwo;

function Game() {}

Game.prototype.number = 0;
Game.prototype.gameInterval = null;

Game.prototype.start = function (anotherGame) {
  Game.prototype.gameInterval = setInterval(() => {
    Game.prototype.gameNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Wylosowany numer: ", Game.prototype.gameNumber);
    anotherGame.check();
  }, 1000);
};

Game.prototype.check = function () {
  if (Game.prototype.gameNumber > 5) {
    console.log("Koniec");
    clearInterval(Game.prototype.gameInterval);
  }
};

gameOne = new Game();
gameTwo = new Game();

gameOne.start(gameTwo);