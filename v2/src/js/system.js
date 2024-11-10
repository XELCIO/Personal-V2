const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");
const songs = [
  {
    title: "Snooze",
    name: "SZA",
    source: "/music/SZA-Snooze.mp3"
  },
  {
    title: "Reminder",
    name: "The Weeknd",
    source: "/music/The Weeknd-Reminder.mp3"
  },
  {
    title: "Cruel Summer",
    name: "Taylor Swift",
    source: "/music/Taylor Swift-Cruel Summer.mp3"
  },
  {
    title: "I Wanna Be Yours",
    name: "Arctic Monkeys",
    source: "/music/Arctic Monkeys-I Wanna Be Yours.mp3"
  },
  {
    title: "Lover Stay",
    name: "Pamungkas",
    source: "/music/Pamungkas-Lover Stay.mp3"
  },
  {
    title: "Malibu Nights",
    name: "LANY",
    source: "/music/LANY-Malibu Nights.mp3"
  },
  {
    title: "Kiss It Better",
    name: "Rihanna",
    source: "/music/Rihanna-Kiss It Better.mp3"
  },
  {
    title: "Separuh Aku",
    name: "Noah",
    source: "/music/NOAH-Separuh Aku.mp3"
  }
];
let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  song.addEventListener("loadeddata", function () {});
}
song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});
song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}
playPauseButton.addEventListener("click", playPause);
progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});
progress.addEventListener("change", function () {
  playSong();
});
forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});
backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});
updateSongInfo();
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward"
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const song = document.getElementById("song");

  // Event listener untuk memunculkan pesan alert hanya saat lagu "Snooze" dimulai
  song.addEventListener("play", function () {
    if (song.src.includes("SZA-Snooze.mp3")) {
      alert("Clue : A Boy In Love");
    }
  });
});
