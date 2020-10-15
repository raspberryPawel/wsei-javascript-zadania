// #### Zadanie 1
console.log("ZADANIE 1:\n");

const car = {
  name: "Opel",
  engine: "v8",
  exampleFirstKey: "exampleFirstKey",
  exampleSecondKey: "exampleSecondKey",
  exampleThirdKey: "exampleThirdKey",
};

for (key in car) {
  console.log(`${key}:`, car[key]);
}

// #### Zadanie 2
console.log("\nZADANIE 2:\n");

const changeName = (newName) => {
  car.name = newName;
  console.log("New name in object: ", car.name);
};

changeName("NewName");

// #### Zadanie 3

console.log("\nZADANIE 3:\n");

const secondObject = {
  sum: 0,
  sumUp: function (array) {
    const sum = array.reduce((sum, element) => (sum += element));
    this.sum = sum;
  },
};

secondObject.sumUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Suma: ", secondObject.sum);

// #### Zadanie 4
console.log("\nZADANIE 4:\n");

const newCar = {
  name: "Opel",
  engine: "v8",
  age: 12,
  exampleFirstKey: "exampleFirstKey",
  exampleSecondKey: "exampleSecondKey",
  exampleThirdKey: "exampleThirdKey",
};

for (key in newCar) {
  console.log(`${key}:`, newCar[key]);
}

// #### Zadanie 5
console.log("\nZADANIE 5:\n");

const owner = {
  name: "Paweł",
  surname: "Malina",
  age: 21,
  adress: "Malinowa Ulica 12",
  IdNumber: "1234561DAF",
};

newCar.owner = owner;

for (key in newCar.owner) {
  console.log(`${key}:`, newCar.owner[key]);
}

// #### Zadanie 6

console.log("\nZADANIE 6:\n");

newCar.newKeyInObject = "newKeyInObject";
newCar.sayHello = () => {
  console.log("Hello");
};

newCar.sayHello();
console.log(`newKeyInObject:`, newCar.newKeyInObject);
