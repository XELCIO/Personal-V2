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

function checkPassword(event) {
  event.preventDefault();

  var password = document.getElementById("passwordInput").value.toLowerCase(); // Ubah ke huruf kecil untuk mempermudah perbandingan
  var correctPasswordA = "admin";
  var correctPasswordB = "ariellequeensley";

  if (password === correctPasswordA) {
    window.location.href = "../v2/main-page.html";
  } else if (password === correctPasswordB) {
    window.location.href = "../Shine/shine.html";
  } else {
    alert("Password salah. Coba lagi.");
  }
}
