// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'David Geffen Hall',
		category: 'Digital signage for the lobby area of Geffen Hall within the Lincoln Center.',
		img: require('@/assets/images/dgh.jpg'),
	},
	{
		id: 2,
		title: 'Camden Battlefield',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'San Francisco Symphony',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
