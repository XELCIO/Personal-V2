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

const postActionsControllers = document.querySelectorAll(
  ".post-actions-controller"
);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent) {
      const isVisible = postActionsContent.getAttribute("data-visible");

      if (isVisible === "false") {
        postActionsContent.setAttribute("data-visible", "true");
        postActionsContent.setAttribute("aria-hidden", "false");
        btn.setAttribute("aria-expanded", "true");
      } else {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
});

function handleClickOutside(event) {
  postActionsControllers.forEach((btn) => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (
      postActionsContent &&
      postActionsContent.getAttribute("data-visible") === "true"
    ) {
      if (!postActionsContent.contains(event.target) && event.target !== btn) {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
}

document.addEventListener("click", handleClickOutside);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const likeBtns = document.querySelectorAll(".post-like");

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("active")) {
      likeBtn.classList.remove("active");
    } else {
      likeBtn.classList.add("active");
    }
  });
});

// Swiper

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 400,
  mousewheel: {
    invert: false
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// Redirect

function redirectToCube() {
  window.location.href = "/v2/games/the-cube-master/index.html";
}

function redirectTo2048() {
  window.location.href = "/v2/games/2048/index.html";
}

function redirectToSudoku() {
  window.location.href = "/v2/games/sudoku/index.html";
}

function redirectToTetris() {
  window.location.href = "/v2/games/tetris/index.html";
}

function redirectToTicTacToe() {
  window.location.href = "/v2/games/tic-tac-toe/index.html";
}

function redirectToTowerBlock() {
  window.location.href = "/v2/games/tower-block/index.html";
}

function redirectToSliders() {
  window.location.href = "/others/sliders/index.html";
}

function redirectToMusic() {
  window.location.href = "music-player.html";
}

function showPopup() {
  document.getElementById("popupBox").style.display = "block";
}

function hidePopup() {
  document.getElementById("popupBox").style.display = "none";
}
var backgroundMusic = document.getElementById("backgroundMusic");

function playBackgroundMusic() {
  backgroundMusic.play();
}

function hidePopupAndPlayMusic() {
  hidePopup();
  playBackgroundMusic();
}
