// #### Zadanie 1
const p1 = 2;
const p2 = 6;
if (p1 > p2) {
  console.log(p1);
} else if (p1 == p2) {
  console.log("Są równe");
} else {
  console.log(p2);
}

// #### Zadanie 2
let firstNumber = 111;
let secondNumber = 2;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(secondNumber);
} else {
  console.log(thirdNumber);
}

// #### Zadanie 3

for (let i = 0; i < 10; i++) {
  console.log("Lubię JavaScript");
}

// #### Zadanie 4
let result = 0;

for (let i = 1; i <= 10; i++) {
  result += i;
}

console.log(result);

// #### Zadanie 5

for (let n = 0; n < 5; n++) {
  if (n % 2 == 0) {
    console.log(n + " parzysta");
  } else {
    console.log(n + " nieparzysta");
  }
}

// #### Zadanie 6

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("i= " + i + ", j= " + j);
  }
}

// #### Zadanie 7

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// #### Zadanie 8

// a)
// ```
// *
// **
// ***
// ****
// *****
// ```

const star = "*";
console.log("\na)");
for (let i = 0; i < 6; i++) {
  let result = "";
  for (let j = 0; j < i; j++) {
    result += star;
  }
  console.log(result);
}

// b)
// ```
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// ```

console.log("\nb)");
for (i = 1; i <= 5; i++) {
  let row = "";
  for (a = 6; a >= i; a--) {
    row += " ";
  }
  for (b = 1; b <= i; b++) {
    row += " *";
  }
  console.log(`${row}`);
}

// c)
// ```
//     *
//    ***
//   *****
//  *******
// *********
// ```
const rows = 5;
console.log("\nc)");
for (i = 0; i < rows * 2; i += 2) {
  let row = "";
  for (a = rows * 2 + 2; a >= i + 1; a -= 2) {
    row += " ";
  }
  for (b = 0; b <= i; b++) {
    row += "*";
  }
  console.log(`${row}`);
}

// d)
// ```
// *1234
// **234
// ***34
// ****4
// *****
// -----
// *****
// ****4
// ***34
// **234
// *1234
// ```

console.log("\nd)");
const drow = 5;

for (i = 0; i < drow; i++) {
  let row = "";
  for (a = 0; a <= i; a++) {
    row += "*";
  }
  let number = i+1;
  for (a = drow-1 - i; a > 0; a--) {
    row += number;
    number++;
  }

  console.log(`${row}`);
}
console.log("-----");
for (i = 0; i < drow; i++) {
  let row = "";
  for (a = drow - i; a > 0; a--) {
    row += "*";
  }
  let number = drow - i;
  for (b = 0; b < i; b++) {
    row += number;
    number++;
  }

  console.log(`${row}`);
}

// e)
// ```
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//     *
//     *
//     *
// ```

console.log("\ne)");
for (i = 1; i <= 5; i++) {
  let row = "";
  for (a = 6; a >= i; a--) {
    row += " ";
  }
  for (b = 1; b <= i; b++) {
    row += " *";
  }
  console.log(`${row}`);
}

for (i = 1; i <= 3; i++) {
  let row = "";
  for (let a = 0; a <= 6; a++) {
    row += " ";
  }
  row += "*";

  for (let a = 0; a <= 6; a++) {
    row += " ";
  }
  console.log(`${row}`);
}
