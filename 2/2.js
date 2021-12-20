/////=--------------------PART1--------------------=/////

//Create array of initial data
let fs = require('fs');
let content = fs.readFileSync('input.txt', 'utf8')
let dataArray = content.split("\n");
let horizontalPosition = 0;
let verticalPosition = 0;

dataArray.forEach((data) => {
  const movementArray = data.split(" ");
  movementArray[1] = parseInt(movementArray[1]);
  switch (movementArray[0]) {
    case "forward":
      horizontalPosition += movementArray[1];
      break;
    case "backward":
      horizontalPosition -= movementArray[1];
      break;
    case "down":
      verticalPosition += movementArray[1];
      break;
    case "up":
      verticalPosition -= movementArray[1];
      break;
  };
});

console.log("horizontal: ", horizontalPosition, "vertical: ", verticalPosition, "horizontal * vertical: ", horizontalPosition * verticalPosition);

/////=--------------------PART2--------------------=/////
horizontalPosition = 0;
verticalPosition = 0;
let aim = 0;

dataArray.forEach((data) => {
  const movementArray = data.split(" ");
  movementArray[1] = parseInt(movementArray[1]);
  switch (movementArray[0]) {
    case "forward":
      horizontalPosition += movementArray[1];
      verticalPosition = verticalPosition + (aim * movementArray[1]);
      break;
    case "backward":
      horizontalPosition -= movementArray[1];
      break;
    case "down":
      aim += movementArray[1];
      break;
    case "up":
      aim -= movementArray[1];
      break;
  };
  console.log("hori:", horizontalPosition, "vert:", verticalPosition, "aim:", aim)

});

console.log("horizontal: ", horizontalPosition, "vertical: ", verticalPosition, "horizontal * vertical: ", horizontalPosition * verticalPosition);
