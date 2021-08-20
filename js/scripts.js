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
      $(".background-pic").show();
      $(".translate").hide();
      $(".tryagain").show();
  });
})