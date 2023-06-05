<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Link } from 'svelte-routing';
	import EditIcon from '~icons/mdi/clipboard-edit';
	import RightCorner from '../../components/RightCorner.svelte';
	import Day from './Day.svelte';
</script>

<div class="day-container">
	<Day />
</div>
<RightCorner>
	<Link to="/edit">
		<Button size="lg" variant="outline" style="text-decoration: none;">
			<EditIcon style="font-size: 1.25em; margin-right: 5px;" />
			Edytuj zadania</Button
		>
	</Link>
</RightCorner>

<style>
	.day-container {
		margin-top: 180px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
