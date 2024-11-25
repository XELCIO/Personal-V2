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
  
  const copyIcons = document.querySelectorAll(".header-container img");
  
  copyIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const h1Text = this.parentElement.querySelector("h1").innerText;
  
      navigator.clipboard
        .writeText(h1Text)
        .then(() => {
          const popover = this.parentElement.querySelector(".popover");
          popover.classList.add("show");
  
          setTimeout(() => {
            popover.classList.remove("show");
          }, 2000);
        })
        .catch((err) => {
          console.error("Gagal menyalin: ", err);
        });
    });
  });
  