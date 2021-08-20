// Take a number and split it into an array
// Return numbers containing 3 with "Won't you be my neighor?"
// Return numbers containing 2 with "Boop!"
// Return numbers containing 1 with "Beep!"

// Business Logic

function roboTranslate(numInput) {
  let numDisplay = [];
  for (let i = 0; i <= numInput; i++) {
    const iString = i.toString();
    if (iString.includes(3)) {
      numDisplay.push("Won't you be my neighbor?");
    } else {
    numDisplay.push(i);
    }
  }
  return numDisplay;
}









// UI Logic