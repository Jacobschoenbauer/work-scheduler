//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page

var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm a"));



function timeTracker() {
  var timeNow = moment().hour();
  $(".shift-time").each(function () {
    var cycleTime = $(this).attr("id")[1];

    if (cycleTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (cycleTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
timeTracker();
