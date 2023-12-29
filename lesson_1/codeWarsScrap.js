/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable max-len */
// const customTrimEnd = (str) => {
//   let trimmed = str.trimEnd();

//   const newlineRegex = /\n+$/;
//   const newlineMatch = str.match(newlineRegex);

//   if (newlineMatch) {
//     trimmed += newlineMatch[0];
//   }

//   return trimmed;
// };

// function solution(text, markers) {
//   let newText = text;
//   let newArray = [];

//   for (let char of newText) {
//     for (let mark of markers) {
//       if (char === mark && newText.indexOf(char) !== -1 && newText.indexOf("\n", newText.indexOf(char)) !== -1) {
//         const markIndex = newText.indexOf(char);
//         const newLineIndex = newText.indexOf("\n", newText.indexOf(char));
//         newArray.push(newText.slice(0, markIndex) + newText.slice(newLineIndex));
//       } else if (char === mark && newText.indexOf(char) !== -1) {
//         const markIndex = newText.indexOf(char);
//         newArray.push(newText.slice(0, markIndex));
//       }
//     }
//   }

//   return customTrimEnd(newText);
// }


const solution = (text, markers) => {
  let textArray = text.split("\n");
  let solutionArray = [];

  for (let string of textArray) {
    if (!string) {
      solutionArray.push(string.trimEnd());
      continue;
    }
    for (let index in string) {
      if (markers.includes(string[index]) && index === 0) {
        string = "";
        solutionArray.push(string.trimEnd());
      } else if (markers.includes(string[index])) {
        string = string.slice(0, index);
        solutionArray.push(string.trimEnd());
      }
    }
  }
  console.log(textArray);
  return solutionArray.join("\n");
};

let text = "@*%yYQej*n\n \\*CHOt#^FRCTQC\nWhcNP@g@KDtYXgMRYbPnAB hp";
let  markers = ["-","\\","@","*","!","^","%","$","#","~"];
//console.log("---");
console.log(solution(text, markers));
console.log("---");

let seth = '\nWhcNP';
let answer = '\n\nWhcNP';
//console.log(answer);