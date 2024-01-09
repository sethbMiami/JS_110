/* eslint-disable max-len */
// program walk-thru

let array = [[1, 2, 3], [4, 5, 6]];

let test = array.map((arr) => {
  return arr.filter((num) => num % 2 === 0);
});

console.log(test);

let gloves = ['yellow', 'red', 'red', 'yellow', 'blue', 'yellow', 'blue'];

let answer = gloves.filter((color, index) => color === gloves[gloves.indexOf(color, index + 1)]);
console.log(answer);

const sumOfArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

const leftEqualsRight = (array) => {

  for (let index = 0; index < array.length; index++) {
    if (sumOfArray(array.slice(0, index)) === sumOfArray(array.slice(index + 1))) {
      return index;
    }
  }

  return -1;
};

function twoSum(numbers, target) {

  for (let index = 0; index < numbers.length; index++) {
    for (let index2 = index + 1; index2 < numbers.length; index2++) {
      if (numbers[index] + numbers[index2] === target) {
        return [index, index2];
      }
    }
  }
  return null;
}

/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" };
Object.freeze(obj);

/**
 * BONUS: 
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accomidate any word between the single quotes
 */
const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" };
const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" };
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);






/** for loop - function name: forSolution */ 
const forSolution = (object) => {
  let values = Object.values(object).join(" ").split(" ");
  let joinArray = [];
  values.forEach((word, index) => {
    let letterIndex = values.indexOf('letter');
    if (index > letterIndex) {
      word = word.replaceAll('e', '');
    }
    joinArray.push(word);
  });
  return joinArray.join(" ");
};
console.log(forSolution(obj));




/** while loop - function name: whileSolution */





/** do while loop - function name: doWhileSolution */





/** forEach iteration method  - function name: forEachSolution */





/** filter iteration method  - function name: 'filterSolution' */





// map iteration method





// reduce iteration method