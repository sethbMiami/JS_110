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