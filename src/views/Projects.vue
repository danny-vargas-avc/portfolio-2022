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
			// particlesJS('main-bg', particlesJSON);
				// eslint-disable-next-line
				Particles.init({
					selector: '#main-bg',
					maxParticles: 500,
					speed: 3,
					sizeVariations: 5,
					responsive: [
								{
									breakpoint: 
						768
						,
									options: {
										maxParticles: 
						200
						,
										color: 
						'#48F2E3'
						,
										connectParticles: 
						false
									}
								}, {
									breakpoint: 
						425
						,
									options: {
										maxParticles: 
						100
						,
										connectParticles: 
						true
									}
								}, {
									breakpoint: 
						320
						,
									options: {
										maxParticles: 
						0
						
						// disables particles.js
									}
								}
					]
				});
		});
	}
};
</script>

<template>
	<div class="container mx-auto" style="position: relative;">
		<canvas id="main-bg"></canvas>
		<ProjectsGrid />
	</div>
</template>

<style scoped>
		#main-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
