<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
};
</script>

<template>
	<div class="container mx-auto" style="position: relative;">
		<ProjectsGrid />
	</div>
</template>

<style scoped>
</style>
