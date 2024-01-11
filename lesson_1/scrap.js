/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
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
*/
// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9


function evenOrOddCount(array) {
  let oddCount = 0;
  let evenCount = 0;

  array.forEach((num) => {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });

  return evenCount === 1 && oddCount === 2;
}

function countTriples(array) {
  let count = 0;

  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    for (let middleIndex = outerIndex + 1; middleIndex < array.length; middleIndex++) {
      for (let innerIndex = middleIndex + 1; innerIndex < array.length; innerIndex++) {
        if (evenOrOddCount([array[outerIndex], array[middleIndex], array[innerIndex]])) {
          count++;
        }
      }
    }
  }
  return count ? count : -1;
}

/*
implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within
the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start
removing from the end of the sentence. If it can not be shortened to fit within character
limit, return an empty string. Spaces don’t count for the limit.

// // Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""
*/

/*
PE - 
  shorten a sentence to the given length, but you can only remove vowels in the sequence of a, e, i, o, u and you
  have to remove them starting at the end of the string. If it can't be shortened return
  an empty string
E-
  spaces don't count toward the limit
  given a string
  return a string
  remove only vowels

D-
  array
A -
    #function takes 2 args, arg string and arg number
    turn argString into array and store in variable
    length variable will equal the argArray not including spaces

    keep looping thru array until the length equals the length variable
      declare vowel Array that holds all the vowels in order
      loop thru vowelArray
        if argArray includes a vowel
          find the last index of vowel in the array
          remove that index
          break;
      if argArray doesn't include any more vowels and its still longer than argNumber
        argArray equals an empty array
        break;

    return argArray elements joined together as a string;
*/

const minimumShorten = (string, number) => {
  let arrayOfStrings = string.toLowerCase().split("");
  let trueLength = arrayOfStrings.length - (string.match(/ /g) || []).length;

  while (trueLength > number) {
    let vowelArray = 'aeiou'.split("");
    for (let vowel of vowelArray) {
      if (arrayOfStrings.includes(vowel)) {
        let vowelIndex = arrayOfStrings.lastIndexOf(vowel);
        arrayOfStrings.splice(vowelIndex, 1);
        trueLength--;
        break;
      }
    }
    if (!/[aeiou]/i.test(arrayOfStrings.join("").toLowerCase())) {
      break;
    }
  }
  return trueLength <= number ? arrayOfStrings.join("") : "empty string";
};

console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); //

// 1
// The objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.


// console.log(differenceOfTwo([1, 2, 3, 4]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []


// 2
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.


// console.log(anagramDifference("",""));      // 0
// console.log(anagramDifference("a",""));     // 1
// console.log(anagramDifference("", "a"));    // 1
// console.log(anagramDifference("ab","a"));   // 1
// console.log(anagramDifference("ab","cd"));  // 4
// console.log(anagramDifference("aab","a"));  // 2
// console.log(anagramDifference("a","aab"));  // 2
// console.log(anagramDifference("codewars","hackerrank")); // 10