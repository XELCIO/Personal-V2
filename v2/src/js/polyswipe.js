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
  
  function redirectToCard() {
    // Redirect ke yey.html
    window.location.href = 'https://shinequeensley.carrd.co/';
  }

  function redirectToMusic() {
    // Redirect ke yey.html
    window.location.href = 'music.html';
  }

  function redirectToflower() {
    // Redirect ke yey.html
    window.location.href = 'flower.html';
  }

  function redirectToheart() {
    // Redirect ke yey.html
    window.location.href = 'heart.html';
  }

  function redirectTohidden() {
    // Redirect ke yey.html
    window.location.href = 'hidden.html';
  }

  function redirectToGallery() {
    // Redirect ke yey.html
    window.location.href = 'gallery.html';
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
  