var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 500,
  effect: "slide",
  loop: true,
  mousewheel: {
    invert: false,
    sensitivity: 1
  }
});

swiper.enable();

var backgroundMusic = document.getElementById("backgroundMusic");

function playBackgroundMusic() {
  backgroundMusic.play();
}
