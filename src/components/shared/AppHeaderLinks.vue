<script setup>
	/* eslint-disable */
	import { onMounted, ref } from 'vue';

	const emit = defineEmits(['toggle']);

	const props = defineProps({
		isOpen: {
			type: Boolean,
			default: false,
		},
	});

	const windowWidth = ref(null);

	onMounted(() => {
		windowWidth.value = window.innerWidth;
		window.addEventListener('resize', () => {
			windowWidth.value = window.innerWidth;
		});
	});
	const toggleMenu = () => {
		emit('toggle');
	};
</script>

<template>
	<!-- Header links -->
	<div
		v-if="windowWidth > 768"
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-between items-center shadow-lg sm:shadow-none layer"
	>
		<router-link
			@click="toggleMenu"
			to="/projects"
			class="font-general-medium block text-left text-lg font-medium hover:text-sky-400   sm:mx-4 mb-2 sm:py-2 "
			aria-label="Projects"
			>Work</router-link>
		<router-link
			@click="toggleMenu"
				to="/about"
			class="font-general-medium block text-left text-lg font-medium hover:text-sky-400   sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="About Me"
			>Info</router-link>
		</div>
	<transition v-else name="slide">
		<div
			v-if="isOpen"
			class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-between items-center shadow-lg sm:shadow-none layer"
		>
			<router-link
				@click="toggleMenu"
				to="/projects"
				class="w-full font-general-medium block text-left text-lg font-medium hover:text-sky-400 sm:mx-4 mb-2 sm:py-2 "
				aria-label="Projects"
				>Work</router-link>
			<router-link
				@click="toggleMenu"
					to="/about"
				class="w-full font-general-medium block text-left text-lg font-medium hover:text-sky-400 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
				aria-label="About Me"
				>Info</router-link>
		</div>		
	</transition>
</template>

<style scoped>
.slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
}
.slide-enter-from,
.slide-leave-to {
  top: 0;
}
@keyframes menu-slide {
  from {
    transform: translateY(-100%);
		transition: transform .5s ease-in-out;
  }
  to {
    transform: translateY(0);
		transition: transform .5s ease-in-out;
  }
}
	.layer {
		z-index: 1;
		background-color: rgba(255, 255, 255, 0) !important;
	}

	@media only screen and (max-width: 768px) {
		.layer {
			background-color:#21282a !important;
			margin: 0;
			height: 25vh;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100vw;
			position: fixed;
			top: 0;
			left: 0;		
			z-index: 999;
		}
	}
</style>
