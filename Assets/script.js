//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page



let today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm a"));
let cycleTime = document.getElementById ([
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
]);
for (i=0; i < cycleTime.length; i++){


console.log(cycleTime[i])


function timeTracker() {
  const timeNow = moment().hour();
  $(".shift-time").each(function () {
    if (cycleTime[i] < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (cycleTime[i] === timeNow) {
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
}

timeTracker();
