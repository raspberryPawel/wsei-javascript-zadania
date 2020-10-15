// #### Zadanie 1

let intervalIndex = 0;
const interval = setInterval(() => {
  intervalIndex++;
  console.log(`Cześć po raz ${intervalIndex}`);
  if (intervalIndex >= 15) {
    clearInterval(interval);
  }
}, 3000);

// ### Zadanie 2

const exampleArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
setTimeout(() => {
  console.log("exampleArray: ", exampleArray);

  let intervalIndex = 0;
  const interval = setInterval(() => {
    intervalIndex++;
    console.log(`Element ${intervalIndex}: ${exampleArray[intervalIndex - 1]}`);

    if (intervalIndex >= exampleArray.length) {
      clearInterval(interval);
    }
  }, 3000);
}, 2000);
