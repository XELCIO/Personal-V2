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

function showPopup() {
  // Tampilkan pop-up
  document.getElementById('popupBox').style.display = 'block';
}

function hidePopup() {
  // Sembunyikan pop-up
  document.getElementById('popupBox').style.display = 'none';
}
var backgroundMusic = document.getElementById("backgroundMusic");

function playBackgroundMusic() {
  backgroundMusic.play();
}

function hidePopupAndPlayMusic() {
  hidePopup(); // Panggil fungsi hidePopup untuk menyembunyikan pop-up
  playBackgroundMusic(); // Panggil fungsi playBackgroundMusic untuk memainkan musik latar belakang
}