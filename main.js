$(document).ready(function() {
  newGame();
  $(".box").click(function(event) {
    var box = $(event.target);
    var col = color(box) || "";
    if (event.shiftKey && col == "") {
      $(event.target).addClass("blue");
    } else {
      $(event.target).addClass("red");
    }
    if (gameLost(box)) {
      alert("you lost the game!");
    }
  });
});

function newGame() {
  var times = 15;
  for (var i = 0; i < times; i++) {
    var id = Math.floor((Math.random() * 100 + 1));
    $("#"+id).addClass("red");
  };
  for (var i = 0; i < times; i++) {
    var id = Math.floor((Math.random() * 100 + 1));
    $("#"+id).addClass("blue");
  };
}

// gest the color of the passed div, only works if the div has 2 classes
function color(div) {
  var div = div;
  var color = div.attr("class").split(" ")[1];
  return color;
}

function gameLost(box) {
  // check if the boxes on the left or right add up to 3 same colors
  if (box.attr("class") == box.next().attr("class") && 
      box.attr("class") == box.next().next().attr("class") || 
      box.attr("class") == box.prev().attr("class") && 
      box.attr("class") == box.prev().prev().attr("class") ||
      box.attr("class") == box.prev().attr("class") && 
      box.attr("class") == box.next().attr("class")) {
    return true
  } 
  // check there are 3 following colors in the row
  var id = parseInt($(box).attr("id"));
  var nextBox = $("#"+(id+10));
  var nextNextBox = $("#"+(id+20));
  var prevBox = $("#"+(id-10));
  var prevPrevBox = $("#"+(id-20));
  if (color(box) == color(nextBox) &&
      color(box) == color(prevBox) ||
      color(box) == color(nextBox) &&
      color(box) == color(nextNextBox) ||
      color(box) == color(prevBox) &&
      color(box) == color(prevPrevBox)) {
    return true;
  } else {
    return false;
  };
}