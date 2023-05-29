<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import dayjs from 'dayjs';
	import Tasks from './modules/Tasks.svelte';

	const today = new Date();
	const formattedDate = dayjs(today).format('D MMMM YYYY');
</script>

<SvelteUIProvider withGlobalStyles themeObserver={'dark'}>
	<main>
		<h1>siema</h1>
		<h2>{formattedDate}</h2>

		<Tasks />
	</main>
</SvelteUIProvider>
