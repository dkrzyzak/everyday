<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { tweened } from 'svelte/motion';

	export let value = 0;
	let hslValue = 1.28 * value;
	const progress = tweened(value);

	afterUpdate(() => {
		progress.set(value);
		hslValue = 128 * value;
	});
</script>

<progress value={$progress} />

<style>
	progress {
		margin-top: 30px;
		width: 100%;
	}
</style>
