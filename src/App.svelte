<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Day from './modules/Day.svelte';
	import AddTask from './modules/AddTask.svelte';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={'dark'}>
	<Day />
	<AddTask />
</SvelteUIProvider>
