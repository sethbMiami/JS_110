//lesson 110 exercises

let randomObject = {
  apple: 'fruit',
  banana: 'fruit',
  broccoli: 'vegetable'
};

// console.log(randomObject);

// randomObject.apple = 'yum';

// console.log(randomObject);

let randomString = "Hello, how, are, you, doing?";
console.log(randomString.split(", "));
let bUnicode = String.fromCharCode(98);
let letterB = bUnicode.charCodeAt();
console.log(bUnicode);
console.log(letterB);

for (let index in randomObject) {
  console.log(`${index} is a ${randomObject[index]}`);
}


const substringArray = (string) => {
  let subArray = [];

  for (let index = 0; index < string.length - 1; index++) {
    for (let index2 = index; index2 < string.length - 1; index2++) {
      let substr = string.slice(index, index2 + 2);
      subArray.push(substr);
    }
  }
  return subArray;
};

const palindromeCheck = (string) => {
  return string === string.split("").reverse().join("");
};

const palindromeSubstrings = (string) => {
  let paliArray = [];

  substringArray(string).forEach((substr) => {
    if (palindromeCheck(substr)) {
      paliArray.push(substr);
    }
  });

  return paliArray;
};


console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings("")); // []

let wordsArray = ['first', 'second', 'third', 'lecond'];

let lengthArray = wordsArray.map((word) => word.length);
console.log(lengthArray);
console.log(lengthArray.indexOf(Math.max(...lengthArray)));

let specialString = "This is a new line \nSo what if...";
let specialIndex = specialString.indexOf('\n');
console.log(specialString.slice(specialIndex));
console.log("skip line");
//console.log("\n");
//console.log();
let testCase4 = "\n f\naojdjf";
console.log(testCase4);
//console.log(testCase4.slice(0, 2) + testCase4.slice(3));
console.log(testCase4.split("\n"));
let joinMe = testCase4.split("\n");
console.log(joinMe.join("\n"));

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

const selectFruit = (object, string) => {
  let fruitObject = {};
  for (let key of Object.entries(object)) {
    //console.log(key);
    if (key[1] === string) {
      fruitObject[key[0]] = string;
    }
  }

  return fruitObject;
};

console.log(selectFruit(produce, "Vegetable"));

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

//implement this to mutate array

const doubleNumbers = (array, number) => {
  let newArray = [];
  for (let item of array) {
    newArray.push(item * number);
  }
  return newArray;
};

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers, 6)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

//Try coding a solution that doubles the numbers that have odd indices:

const doubleOddNumbers = (array) => {
  for (let index in array) {
    if (index % 2 !== 0) {
      array[index] *= 2;
    }
  }
  return array;
};

let newNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(newNumbers));  // => [2, 4, 6, 14, 2, 6]

console.log(newNumbers);

let callbackArray = ["hello", "goodbye", "whatup"];

callbackArray.forEach((item, index) => console.log({item}, {index}));

let arr = [ 2, 4, 6];
arr['foo'] = 'me';
console.log(arr);
console.log(arr.length);
console.log(Object.keys(arr).length);
