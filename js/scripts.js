// Take a number and split it into an array
// Return numbers containing 3 with "Won't you be my neighor?"
// Return numbers containing 2 with "Boop!"
// Return numbers containing 1 with "Beep!"
// Add input field for name and return it as "Won't you be my neighbor, <name>?"

// Business Logic

function roboTranslate(numInput) {
  let numDisplay = [];
  for (let i = 0; i <= numInput; i++) {
    const iString = i.toString();
    if (iString.includes(3)) {
      numDisplay.push("Won't you be my neighbor?");
    } else if (iString.includes(2)) {
      numDisplay.push("Boop!");
    } else if (iString.includes(1)) {
      numDisplay.push("Beep!");
    } else {
    numDisplay.push(i);
    }
  }
  return numDisplay;
}









// UI Logic