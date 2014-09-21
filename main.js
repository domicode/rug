$(document).ready(function() {

  $(".box").click(function(event) {
    var box = $(event.target);
    var col = color(box) || "";
    if (event.shiftKey && col == "") {
      $(event.target).addClass("blue")
    } else {
      $(event.target).addClass("red")
    }
    if (box.attr("class") == box.next().attr("class") && 
        box.attr("class") == box.next().next().attr("class") || 
        box.attr("class") == box.prev().attr("class") && 
        box.attr("class") == box.prev().prev().attr("class") ||
        box.attr("class") == box.prev().attr("class") && 
        box.attr("class") == box.next().attr("class")) {
      alert("you lost the game!")
    }
  });
});

function color(div) {
  var div = div
  var color = div.attr("class").split(" ")[1];
  return color;
}