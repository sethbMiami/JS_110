/* eslint-disable max-len */
const countCosonants = (string) => {
  const stringWithoutSpaces = string.replace(/\s/g, ''); // Remove spaces
  const regex = /[^aeiouAEIOU]+/g;

  const matches = stringWithoutSpaces.match(regex);

  let maxConsonantCount = 0;
  if (matches) {
    maxConsonantCount = matches.reduce((max, match) => Math.max(max, match.length), 0);
  }

  return maxConsonantCount;
};

const sortStringsByConsonants = (array) => {
  let consonantCountObject = {};

  for (let string of array) {
    consonantCountObject[string] = countCosonants(string);
  }

  let keepOrder = [];
  let sortOrder = [];

  for (let item of Object.entries(consonantCountObject)) {
    if (item[1] < 2) {
      keepOrder.push(item[0]);
    } else {
      sortOrder.push(item);
    }
  }

  let sortedArray = sortOrder.sort((a, b) => b[1] - a[1]).flat();
  sortedArray = sortedArray.filter((item) => typeof item !== "number");
  //console.log(keepOrder);
  //console.log(sortedArray);
  return sortedArray.concat(keepOrder);
};

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

