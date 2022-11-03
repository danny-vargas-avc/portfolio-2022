<script>
export default {
	props: ['projectImages'],
	setup() {
		const isImage = ['gif','jpg','jpeg','png', 'tiff', 'pdf'];
		const isVideo =['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4'];
		function getFileType(str) {
			return str.split('.')[2];
		}
		return {
			isImage,
			isVideo,
			getFileType,
		}
	}
};
</script>

<template>
	<div class="grid grid-cols-1 images">
		<div
			class="mb-10 sm:mb-10 flex justify-center"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				v-if="isImage.includes(getFileType(projectImage.img))"
				:src="projectImage.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none image"
				alt="{{ projectImage.title }}"
			/>
			<video v-else class="rounded-xl cursor-pointer shadow-lg sm:shadow-none image" :src="projectImage.img" playsinline muted controls></video>
		</div>
	</div>

</template>
<style scoped>

.image {
		width: 20rem;
		height: 20rem;
		margin-bottom: 1rem;
		object-fit: cover;
	}


	@media screen and (min-width: 768px) {
		.images {
			max-height: 50rem;
			max-width: 50rem;
			overflow-y: scroll;
			padding-right: 0px;
		}
		.image {
			width: 50rem;
			height: 50rem;
			margin-bottom: 1rem;
			object-fit: cover;
		}
	}

</style>
