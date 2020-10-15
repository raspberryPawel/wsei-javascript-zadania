// #### Zadanie 1
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
exampleArray.forEach((element) => {
  console.log(element);
});

// #### Zadanie 2
const secondArray = [1, 2, 3, "string 1", 4, 5, 6, 7, 8, 9, "string 2"];

// 1. Pierszy i drugi element
console.log(`\nPierszy i drugi element: ${(secondArray[0], secondArray[1])}`);

// 2. Ostatni element
console.log(`Ostatni element: ${secondArray[secondArray.length - 1]}`);

// 3. Wszystkie elementy
console.log(`\nWszystkie elementy: ${secondArray.join(", ")}`);

// 4. Co drugi element
console.log("\nCo drugi: ");
secondArray.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log("element, index:", element, index);
  }
});

// 5. Wszystkie stringi
console.log("\nWszystkie stringi: ");
secondArray.forEach((element) => {
  if (typeof element === "string") {
    console.log("string: ", element);
  }
});

// 6. Wszystkie numbery
console.log("\nWszystkie numery: ");
secondArray.forEach((element) => {
  if (typeof element === "number") {
    console.log("number: ", element);
  }
});

// #### Zadanie 3
const thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 1. sumę wszystkich elementów
const sum = thirdArray.reduce((sum, element) => (sum += element));
console.log(`\nsuma wszystkich elementów: ${sum}`);

// 2. różnicę wszystkich elementów
const diff = thirdArray.reduce((diff, element) => (diff -= element));
console.log(`\nróżnica wszystkich elementów: ${diff}`);

// 3. średnią wszystkich elementów
const average = sum / thirdArray.length;
console.log(`\nśrednia wszystkich elementów: ${average}`);

// 4. elementy parzyste
console.log("\nelementy parzyste: ");
thirdArray.forEach((element) => {
  if (element % 2 === 0) {
    console.log("parzysty: ", element);
  }
});

// 5. elementy nieparzyste
console.log("\nelementy nieparzyste: ");
thirdArray.forEach((element) => {
  if (element % 2 !== 0) {
    console.log("parzysty: ", element);
  }
});

// 6. największą liczbę
let max = thirdArray[0];
thirdArray.forEach((element) => {
  if (element > max) {
    max = element;
  }
});

console.log(`\nnajwiększą liczba: ${max}`);

// 7. najmniejszą liczbę
let min = thirdArray[0];
thirdArray.forEach((element) => {
  if (element < min) {
    min = element;
  }
});

console.log(`\nnajmniejsza liczba: ${min}`);

// 8. wypisz tablicę od tyłu
console.log("\ntablica od tyłu: ");

for (let i = thirdArray.length - 1; i >= 0; i--) {
  console.log(thirdArray[i]);
}

// #### Zadanie 4
console.log(`\n\nZadanie 4:`);

const countSum = (array) => {
  const sum = array.reduce((sum, element) => (sum += element));
  console.log(`suma wszystkich elementów tablicy: ${sum}`);
};

countSum([1, 2, 3, 4, 5]);

// #### Zadaie 5
console.log(`\n\nZadanie 5:`);

const changeArrayElements = (array) => {
  const sum = array.reduce((sum, element) => (sum += element));
  const average = sum / array.length;

  console.log(`\nwszystkie elementy tablicy * średnia dla tablicy:`);
  array.forEach((element) => {
    console.log(element * average);
  });
};

changeArrayElements([1, 2, 3, 4, 5]);

// #### Zadanie 6
const countAverageForEvenNumbers = (array) => {
  const arrayWithEvenNumbers = array.filter((element) => {
    if (element % 2 === 0) {
      return element;
    }
  });
  const sum = arrayWithEvenNumbers.reduce((sum, element) => (sum += element));
  const average = sum / arrayWithEvenNumbers.length;

  return average;
};

const evenNumbersAverage = countAverageForEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(`\n\nZadanie 6: ${evenNumbersAverage}`);

// #### Zadanie 7
const sortArray = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  console.log(`Array after sort: ${sortedArray}`);
};

sortArray([4, 2, 6, 4, 8, 6, 1, 3, 6, 7, 3, 2]);

// #### Zadanie 8
console.log(`\n\nZadanie 8:`);

const sumUpIndexes = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    console.log("Długości tablic są różne");
    return [];
  }
  return arrayOne.map((element, index) => element + arrayTwo[index]);
};
const sumUp = sumUpIndexes([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
console.log(sumUp);

// #### Zadanie 9
const without = (array, without) => {
  const withoutArray = array.filter((element) => {
    if (element !== without) {
      return element;
    }
  });
  return withoutArray;
};

const withoutArray = without([4, 2, 6, 4, 8, 6, 1, 3, 6, 7, 3, 2], 6);
console.log(`\n\nZadanie 9: ${withoutArray}`);

// #### Zadanie 10
const reverseArrayElements = (array) => {
  const reversedArray = array.map((element) => {
    const newNumber = element * -1;
    return newNumber;
  });

  return reversedArray;
};

const reversedArray = reverseArrayElements([
  4,
  -2,
  -6,
  4,
  -8,
  6,
  1,
  3,
  6,
  -2,
  0,
]);
console.log(`\n\nZadanie 10: ${reversedArray}`);
