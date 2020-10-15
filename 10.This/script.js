// #### Zadanie 1
console.log("\nZadanie 1:");

const person = {
  name: "Paweł",
  surname: "Malina",
  age: 1,
  country: "Poland",
  city: "Kraków",
};

const secondPerson = {
  name: "Paweł",
  surname: "Halina",
  age: 12,
  country: "Poland",
  city: "Kraków",
};

//this odwołuje się do obiektu dla którego est wywołany.
function showInfo() {
  console.log(
    `Personal info: ${this.name} ${this.surname} ${this.age} ${this.country} ${this.city}`
  );
}

function changeAge() {
  this.age++;
}

person.showInfo = showInfo;
secondPerson.showInfo = showInfo;
person.changeAge = changeAge;
secondPerson.changeAge = changeAge;

person.showInfo();
secondPerson.showInfo();

person.changeAge();
person.changeAge();
console.log("person.age: ", person.age);

secondPerson.changeAge();
secondPerson.changeAge();

console.log("person.age: ", secondPerson.age);

// #### Zadanie 2
console.log("\nZadanie 2:");

person.favouriteMeal = [];
secondPerson.favouriteMeal = [];

function showMeal() {
  console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
}

function addMeal(meal) {
  this.favouriteMeal.push(meal);
}

person.showMeal = showMeal;
person.addMeal = addMeal;
secondPerson.showMeal = showMeal;
secondPerson.addMeal = addMeal;

person.addMeal("schabowy");
person.addMeal("placek");
person.addMeal("pierogi");
person.showMeal();

secondPerson.addMeal("schabowy 2");
secondPerson.addMeal("placek 2");
secondPerson.addMeal("pierogi 2");
secondPerson.showMeal();

// #### Zadanie 3
console.log("\nZadanie 3:");

const calc = {
  a: 0,
  b: 0,
  saveNumbers: function (a, b) {
    this.a = a;
    this.b = b;
  },
  adding: function () {
    console.log("adding: ", this.a + this.b);
  },
  subtraction: function () {
    console.log("subtraction: ", this.a - this.b);
  },
  multiplication: function () {
    console.log("multiplication: ", this.a * this.b);
  },
  division: function () {
    if (this.b === 0) {
      console.log("Nie można dzielić przez 0");
    } else {
      console.log("division: ", this.a / this.b);
    }
  },
};

calc.saveNumbers(9, 3);
calc.adding();
calc.subtraction();
calc.multiplication();
calc.division();
calc.saveNumbers(10, 0);
calc.division();

// #### Zadanie 4
console.log("\nZadanie 4:");

const ladder = {
  level: 0,
  minLevel: 0,
  maxLevel: 10,
  rung: "|=======|",
  activeRung: "|===*===|",
  showPosition: function () {
    for (let i = 9; i >= 0; i--) {
      if (i === this.level) {
        console.log(this.activeRung);
      } else {
        console.log(this.rung);
      }
    }
  },
  goDown: function () {
    if (this.level > this.minLevel) {
      this.level--;
    }
    console.log("\nGo down:");
    this.showPosition();
  },
  goUp: function () {
    console.log("\nGo up:");
    if (this.level < this.maxLevel) {
      this.level++;
    }
    this.showPosition();
  },
};

const moves = [
  "goUp",
  "goUp",
  "goDown",
  "goUp",
  "goUp",
  "goUp",
  "goUp",
  "goDown",
  "goDown",
  "goDown",
];

let move = 0;
console.log("\nDrabina:");
ladder.showPosition();
const interval = setInterval(() => {
  ladder[moves[move]]();
  if (move >= 9) {
    clearInterval(interval);
  }
  move++;
}, 2500);
