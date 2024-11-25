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
    title: "The Cut That Always Bleeds",
    name: "Conan Gray",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/1.mp3"
  },
  {
    title: "See you again",
    name: "Tyler, The Creator Ft. Kali Uchis",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/2.mp3"
  },
  {
    title: "About You",
    name: "The 1975",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/3.mp3"
  },
  {
    title: "Electric Love",
    name: "Børns",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/4.mp3"
  },
  {
    title: "To The Bone",
    name: "Pamungkas",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/5.mp3"
  },
  {
    title: "The Man Who Cant Be Moved",
    name: "The Script",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/6.mp3"
  },
  {
    title: "Gone, Gone, Gone",
    name: "Phillip Phillips",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/7.mp3"
  },
  {
    title: "Pluto Projector",
    name: "Rex Orange County",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/master/Shine/src/music/8.mp3"
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