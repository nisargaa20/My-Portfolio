

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7, // Increased opacity for more visible particles
        "random": true, // Made opacity random
        "anim": {
          "enable": true, // Enabled animation for opacity
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6, // Increased size of particles
        "random": true,
        "anim": {
          "enable": true, // Enabled animation for size
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000", // Changed lines to blue
        "opacity": 0.6, // Increased opacity of lines
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4, // Reduced speed for smoother movement
        "direction": "none",
        "random": true, // Made movement random
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true, // Enabled attraction
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble" // Changed hover mode to bubble
        },
        "onclick": {
          "enable": true,
          "mode": "repulse" // Changed click mode to repulse
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200, // Reduced distance for bubble effect
          "size": 10, // Reduced size for bubble effect
          "duration": 1,
          "opacity": 1, // Increased opacity for bubble effect
          "speed": 3
        },
        "repulse": {
          "distance": 150 // Reduced distance for repulse effect
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#333333", // Dark gray background
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);