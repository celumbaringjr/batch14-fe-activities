const inputName = document.getElementById("name");
const inputFocus = document.getElementById("focus");

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    inputName.innerHTML = "[Enter Name]";
  } else {
    inputName.innerHTML = localStorage.getItem("name");
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    inputFocus.innerHTML = "";
  } else {
    inputFocus.innerHTML = localStorage.getItem("focus");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      inputName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      inputFocus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

inputName.addEventListener("keypress", setName);
inputName.addEventListener("blur", setName);
inputFocus.addEventListener("keypress", setFocus);
inputFocus.addEventListener("blur", setFocus);

//Run
getName();
getFocus();
