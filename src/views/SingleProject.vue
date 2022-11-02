<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
// import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import PROJECTS from '@/data/projects_info.js';
import { useStore } from 'vuex';
import { onBeforeMount, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		// ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	setup() {
		const store = useStore();
		const route = useRoute();
		const currentProject = computed(() => store.state.currentProject);
		onBeforeMount(async () => {
			// console.log(route.params);
			// await store.dispatch('setProject', route.params.code);
			if (!route.params.code) {
				console.log('fuck')
			} else {
				await store.dispatch('setProject', route.params.code);
			}
		});
		return {
			store,
			route,
			currentProject,
			PROJECTS,
		}
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="PROJECTS[currentProject].singleProjectHeader" />

		<!-- Project gallery -->
		<!-- <ProjectGallery :projectImages="PROJECTS[currentProject].projectImages" /> -->

		<!-- Project information -->
		<ProjectInfo
			:projectInfo="PROJECTS[currentProject].projectInfo"
			:projectImages="PROJECTS[currentProject].projectImages" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>
