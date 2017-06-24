$(function() {
  $("#accordion").accordion();
});

function myNumbers(endingNumber) {
  var myArray = [];
  for (var i = 1; i <= endingNumber; i++) {
    if (i % 15 === 0) {
      myArray.push("pingPong");
      }
    else if (i % 3 === 0) {
      myArray.push("ping");
    }
    else if (i % 5 === 0) {
      myArray.push("pong");
    } else {
      myArray.push(i);
    }
  }
  return myArray;
}

$(document).ready(function() {
    $("form#userNumber").submit(function(event) {
      $("#pingList").html("");
      var userNumber = parseInt($("input#input-number").val());
      var pingPongArray = myNumbers(userNumber);
      for (var i = 0; i < userNumber; i++) {
        $("#pingList").append("<li>" + pingPongArray[i] + "</li>");
      }
      event.preventDefault();
    })
  });
