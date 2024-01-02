/* eslint-disable max-len */
//What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

//What is the return value of map in the following code? Why?

let me = [1, 2, 3].map(num => {
  num * num;
});

console.log(me);

//The following code differs slightly from the above code. What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

//What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

//What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

//How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

//What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintObject = {};
flintstones.forEach((element, index) => {
  flintObject[element] = index;
});

console.log(flintObject);

//Add up all of the ages from the Munster family object:


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let addedAges = Object.values(ages).reduce((accumalator, currentValue) => accumalator + currentValue);
console.log(addedAges);

//Pick out the minimum age from our current Munster family object:

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Math.min(...Object.values(ages2)));

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let letterCount = {};

statement.split("").forEach((element) => {
  if (element !== " " && letterCount.hasOwnProperty(element)) {
    letterCount[element] += 1;
  } else if (element !== " ") {
    letterCount[element] = 1;
  }
});

console.log(letterCount);