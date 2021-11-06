//DOM Elements
const time = document.getElementById("time-input");

//Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(), // gets the hours
    min = today.getMinutes(), // gets the minutes
    sec = today.getSeconds(); // gets the seconds

  //Set AM or PM using ternary operator (shorthand for if statement)
  const amPm = hour >= 12 ? "PM" : "AM"; //if hour is greater than or equal to 12, if so, write PM, else, write AM.

  //12 hour Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`;

  //Show Time every Second
  setTimeout(showTime, 1000);
}

//Add zero
function addZero(n) {
  // converts minutes&seconds to have leading 0
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Run
showTime();
