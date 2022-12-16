<script>
import AboutMe from '@/components/about/AboutMe';
import AppFooter from '@/components/shared/AppFooter';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AppFooter,
	},
	data: () => {
		return {};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>
	</div>
		<!-- App footer -->
		<AppFooter />	
</template>

<style scoped></style>
