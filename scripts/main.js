/*document.querySelector('h2').onclick = function() {
    alert('kill yourself')
}*/

/* img switching code */
let myText = document.querySelector("h2");
let myImage = document.querySelector("img");

myText.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/anti-horny-pills-doge.jpg") {
    myImage.setAttribute("src", "images/you-horny-doge.jpeg");
  } else {
    myImage.setAttribute("src", "images/anti-horny-pills-doge.jpg");
  }
};

/* button switchhing code */
let myButton = document.querySelector("button");
let myHeading = document.getElementById("user-message");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Don't be horny, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Don't be horny, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
