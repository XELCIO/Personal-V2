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
    title: "Birds Of A Feather",
    name: "Billie Eilish",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/BIRDS%20OF%20A%20FEATHER.mp3"
  },
  {
    title: "Mean It",
    name: "Lauv & Lany",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/Mean%20It.mp3"
  },
  {
    title: "Cause You Have To",
    name: "Lany",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/Cause%20You%20Have%20To.mp3"
  },
  {
    title: "Never Not",
    name: "Lauv",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/Never%20Not.mp3"
  },
  {
    title: "Welcome And Goodbye",
    name: "Dream Ft. Ivory",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/welcome%20and%20goodbye.mp3"
  },
  {
    title: "White Ferrari",
    name: "Frank Ocean",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/Frank%20Ocean%20-%20White%20Ferrari.mp3"
  },
  {
    title: "Somebody Else",
    name: "The 1975",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/The%201975%20-%20Somebody%20Else.mp3"
  },
  {
    title: "Cheating On You",
    name: "Charlie Puth",
    source: "https://github.com/XELCIO/Personal-V2/raw/refs/heads/main/v2/src/music/Cheating%20on%20You.mp3"
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

particlesJS("particles-js", {
  particles: {
    number: {
      value: 310,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: "#fff"
    },

    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },

      polygon: {
        nb_sides: 5
      }
    },

    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },

    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },

    line_linked: {
      enable: false
    },

    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },

  retina_detect: true
});
