<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { Router, Route } from 'svelte-routing';
	import ChecklistPage from './modules/ChecklistPage/ChecklistPage.svelte';
	import EditTasksPage from './modules/EditTasksPage/EditTasksPage.svelte';

	export let url = '/';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={'dark'}>
	<Router {url}>
		<Route path="/edit"><EditTasksPage /></Route>
		<Route path="/"><ChecklistPage /></Route>
	</Router>
</SvelteUIProvider>
