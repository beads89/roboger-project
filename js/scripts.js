// Take a number and split it into an array   // DONE
// Return numbers containing 3 with "Won't you be my neighor?"    // DONE
// Return numbers containing 2 with "Boop!"   // DONE
// Return numbers containing 1 with "Beep!"   // DONE
// Separate strings with a
// Add input field for name and return it as "Won't you be my neighbor, <name>?"

// Business Logic

function roboTranslate(numInput) {
  let numDisplay = [];
  for (let i = 0; i <= numInput; i++) {
    let iString = i.toString();
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
  return numDisplay.join(", ");
}


// UI Logic

$(document).ready(function() {
  $("form#roboSpeak").submit(function(e) {
    e.preventDefault();
    let numInput = $("#numInput").val();
    let translate = roboTranslate(numInput);
      $("#numOutput").text(translate);
  });
})