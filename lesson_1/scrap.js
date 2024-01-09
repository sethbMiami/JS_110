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