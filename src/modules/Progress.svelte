<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { tweened } from 'svelte/motion';

	export let value = 0;
	const progress = tweened(value);

	afterUpdate(() => {
		progress.set(value);
	});
</script>

<progress value={$progress} />

<style>
	progress {
		margin-top: 30px;
		width: 100%;
	}
</style>
