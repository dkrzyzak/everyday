<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { Button } from '@svelteuidev/core';
	import { Link } from 'svelte-routing';
	import PlusIcon from '~icons/mdi/clipboard-plus';
	import BackIcon from '~icons/mdi/clipboard-arrow-left';
	import RightCorner from '../../components/RightCorner.svelte';
	import TasksList from './TasksList.svelte';
	import AddTask from './AddTask.svelte';
	import type { Task } from '../../api/models';
	import { getAllTasks } from '../../api/tasks';

	let modalOpened = false;

	let tasks: Task[] = [];
	let disableAnimation = true;

	$: if (tasks.length > 0) {
		disableAnimation = false;
	}

	const fetchTasks = async () => {
		try {
			const fetchedTasks = await getAllTasks();
			tasks = fetchedTasks;
		} catch {}
	};

	const onOpenModal = () => {
		modalOpened = true;
	};

	onMount(async () => {
		fetchTasks();
	});
</script>

<main class="page-container">
	<h1>Edytuj zadania</h1>
	<TasksList {tasks} {disableAnimation} on:refetchTasks={fetchTasks} />
	<AddTask bind:modalOpened on:refetchTasks={fetchTasks} />

	<RightCorner>
		<Button on:click={onOpenModal} size="lg">
			<PlusIcon style="font-size: 1.25em; margin-right: 5px;" />
			Dodaj zadanie
		</Button>
		<Link to="/">
			<Button
				size="lg"
				variant="outline"
				style="width: 100%;"
				on:click={() => {
					disableAnimation = true;
				}}
			>
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
