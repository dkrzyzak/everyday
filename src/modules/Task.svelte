<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Switch } from '@svelteuidev/core';

	export let name: string;
	export let done = false;

	const dispatch = createEventDispatcher();

	const onToggle = () => {
		done = !done;
		dispatch('toggleTask', done);
	};
</script>

<article>
	<Switch label={name} size={'xl'} bind:checked={done} on:change={onToggle} />
</article>
