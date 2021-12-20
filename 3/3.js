/////=--------------------PART1--------------------=/////

//Create array of initial data
let fs = require('fs');
let content = fs.readFileSync('input.txt', 'utf8')
let dataArray = content.split("\n");
let cumulativeBinaryDataArray = [];

for (let i = 0; i < dataArray[0].length; i++) {
  cumulativeBinaryDataArray.push({0: 0, 1: 0});
}

dataArray.forEach((binaryString) => {
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      cumulativeBinaryDataArray[i][1]++;  
    } else if (binaryString[i] === "0") {
      cumulativeBinaryDataArray[i][0]++;
    }
  };
});

let gammaString = "";
let epsilonString = "";

cumulativeBinaryDataArray.forEach((value) => {
  if (value[0] > value[1]) {
    // console.log("1 greater than 0")
    gammaString += 0;
    epsilonString += 1;
  } else {
    gammaString += 1;
    epsilonString += 0;
  }
})

const gamma = parseInt(gammaString, 2);
const epsilon = parseInt(epsilonString, 2);

console.log(cumulativeBinaryDataArray);
console.log("GAMMA:", gammaString, gamma, "EPSILON:", epsilonString, epsilon, "GAMMA * EPSILON:", gamma * epsilon);

// /////=--------------------PART2--------------------=/////



// console.log("horizontal: ", horizontalPosition, "vertical: ", verticalPosition, "horizontal * vertical: ", horizontalPosition * verticalPosition);
