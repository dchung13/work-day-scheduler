//Outputs the current day to the html//
var today = dayjs();
var dayWeek = today.format("[Today is] dddd");
$("#currentDay").text(dayWeek);


//reads each hour block and adds the corresponding class to that hour block//
function setTimePeriod() {

  var presentTime = parseInt(today.format("H"));

  for (i=9; i< 18; i++) {
    var timeBlock = document.getElementById("hour-" + i);

    if (i < presentTime) {
      timeBlock.classList.add("past");
    }
    else if (i > presentTime) {
      timeBlock.classList.add("future");
    }
    else {
      timeBlock.classList.add("present");
    }
  }

}

setTimePeriod();


//adds an eventlistener to the save button to store in local storage//
var saveButton = document.querySelectorAll(".saveBtn");


window.addEventListener("load", function() {
  for (i=9; i < 18; i++) {
    var savedData = localStorage.getItem("hour-" + i);
    if (savedData) {
      inputText.value = savedData;
    }
}
});