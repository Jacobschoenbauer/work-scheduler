//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page
const localInfo1 = document.querySelector(".hourinfo7");
const localInfo2 = document.querySelector(".hourinfo8");
const localInfo3 = document.querySelector(".hourinfo9");
const localInfo4 = document.querySelector(".hourinfo10");
const localInfo5 = document.querySelector(".hourinfo11");
const localInfo6 = document.querySelector(".hourinfo12");
const localInfo7 = document.querySelector(".hourinfo13");
const localInfo8 = document.querySelector(".hourinfo14");
const localInfo9 = document.querySelector(".hourinfo15");
const localInfo10 = document.querySelector(".hourinfo16");
const localInfo11 = document.querySelector(".hourinfo17");
const localInfo12 = document.querySelector(".hourinfo18");
const localInfo13 = document.querySelector(".hourinfo19");
const localInfo14 = document.querySelector(".hourinfo20");
//set time and day with moment
let today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm a"));
let allRowArray = document.querySelectorAll(".shift-time");

console.log("Here is: ", allRowArray);
//lets save text to local storage and sae to page
for (i = 0; i < allRowArray.length; i++) {
  console.log($(allRowArray[i]).attr("id"));

  $(".button").on("click", function () {
    var text = $(this).siblings(".thingstodo").val();
    var time = $(this).parent().attr("id");
    window.localStorage.setItem(time, text);
    localInfo1.textContent = localStorage.getItem(7);
    localInfo2.textContent = localStorage.getItem(8);
    localInfo3.textContent = localStorage.getItem(9);
    localInfo4.textContent = localStorage.getItem(10);
    localInfo5.textContent = localStorage.getItem(11);
    localInfo6.textContent = localStorage.getItem(12);
    localInfo7.textContent = localStorage.getItem(13);
    localInfo8.textContent = localStorage.getItem(14);
    localInfo9.textContent = localStorage.getItem(15);
    localInfo10.textContent = localStorage.getItem(16);
    localInfo11.textContent = localStorage.getItem(17);
    localInfo12.textContent = localStorage.getItem(18);
    localInfo13.textContent = localStorage.getItem(19);
    localInfo14.textContent = localStorage.getItem(20);
  });
  $(".clearbutton").on("click", function () {
    window.localStorage.clear();
    window.location.reload();
  });
}
// tracks time by going throw the moment for the hour and comparing it to the id number to change as time changes
function timeTracker() {
  
  for (i = 0; i < allRowArray.length; i++) {
    const coolStull = parseInt($(allRowArray[i]).attr("id"));
    let timeNow = moment().hour()
    console.log(coolStull);
    console.log(timeNow)
    $(".shift-time").each(function () {
      if (coolStull > timeNow) {
        $(allRowArray[i]).removeClass("future");
        $(allRowArray[i]).removeClass("present");
        $(allRowArray[i]).addClass("past");
      } else if (coolStull === timeNow) {
        $(allRowArray[i]).removeClass("past");
        $(allRowArray[i]).removeClass("future");
        $(allRowArray[i]).addClass("present");
      } else {
        $(allRowArray[i]).removeClass("present");
        $(allRowArray[i]).removeClass("past");
        $(allRowArray[i]).addClass("future");
      }
    });
  }
}

timeTracker();
// saves info to the page until new info is added or storage is saved
localInfo1.textContent = localStorage.getItem(7);
localInfo2.textContent = localStorage.getItem(8);
localInfo3.textContent = localStorage.getItem(9);
localInfo4.textContent = localStorage.getItem(10);
localInfo5.textContent = localStorage.getItem(11);
localInfo6.textContent = localStorage.getItem(12);
localInfo7.textContent = localStorage.getItem(13);
localInfo8.textContent = localStorage.getItem(14);
localInfo9.textContent = localStorage.getItem(15);
localInfo10.textContent = localStorage.getItem(16);
localInfo11.textContent = localStorage.getItem(17);
localInfo12.textContent = localStorage.getItem(18);
localInfo13.textContent = localStorage.getItem(19);
localInfo14.textContent = localStorage.getItem(20);
