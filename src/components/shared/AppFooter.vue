<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
export default {
	components: { FooterCopyright },
	data() {
		return {
			socials: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/danny-vargas-avc',
				},
				{
					id: 2,
					name: 'Linkedin',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/danielvargas96',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="footer-container">
		<div
			class="pt-10 sm:pt-30 pb-8 mt-20 border-t-2"
		>
			<!-- Footer social links -->
			<div
				class="flex flex-col justify-center items-center mb-5 sm:mb-5"
			>
				<p
					class="font-general-semibold text-3xl sm:text-4xl font-semibold mb-5"
				>
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8 z-10">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="cursor-pointer rounded-lg bg-gray-50 shadow-sm p-4 duration-500 icon-color"
					>
						<i
							:data-feather="social.icon"
							class="w-5 sm:w-8 h-5 sm:h-8"
						></i>
					</a>
				</ul>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped>
.footer-container {
	width: 80vw;
	margin: 0 auto;
}

.icon-color {
	background-color: #21282a !important;
}
</style>
