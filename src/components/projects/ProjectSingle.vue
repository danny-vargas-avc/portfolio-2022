<script>
import { useStore } from 'vuex';
export default {
	props: ['project'],
	setup() {
		const store = useStore();
		// function setProject(code) {
		// 	store.dispatch('setProject', code);
		// }

		return {
			// setProject,
			store,
		}
	},
};
</script>

<template>
	<router-link
		:to="`/projects/${project.code}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark project-card"
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
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.category }}</span
			>
		</div>
	</router-link>
</template>

<style scoped>
	.image {
		width: 400px;
		height: 400px;
		object-fit: cover;
	}
	.project-card {
		z-index: 100 !important;
	}
</style>
