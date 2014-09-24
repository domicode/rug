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
  var times = 101;
  var colors = ["red", "blue"]
  for (var i = 1; i < times; i += 2) {
    var box = $("#"+i).addClass(colors[Math.floor(Math.random() * 2)]);
    checkBoard(box)
  };
  for (var i = 2; i < times; i += 2) {
    var box = $("#"+i).addClass(colors[Math.floor(Math.random() * 2)]);
    checkBoard(box)
  };
  for (var i = 1; i < times; i++) {
    var box = $("#"+i);
    checkBoard(box)
  };
}

function checkBoard(box) {
  var col = color(box)
  if (gameLost(box)) {
    if (col == "red") {
      $(box).removeClass("red");
      $(box).addClass("blue");
    } else {
      $(box).removeClass("blue");
      $(box).addClass("red");        
    }
  }
}

// gest the color of the passed div, only works if the div has 2 classes
function color(div) {
  var div = div;
  if (div.attr("class") != null ) {
    var color = div.attr("class").split(" ")[1];
    return color;
  } else {
    return false
  }
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