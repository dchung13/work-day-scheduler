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

var textInputs = [];
//adds an eventlistener to the save button to store in local storage//
document.addEventListener("DOMContentLoaded", function() {


var saveButton9 = document.querySelector("#btn-9");

saveButton9.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[0] = document.querySelector("#text-9");
  //textInputs.push(document.querySelector("#text-9"));
  localStorage.setItem("text-9", JSON.stringify(textInputs[0].value));
});

var saveButton10 = document.querySelector("#btn-10");

saveButton10.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[1] = document.querySelector("#text-10");
  localStorage.setItem("text-10", JSON.stringify(textInputs[1].value));
});

var saveButton11 = document.querySelector("#btn-11");

saveButton11.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[2] = document.querySelector("#text-11");
  localStorage.setItem("text-11", JSON.stringify(textInputs[2].value));
});

var saveButton12 = document.querySelector("#btn-12");

saveButton12.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[3] = document.querySelector("#text-12");
  localStorage.setItem("text-12", JSON.stringify(textInputs[3].value));
});

var saveButton13 = document.querySelector("#btn-13");

saveButton13.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[4] = document.querySelector("#text-13");
  localStorage.setItem("text-13", JSON.stringify(textInputs[4].value));
});

var saveButton14 = document.querySelector("#btn-14");

saveButton14.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[5] = document.querySelector("#text-14");
  localStorage.setItem("text-14", JSON.stringify(textInputs[5].value));
});

var saveButton15 = document.querySelector("#btn-15");

saveButton15.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[6] = document.querySelector("#text-15");
  localStorage.setItem("text-15", JSON.stringify(textInputs[6].value));
});

var saveButton16 = document.querySelector("#btn-16");

saveButton16.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[7] = document.querySelector("#text-16");
  localStorage.setItem("text-16", JSON.stringify(textInputs[7].value));
});

var saveButton17 = document.querySelector("#btn-17");

saveButton17.addEventListener("click", function(event) {
  event.preventDefault();
  textInputs[8] = document.querySelector("#text-17");
  localStorage.setItem("text-17", JSON.stringify(textInputs[8].value));
});

console.log(textInputs[0] + " outside of function");

window.addEventListener("load", function() {
  for (i=9; i < 18; i++) {
    var savedData = localStorage.getItem("text-" + i);
    //console.log(savedData);
    console.log(textInputs);
    /*if (savedData) {
      textInputs[i-9].textContent = JSON.parse(savedData);
  }*/
} //cant read textInputs[], figure out whats wrong here//
});
});