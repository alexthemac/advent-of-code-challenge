/////=--------------------PART1--------------------=//////
// The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.
// To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.)


//Create array of initial data
let fs = require('fs');
let content = fs.readFileSync('input.txt', 'utf8')
let dataArray = content.split("\n").map((stringData) => parseInt(stringData));

//Start with first position as prevNumber. Don't want to consider first measurement as an increase
let prevNumber = dataArray[0];
let countDepthIncrease = 0;

//Find number of times depth increases
for (let i = 1; i < dataArray.length; i++) {
  if (dataArray[i] > prevNumber) {
    countDepthIncrease++;
  }
  prevNumber = dataArray[i];
};

console.log("increase", countDepthIncrease);

/////=--------------------PART2--------------------=//////

let prevSum = dataArray[0] + dataArray[1] + dataArray[2];
let countSumIncrease = 0;

//Find number of times depth increases
for (let i = 1; i < dataArray.length; i++) {
  let currentSum = dataArray[i] + dataArray[i + 1] + dataArray[i + 2];
  if (currentSum > prevSum) {
    countSumIncrease++;
  }
  prevSum = currentSum;
};

console.log("increase", countSumIncrease);
