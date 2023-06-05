<script lang="ts">
	import { slide } from 'svelte/transition';

	export let transition: typeof slide = slide;
	export let transitionOptions: Parameters<typeof transition>[1] = {};

	export let disableAnimation: boolean;
</script>

{#if disableAnimation}
	<slot />
{:else}
	<div transition:transition={transitionOptions}>
		<slot />
	</div>
{/if}
