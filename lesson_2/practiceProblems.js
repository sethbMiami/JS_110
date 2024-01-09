/* eslint-disable indent */
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

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let newTruth = {};
for (let item in truthiness) {
  newTruth[item] = [...truthiness[item]];
}
console.log(newTruth);


//keep only multiples of 3

let arrThree = [[2], [3, 5, 7], [9], [11, 15, 18]];

let threeCopy = arrThree.slice().map((array) => {
  return array.filter((number) => number % 3 === 0);
});

console.log(threeCopy);

//sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arrOdd = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arrOdd.sort((a, b) => {
  let oddA = a.filter((num) => num % 2 === 1).reduce((acc, cv) => acc + cv);
  let oddB = b.filter((num) => num % 2 === 1).reduce((acc, cv) => acc + cv);

  return oddA - oddB;
});

console.log(arrOdd);

//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

//Given the following data structure write some code to return an array containing the colors of the fruits and the
//sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let objFruit = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let mappedArray = Object.values(objFruit).map((obj) => {
  if (obj['type'] === 'fruit') {
    return obj['colors'].map((color) => color[0].toUpperCase() + color.slice(1));
  }
  return obj['size'].toUpperCase();
});
//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
console.log(mappedArray);
//console.log(Object.keys(objFruit));

//Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr4 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let help = arr4.filter((obj) => {
  return Object.values(obj).every((subArr) => {
    return subArr.every((num) => num % 2 === 0);
  });
});
console.log(help);

//Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.

let arr6 = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let newObj = {};

arr6.forEach((array) => {
  newObj[array[0]] = array[1];
});

console.log(newObj);

//deep copy of the munsters object, whose nested objects cannot be altered.

let munstersDeep = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepCopyMunster = JSON.parse(JSON.stringify(munstersDeep));

deepCopyMunster['herman'] = 5;
console.log(deepCopyMunster);
console.log(munstersDeep);

//5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
//the digits 0-9 and the letters a-f

const createUUID = () => {
  const UUIDarray = 'abcdef0123456789'.split("");
  let UUID = "";

  for (let index = 0; index < 32; index++) {
    let random = Math.floor(Math.random() * UUIDarray.length);
    UUID += UUIDarray[random];
  }
  return `${UUID.slice(0, 9)}-${UUID.slice(9, 13)}-${UUID.slice(13, 17)}-${UUID.slice(17, 21)}-${UUID.slice(21)}`;
};
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());


const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
];

console.log(ARR[1][0].three);

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

todoLists[0]['todos'][2].name = 'Orange Juice';
console.log(todoLists[0].todos);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));

