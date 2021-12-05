$(document).ready(function () {
  var number = parseInt($("#ltc-mined").text(), 10) || 0; // Get the number from paragraph

  // Called the function in each second
  var interval = setInterval(function () {
    $("#ltc-mined").text(number++); // Update the value in paragraph

    if (number > 1000) {
      clearInterval(interval); // If exceeded 100, clear interval
    }
  }, 1000); // Run for each second
});
