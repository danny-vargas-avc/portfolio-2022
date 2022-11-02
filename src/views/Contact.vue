<script>
import feather from 'feather-icons';
// import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		// ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Brooklyn, NY',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'dannyvargashb@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '714 818 1632',
					icon: 'phone',
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
	methods: {},
};
</script>

<template>
	<div
		class="container p-0"
	>
		<!-- Contact form -->
		<!-- <ContactForm /> -->

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
