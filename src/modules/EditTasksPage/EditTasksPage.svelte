<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Link } from 'svelte-routing';
	import BackIcon from '~icons/mdi/clipboard-arrow-left';
	import RightCorner from '../../components/RightCorner.svelte';
	import TasksList from './TasksList.svelte';
</script>

<main>
	<h1>Edytuj zadania</h1>
	<TasksList />

	<RightCorner>
		<Link to="/">
			<Button size="lg" variant="outline">
				<BackIcon style="font-size: 1.25em; margin-right: 5px;" />
				Powrót
			</Button>
		</Link>
	</RightCorner>
</main>
