/* eslint-disable max-len */
// sum the even numbers of a row given the row number
// [2]
// [4, 6] 2^2 + 2
// [8, 10, 12] 2^3 + 4
// [14, 16, 18, 20] 2^4 + 4
// [22, 24, 26, 28, 30]


const sumEvenRow = (number) => {
  let firstNumber = 2 + ((number - 1) * number);
  let row = [];
  for (let index = 0; index < number; index++) {
    row.push(firstNumber);
    firstNumber += 2;
  }

  return row.reduce((accumalator, currentValue) => accumalator + currentValue);
};

console.log(sumEvenRow(3));
console.log(sumEvenRow(4));
console.log(sumEvenRow(5));

console.log("--------");

const remainingBlocks = (number) => {
  let row = 1;
  while (number - Math.pow(row, 2) >= 0) {
    number -= Math.pow(row, 2);
    row++;
    console.log(
      {number},
      {row}
    );
  }

  return number;
};

console.log(remainingBlocks(27));
console.log(remainingBlocks(36));
console.log(remainingBlocks(112));
console.log(remainingBlocks(47));

console.log(remainingBlocks(0) === 0); //true
console.log(remainingBlocks(1) === 0); //true
console.log(remainingBlocks(2) === 1); //true
console.log(remainingBlocks(4) === 3); //true
console.log(remainingBlocks(5) === 0); //true
console.log(remainingBlocks(6) === 1); //true
console.log(remainingBlocks(14) === 0); //true
