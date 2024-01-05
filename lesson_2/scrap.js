/* eslint-disable max-len */
console.log(Math.pow(2, 0));

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  //console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4
// a is 9 and b is 4
// a is 2 and b is 4
// a is 11 and b is 107
// a is 107 and b is 21
// a is 11 and b is 21
// a is 107 and b is 1
// a is 21 and b is 1
// a is 11 and b is 1
// a is 9 and b is 1
// a is 4 and b is 1
// a is 2 and b is 1
// => [ 1, 2, 4, 9, 11, 21, 107 ]

let words = ['go', 'ahead', 'and', 'jump'];

console.log(words.sort((a, b) => a.length - b.length));

let nestedArray = [[[1, 2], [3, 4]], [['a', 'b'], ['c', 'd']]];
nestedArray[1].push(['f', 'g']);
nestedArray[1][2].push('e');
console.log(nestedArray);
let unNestedArray = nestedArray.flat();
console.log(unNestedArray);
let flatArray = unNestedArray.flat();
console.log(flatArray);
let evenMoreFlat = flatArray.join(", ");
console.log(evenMoreFlat);

let nestedArrayObj = [];
nestedArrayObj.push({ a: 1 }, { b: 2 });
console.log(nestedArrayObj);
nestedArrayObj[0]['hi'] = 3;
nestedArrayObj[1]['bye'] = 4;
console.log(nestedArrayObj);
nestedArrayObj[1]['bye'] = 7;
console.log(nestedArrayObj);

//spread syntax

let copyArray = [...words];
console.log(copyArray);

//making a deep copy

let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
let shallowCopy = [...arr];
shallowCopy[0]['c'] = 'naw';

console.log(shallowCopy);
deepCopiedArr[1].push('baz');
console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
console.log(arr);           // => [ { b: 'foo' }, [ 'bar' ] ]

let functionArray = [];
const hello = () => 'hi';
functionArray.push(hello);
console.log(functionArray);
console.log(functionArray[0]());

const addNumbers = (number1, number2) => number1 + number2;
functionArray.push(addNumbers);
console.log(functionArray);
console.log(functionArray[1](1, 4));

let numberNestedArray = [[1, 3], [2, 4], [3, 6]];
let squaredFirstIndex = numberNestedArray.map((array) => array[0] + array[1]);
let filteredArray = numberNestedArray.filter((array) => {
  console.log(array);
  return array[1] >= 3;
});
//console.log(squaredFirstIndex);
console.log(filteredArray);

let showMe = [[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

console.log(showMe);

const nestedArray2 = [[1, 2], [3, 4], [5, 6]];

let filteredArray2 = nestedArray2.map((outerArray) => {
  return outerArray.map((number) => number * number);
});

// const filteredArray2 = nestedArray2
//   .flat() // Flatten the nested arrays innerArray => innerArray
//   .filter(number => number > 2);

console.log(filteredArray2);

let showObject = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
console.log(showObject);

let tripleNest = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.map(element2 => {
    return element2.filter(element3 => {
      return String(element3).length > 0;
    });
  });
});

console.log(tripleNest);
// => [ undefined, undefined ]