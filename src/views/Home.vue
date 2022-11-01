<script>
// import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
// import "particles.js";

// const particlesJSON = {
// 				"particles": {
// 					"number": {
// 						"value": 40,
// 						"density": {
// 							"enable": true,
// 							"value_area": 500
// 						}
// 					},
// 					"color": {
// 						"value": "#fff"
// 					},
// 					"shape": {
// 						"type": "polygon",
// 						"stroke": {
// 							"width": 3,
// 							"color": "#001371"
// 						},
// 						"polygon": {
// 							"nb_sides": 6
// 						},
// 						"image": {
// 							"src": "https://previews.123rf.com/images/tmricons/tmricons1707/tmricons170700152/81206147-html-code-icon.jpg",
// 							"width": 100,
// 							"height": 100
// 						}
// 					},
// 					"opacity": {
// 						"value": 0.5,
// 						"random": true
// 					},
// 					"size": {
// 						"value": 10,
// 						"random": true
// 					},
// 					"line_linked": {
// 						"enable": false,
// 						"distance": 200,
// 						"color": "#001371",
// 						"opacity": 0.3,
// 						"width": 2
// 					},
// 					"move": {
// 						"enable": true,
// 						"speed": 5,
// 						"direction": "bottom",
// 						"random": true,
// 						"straight": true,
// 						"out_mode": "out",
// 						"bounce": false,
// 						"attract": {
// 							"enable": false,
// 							"rotateX": 600,
// 							"rotateY": 1200
// 						}
// 					}
// 				},
// 				"interactivity": {
// 					"detect_on": "canvas",
// 					"events": {
// 						"onhover": {
// 							"enable": true,
// 							"mode": [
// 								"grab",
// 								"bubble"
// 							]
// 						},
// 						"onclick": {
// 							"enable": true,
// 							"mode": "push"
// 						},
// 						"resize": true
// 					},
// 					"modes": {
// 						"grab": {
// 							"distance": 400,
// 							"line_linked": {
// 								"opacity": 0.7
// 							}
// 						},
// 						"bubble": {
// 							"distance": 600,
// 							"size": 12,
// 							"duration": 1,
// 							"opacity": 0.8,
// 							"speed": 2
// 						},
// 						"repulse": {
// 							"distance": 400,
// 							"duration": 0.4
// 						},
// 						"push": {
// 							"particles_nb": 20
// 						},
// 						"remove": {
// 							"particles_nb": 10
// 						}
// 					}
// 				},
// 				"retina_detect": true
// 			}

// 			let particlesJS;

export default {
	name: 'Home',
	components: {
		// AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<canvas id="main-bg"></canvas>
		<!-- Banner -->
		<!-- <AppBanner class="mb-5 sm:mb-8" /> -->

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div>
	</div>
</template>

<style scoped>
</style>
