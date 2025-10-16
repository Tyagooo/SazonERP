particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#0077b6" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00b4d8",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto 🍽️");
});