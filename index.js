let lengthOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < lengthOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    buttonClick(buttonInnerHTML);
    animationWhenClicked(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  buttonClick(event.key); // key is the property of keypress event listner
  animationWhenClicked(event.key);
});

function buttonClick(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function animationWhenClicked(click) {
  let activeButton = document.querySelector("." + click);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
