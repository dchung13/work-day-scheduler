# Work Day Scheduler

## Technologies Used
- HTML
- CSS
- Git
- JavaScript
- jQuery
- DayJs

## Description

[Visit the Deployed Site](https://dchung13.github.io/work-day-scheduler/)

This project is an interactive work day scheduler that allows users to plan their day from 9am to 5pm. The schedule will have a grey background if the current time has already passed, a red background if the current time is present time, and a green background if the hour is in the future. The user can input their tasks and the application will save them to local storage. Upon refreshing the page, the application retrieves the saved tasks and displays them on the page.

## Table of Contents 

* [Features](#features)
* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)

## Features
- Interactive schedule from 9am to 5pm
- User input for tasks
- Saving tasks to local storage
- Retrieving saved tasks upon page refresh
- Color coded time blocks based on the tiem the page is accessed

## Code Example


```js
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
```
The above code is used to add a class to the time blocks, based on the current time when the page is loaded.


```js
   $(".saveBtn").on("click", function() {
    var textAreaEl = $(this).siblings("textarea");
    var textAreaStr = JSON.stringify(textAreaEl.val());
    localStorage.setItem(textAreaEl.attr("id"), textAreaStr);
  })

```
The above code adds an on click event listener to all of the save buttons on the page and saves the text in the textarea as a string in localStorage.



```js
window.addEventListener("load", function() {
  for (i=9; i < 18; i++) {
    var savedData = JSON.parse(localStorage.getItem("text-" + i));

     if (savedData!== null) {
      $(`#text-${i}`).val(savedData);
     }
   
} 
```
The above code adds an event listener to the page that will retrieve the saved text from localStorage when the page is refreshed.


## Usage
To use the work day scheduler, input your tasks into the appropriate time slot and click the save button. Your tasks will be saved to local storage and will be retrieved upon refreshing the page.

## Learning Points 

1. jQuery: I learned about using jQuery to simplify JavaScript and used the tools within to create the functions for the save button and load on refresh. [W3 jQuery tutorial website](https://www.w3schools.com/jquery/)
2. DayJs: I used dayjs to input the current time and day to the schedule. [Dayjs](https://day.js.org/)

## Author Info

### David Chung
I am an aspiring web developer making the switch from Psychology to web development.

* [Github](https://github.com/dchung13/)
* [Portfolio](https://dchung13.github.io/David-Chung-Portfolio/) 
* [LinkedIn](https://www.linkedin.com/in/david-chung-77141526b/)


## Credits

Special thanks to Bryan Nguyen for pair programming with me and assisting me with this project.
Visit his: 
* [Github](https://github.com/bryannguyen9/)
* [Portfolio](https://bryannguyen9.github.io/Bryan-Nguyen-Portfolio/)
* [LinkedIn](https://linkedin.com/in/bryannguyen9)


## License

MIT License

Copyright (c) [2023] [David Chung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


