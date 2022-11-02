<script>
// import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
import { onMounted } from 'vue';

export default {
	name: 'Home',
	components: {
		// AppBanner,
		ProjectsGrid,
		Button,
	},
	setup() {
		onMounted(() => {
			// window.onload = () => {
			// 	// eslint-disable-next-line
			// 	Particles.init({
			// 		selector: '#main-bg',
			// 		maxParticles: 300,
			// 		speed: 1,
			// 		sizeVariations: 5,
			// 	});				
			// }
			// eslint-disable-next-line
			Particles.init({
				selector: '#main-bg',
				maxParticles: 300,
				speed: 1,
				sizeVariations: 5,
			});	
		});
	}
};
</script>

<template>
	<canvas id="main-bg"></canvas>
	<div class="container mx-auto">
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
#main-bg {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
}
</style>
