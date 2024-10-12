var audio = document.getElementById("audioMusic");
var img = document.getElementById("audioImg");

function toggle() {
  if (audio.paused) {
    audio.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

function next() {
  if (audio.src.match("./audio/Doraemon.mp3")) {
    audio.src = "./audio/naruto2.mp3";
    img.src = "./images/naruto2.jpg";
    toggle();
  } else if (audio.src.match("./audio/naruto2.mp3")) {
    audio.src = "./audio/phineasAndFerb.mp3";
    img.src = "./images/phineasAndFerb.jpg";
    toggle();
  } else if (audio.src.match("./audio/phineasAndFerb.mp3")) {
    audio.src = "./audio/naruto3.mp3";
    img.src = "./images/naruto3.jpeg";
    toggle();
  } else if (audio.src.match("./audio/naruto3.mp3")) {
    audio.src = "./audio/Ninja-Hattori.mp3";
    img.src = "./images/ninja-hattori.jpg";
    toggle();
  } else if (audio.src.match("./audio/Ninja-Hattori.mp3")) {
    audio.src = "./audio/naruto1.mp3";
    img.src = "./images/naruto1.jpg";
    toggle();
  } else if (audio.src.match("./audio/naruto1.mp3")) {
    audio.src = "./audio/Shin-Chan.mp3";
    img.src = "./images/shinchan.webp";
    toggle();
  } else if (audio.src.match("./audio/Shin-Chan.mp3")) {
    audio.src = "./audio/Doraemon.mp3";
    img.src = "./images/doraemon.webp";
    toggle();
  }
}

function pre() {
  if (audio.src.match("./audio/Doraemon.mp3")) {
    audio.src = "./audio/Shin-Chan.mp3";
    img.src = "./images/shinchan.webp";
    toggle();
  } else if (audio.src.match("./audio/Shin-Chan.mp3")) {
    audio.src = "./audio/naruto1.mp3";
    img.src = "./images/naruto1.jpg";
    toggle();
  } else if (audio.src.match("./audio/naruto1.mp3")) {
    audio.src = "./audio/Ninja-Hattori.mp3";
    img.src = "./images/ninja-hattori.jpg";
    toggle();
  } else if (audio.src.match("./audio/Ninja-Hattori.mp3")) {
    audio.src = "./audio/naruto3.mp3";
    img.src = "./images/naruto3.jpeg";
    toggle();
  } else if (audio.src.match("./audio/naruto3.mp3")) {
    audio.src = "./audio/phineasAndFerb.mp3";
    img.src = "./images/phineasAndFerb.jpg";
    toggle();
  } else if (audio.src.match("./audio/phineasAndFerb.mp3")) {
    audio.src = "./audio/naruto2.mp3";
    img.src = "./images/naruto2.jpg";
    toggle();
  } else if (audio.src.match("./audio/naruto2.mp3")) {
    audio.src = "./audio/Doraemon.mp3";
    img.src = "./images/doraemon.webp";
    toggle();
  }
}

