<template>
	<div slot-scope="{ footer }" class="container">
		<small>&copy; <time datetime="1851-05-17">1851</time>&ndash;<time datetime="1864-10-01">1864</time>, <time datetime="1868-05-16">1868</time>&ndash;1879, 2019&ndash;<time :datetime="currentDate()">{{ currentYear() }}</time> The Los Angeles Star Company</small>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	methods: {
		currentDate() {
			const today = new Date();
			const date = `${today.toISOString('en-US', { timeZone: 'America/Los_Angeles' })}`;
			return date;
		},
		currentYear() {
			const today = new Date();
			const date = `${today.getFullYear()}`;
			return date;
		}
	},
}
</script>
