<script lang="ts">
	import dayjs from 'dayjs';
	import Tasks from './Tasks.svelte';

	const today = new Date();
	const formattedDate = dayjs(today).format('D MMMM YYYY');
</script>

<h1>{formattedDate}</h1>

<Tasks />
