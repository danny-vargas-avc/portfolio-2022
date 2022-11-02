<script>
import Contact from '@/views/Contact.vue';
export default {
	components: {
		Contact,
	},
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						`Currently based out of Brooklyn, NY. My passion for software development began in a small classroom at the University of Arizona where I took part in a virtual reality course.
						Through that class, I was introduced to the world of programming, and for the next 2 years I spent teaching myself the basics and completing a full-time web development program.
						I strive to tackle new concepts and projects in order to continue growing my skillset and allow me to be a reliable and trustworthy member of any team.`,
				},
				{
					id: 1,
					bio:
						`I am currently working full-time for Audio, Video & Controls (AV&C), where we tackle a number of creative installation projects around the country.
						Our hybrid team of innovators empowers leading brands, architects, and artists to deliver site specific, software driven technology installations.`,
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile_pic.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
			<Contact />
		</div>
	</div>
</template>
