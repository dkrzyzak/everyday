<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Link } from 'svelte-routing';
	import PlusIcon from '~icons/mdi/clipboard-plus';
	import BackIcon from '~icons/mdi/clipboard-arrow-left';
	import RightCorner from '../../components/RightCorner.svelte';
	import TasksList from './TasksList.svelte';
	import AddTask from './AddTask.svelte';

	let modalOpened = false;

	const onOpenModal = () => {
		modalOpened = true;
	};
</script>

<main class="page-container">
	<h1>Edytuj zadania</h1>
	<TasksList />
	<AddTask bind:modalOpened />

	<RightCorner>
		<Button on:click={onOpenModal} size="lg">
			<PlusIcon style="font-size: 1.25em; margin-right: 5px;" />
			Dodaj zadanie
		</Button>
		<Link to="/">
			<Button size="lg" variant="outline" style="width: 100%;">
				<BackIcon style="font-size: 1.25em; margin-right: 5px;" />
				Powrót
			</Button>
		</Link>
	</RightCorner>
</main>

<style>
	.page-container {
		margin-top: 120px;
	}
</style>
