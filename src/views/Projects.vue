<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import { onMounted } from 'vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
	setup() {
		onMounted(() => {
			window.requestAnimationFrame(() => {
				// eslint-disable-next-line
				Particles.init({
					selector: '#main-bg',
					maxParticles: 300,
					speed: 1,
					sizeVariations: 5,
				});				
			});
		});
	}
};
</script>

<template>
	<canvas id="main-bg"></canvas>
	<div class="container mx-auto" style="position: relative;">
		<ProjectsGrid />
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
