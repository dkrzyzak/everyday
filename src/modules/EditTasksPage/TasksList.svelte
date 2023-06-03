<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { Button, Container, Loader } from '@svelteuidev/core';
	import { getAllTasks } from '../../api/tasks';
	import type { Task } from '../../api/models';
	import TaskEditable from './TaskEditable.svelte';
	import {
		type UpdateTasksStore,
		updateTasksStore,
		haveUpdates,
		mergeChanges,
		resetTaskUpdateStore,
	} from '../../stores/updateTasks';

	let tasks: Task[] = [];

	let updatesStore: UpdateTasksStore;

	const fetchTasks = async () => {
		const fetchedTasks = await getAllTasks();
		tasks = fetchedTasks;
	};

	const unsubscribeTasksStore = updateTasksStore.subscribe((updateTasks) => {
		updatesStore = updateTasks;
		console.log(updateTasks);
		console.log(mergeChanges(updateTasks));
	});

	onMount(async () => {
		fetchTasks();
	});

	onDestroy(() => {
		unsubscribeTasksStore();
		resetTaskUpdateStore();
	});
</script>

<Container size="md" override={{ display: 'flex', flexDirection: 'column' }}>
	{#each tasks as { name, active, _id } (_id)}
		<TaskEditable {name} {active} id={_id} />
	{:else}
		<Loader size="lg" variant="dots" />
	{/each}
	{#if haveUpdates(updatesStore)}
		<div transition:scale class="button-container">
			<Button style="width: 100%;" color="violet" size="md">Zatwierdź zmiany</Button>
		</div>
	{/if}
</Container>

<style>
	.button-container {
		align-self: end;
		width: 100%;
		position: sticky;
		bottom: 10px;
	}
</style>
