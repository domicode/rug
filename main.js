$(document).ready(function() {

  $(".box").click(function(event) {
    var box = $(event.target);
    var col = color(box) || "";
    if (event.shiftKey && col == "") {
      $(event.target).addClass("blue")
    } else {
      $(event.target).addClass("red")
    }
    if (gameLost(box)) {
      alert("you lost the game!")
    }
  });
});

function color(div) {
  var div = div
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
  var id = parseInt($(box).attr("id"));
  var nextBox = $("#"+(id+10))
  var nextNextBox = $("#"+(id+20))
  var prevBox = $("#"+(id-10))
  var prevPrevBox = $("#"+(id-20))
  if (color(box) == color(nextBox) &&
      color(box) == color(prevBox) ||
      color(box) == color(nextBox) &&
      color(box) == color(nextNextBox) ||
      color(box) == color(prevBox) &&
      color(box) == color(prevPrevBox)) {
    return true
  } else {
    return false
  };

}