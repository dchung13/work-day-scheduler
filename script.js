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

var textInputs = document.getElementById("textarea");
//adds an eventlistener to the save button to store in local storage//
document.addEventListener("DOMContentLoaded", function() {

  $(".saveBtn").on("click", function() {
    var textAreaEl = $(this).siblings("textarea");
    var textAreaStr = JSON.stringify(textAreaEl.val());
    localStorage.setItem(textAreaEl.attr("id"), textAreaStr);
  })

window.addEventListener("load", function() {
  for (i=9; i < 18; i++) {
    var savedData = JSON.parse(localStorage.getItem("text-" + i));

     if (savedData!== null) {
      $(`#text-${i}`).val(savedData);
     }
   
} 
});
});