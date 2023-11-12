var a = document.querySelectorAll(".drum");

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    var b = this.innerHTML;
    noise(b);
    anime(b);
  });
}

document.addEventListener("keypress", function (e) {
  var c = e.key;
  console.log(c);
  noise(c);
  anime(c);
});

function noise(b) {
  switch (b) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log("error");
  }
}
function anime(k) {
  var g = document.querySelector("." + k);
  g.classList.add("pressed");
  setTimeout(function () {
    g.classList.remove("pressed");
  }, 400);
}
