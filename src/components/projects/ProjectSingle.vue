<script>
import { useStore } from 'vuex';
export default {
	props: ['project'],
	setup() {
		const store = useStore();

		return {
			store,
		}
	},
};
</script>

<template>
	<router-link
		:to="`/projects/${project.code}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 project-card"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none image"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-color font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-general-medium text-lg text-color"
				>{{ project.category }}</span
			>
		</div>
	</router-link>
</template>

<style scoped>

.text-color {
	color: #21282a !important;
}
	.image {
		width: 400px;
		height: 400px;
		object-fit: cover;
	}
	.project-card {
		background-color: #d3d3d3;
		z-index: 100 !important;
	}
</style>
