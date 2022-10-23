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
let allRowArray = document.querySelectorAll(".shift-time");

console.log("Here is: ", allRowArray);
for (i = 0; i < allRowArray.length; i++) {
  console.log($(allRowArray[i]).attr("id"));

  $(".button").on("click", function () {
    var text = $(this).siblings(".thingstodo").val();
    var time = $(this).parent().attr("id");
    window.localStorage.setItem(time, text);
   
    
  });

 console.log(localStorage.getItem(7));
 localStorage.getItem(7)
 localStorage.getItem(8)
 localStorage.getItem(9)
 localStorage.getItem(10)
 localStorage.getItem(11)
 localStorage.getItem(12)
 localStorage.getItem(13)
 localStorage.getItem(15)
 localStorage.getItem(16)
 localStorage.getItem(17)
 localStorage.getItem(18)
 localStorage.getItem(19)
 localStorage.getItem(20)
 

 var waterYou = $(allRowArray[i]).attr("id")



  function timeTracker() {
    let timeNow = moment().hour();
    console.log(timeNow)
    $(".shift-time").each(function () {
      if ($(allRowArray[i]).attr("id") > timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if ($(allRowArray[i]).attr("id") === timeNow) {
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
