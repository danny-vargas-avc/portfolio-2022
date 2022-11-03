<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import { onMounted } from 'vue';


const particlesJSON = {
	"fps_limit": 30,
  "particles": {
    "number": {
      "value": 700,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#1e3851"
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
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 200,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
	setup() {
		onMounted(() => {
			// eslint-disable-next-line
			particlesJS("main-bg", particlesJSON);
		});
	}
};
</script>

<template>
	<div id="main-bg"></div>
	<div class="container mx-auto" style="position: relative;">
		<ProjectsGrid />
	</div>
</template>

<style scoped>
	#main-bg {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
}
</style>
