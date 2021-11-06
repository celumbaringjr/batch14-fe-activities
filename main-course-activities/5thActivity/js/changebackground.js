//DOM Elements
const greeting = document.getElementById("greeting");

//Set Background and Greeting
function changeBg() {
  let hour = new Date().getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url(images/morning.jpg)";
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url(images/afternoon.jpg)";
    greeting.textContent = "Good afternoon, ";
  } else {
    //Evening
    document.body.style.backgroundImage = "url(images/evening.jpg)";
    greeting.textContent = "Good evening, ";
  }
}

changeBg();
