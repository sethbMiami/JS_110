//helper functions
const containsMarker = (string, array) => {
  for (let mark of array) {
    if (string.includes(mark)) {
      return true;
    }
  }
  return false;
};

const containsNewLine = (string) => {
  return string.includes("\n");
};

const markRemoval = (string, array) => {
  for (let char of string) {
    if (array.includes(char)) {
      return string.slice(0, string.indexOf(char)).trimEnd();
    }
  }
  return string.trimEnd();
};

const markRemovalNewLine = (string, array) => {
  let stringToArray = string.split("\n");
  let markRemovedArray = [];

  console.log(stringToArray);

  for (let item of stringToArray) {
    markRemovedArray.push(markRemoval(item, array));
    console.log(item.includes("\n"));
  }
  console.log(markRemovedArray);
  return markRemovedArray.join("\n");
};

// main function
const solution = (text, markers) => {
  if (!containsMarker(text, markers) && !containsNewLine(text)) {
    return text.trimEnd();
  }

  if (!containsNewLine(text)) {
    return markRemoval(text, markers);
  }

  return markRemovalNewLine(text, markers);
};

console.log("line here");
console.log(solution("Xq~  T \nCxI/EoZtU #", ["%","#","^","+","/","@"]));
console.log("line here");


//THIS SOLUTION WORKED FOR ALL TEST CASES!!!

const uniqueInOrder = (string) => {
  console.log(String(string).split("").filter((item, index) => item !== string[index + 1]));
  return String(string).split("").filter((item, index) => item !== string[index + 1]);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3])       == [1,2,3]);

console.log(1 + '+' + 4);

/* 1
// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0.

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

*/

/*
implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.

// // Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""
*/