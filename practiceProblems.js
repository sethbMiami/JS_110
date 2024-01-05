/* eslint-disable max-len */
// order array numerically
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => b - a);
console.log(arr);

//How would you order the following array of objects based on the year of
//publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let test = books.sort((a, b) => {
  return a['published'] - b['published'];
});

//console.log(books);
console.log(test);


//For each of these collection objects, demonstrate how you would access the letter g.


let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1.flat().flat()[6]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);

//For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr11 = [1, [2, 3], 4];
arr11[1][1] = 4;
console.log(arr11);

let arr12 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr12[2] = 4;
console.log(arr12);

let obj11 = { first: [1, 2, [3]] };
obj11.first[2][0] = 4;
console.log(obj11);

let obj12 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj12['a']['a'][2] = 4;
console.log(obj12);

//Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// let totalAge = Object.values(munsters).map((age) => {
//   return age['age'];
// }).reduce((a, b) => a + b);

let totalAge = Object.values(munsters).filter((object) => {
  return object['gender'] === 'male';
}).map((object) => object['age']).reduce((a, b) => a + b);
console.log(totalAge);

let tattleAge = Object.values(munsters).map((object) => {
  if (object['gender'] === 'male') {
    return object['age'];
  }
  return 0;
}).reduce((a, b) => a + b);

console.log(tattleAge);

//Given this previously seen family object, print the name, age, and gender of each family member:
//(Name) is a (age)-year-old (male or female).

Object.values(munsters).forEach((object, index) => {
  let names = Object.keys(munsters);
  console.log(`${names[index]} is a ${object.age}-year-old ${object.gender}`);
});

//Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).map((object) => {
  return object.forEach((word) => console.log(word.split("").filter((letter) => "AEIOUaeiou".includes(letter)).join("")));
});

//Given the following data structure, return a new array with the same structure, but with the values in each
//subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr5 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sorted = arr5.map((array) => {
  if (typeof array[0] === 'number') {
    return array.sort((a, b) => a - b);
  }
  return array.sort();
});

console.log(sorted);

//desending

let reverse = sorted.map((array) => array.reverse());
console.log(reverse);

//use map to increment by 1 don't mutate original

let arr8 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let plusOne = arr8.map(obj => {
  let incrementedObj = {};
  console.log(Array.isArray(obj));
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
});

console.log(plusOne);
console.log(arr8);

//Create a deep copy of the following nested array.

const arrCop = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let deepCopy = JSON.parse(JSON.stringify(arrCop));
console.log(deepCopy);
console.log(JSON.stringify(arrCop));