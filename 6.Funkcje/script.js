// #### Zadanie 1

const showMessage = () => {
  console.log("Udało się!");
};

showMessage();

// #### Zadanie 2

const showExampleParameter = (exampleParameter) => {
  console.log("Parameter: ", exampleParameter);
};

showExampleParameter("Udało się");

// #### Zadanie 3

const getAndReturnArray = (exampleArray) => {
  return exampleArray;
};

const array = getAndReturnArray([1, 2, 3, 4]);
console.log(array);

// #### Zadanie 4

const showMessageInInterval = (exampleString) => {
  let intervalCount = 0;
  const interval = setInterval(() => {
    if (intervalCount < 5) {
      console.log(exampleString);
    } else {
      clearInterval(interval);
      console.log("Koniec");
    }
    intervalCount++;
  }, 3000);
};

showMessageInInterval("moja wiadomość");
