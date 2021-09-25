$(document).ready(function() {
  // Track save button clicks
  $(".saveBtn").on("click", function() {
    // Obtain values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save 
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    // Hour count
    var currentHour = moment().hours();

    // Loop
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Track past time criteria
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // Interval to determine if time updates are required
  var interval = setInterval(hourUpdater, 15000);

  // Loads saved data
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Shows current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
