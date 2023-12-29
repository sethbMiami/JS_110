/* eslint-disable max-statements */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const newLineSolution = (text, markers) => {
  let textArray = text.split("\n");
  let solutionArray = [];
  console.log(textArray);
  for (let string of textArray) {
    if (!string) {
      solutionArray.push(string.trimEnd());
      continue;
    }
    for (let index in string) {
      //console.log(string);
      if (markers.includes(string[index]) && index === 0) {
        string = "";
        solutionArray.push(string.trimEnd());
      } else if (markers.includes(string[index])) {
        string = string.slice(0, index);
        solutionArray.push(string.trimEnd());
      }
    }
    solutionArray.push(string);
    console.log(solutionArray);
  }
  return solutionArray.join("\n");
};

// const customTrimEnd = (str) => {
//   let trimmed = str.trimEnd();

//   const newlineRegex = /\n+$/;
//   const newlineMatch = str.match(newlineRegex);

//   if (newlineMatch) {
//     trimmed += newlineMatch[0];
//   }

//   return trimmed;
// }

function solution(text, markers) {
  // TODO
  let newText = text;
  
  
  if (text.includes("\n")) {
    //console.log("first if");
    return newLineSolution(text, markers);
  }
  //console.log("here");
  
  for (let char of newText) {
    let markIndex = 0;
    
    for (let mark of markers) {
      //if (char === mark && newText.indexOf(char) !== -1 && newText.indexOf("\n", newText.indexOf(char)) !== -1) {
      if (char === mark) {
        markIndex = newText.indexOf(char);
        //newLineIndex = newText.indexOf("\n", newText.indexOf(char));
        //newText = customTrimEnd(newText.slice(0, markIndex)) + customTrimEnd(newText.slice(newLineIndex));
        newText = newText.slice(0, markIndex);
      } 
//     else if (char === mark && newText.indexOf(char) !== -1) {
//         //console.log("here");
//         markIndex = newText.indexOf(char);
//         newText = newText.slice(0, markIndex);
//       } else if (newText.indexOf("\n", newText.indexOf(char)) !== -1) {
//         newText = customTrimEnd(newText);
//       }
    }
  }
  return newText.trimEnd();
}

let test = "#aa bb\ncc dd";
let markers = ["#"];
console.log("here");
console.log(solution(test, markers));
console.log("here");
