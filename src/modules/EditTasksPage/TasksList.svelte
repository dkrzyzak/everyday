<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import { Button, Center, Loader } from '@svelteuidev/core';
	import { removeTask } from '../../api/tasks';
	import type { Task } from '../../api/models';
	import TaskEditable from './TaskEditable.svelte';
	import {
		updateTasksStore,
		haveUpdates,
		resetTaskUpdateStore,
	} from '../../stores/updateTasks';
	import ConfirmDelete from './ConfirmDelete.svelte';

	const dispatch = createEventDispatcher<{ refetchTasks: {} }>();

	let confirmDeleteModalOpened = false;
	let taskToRemoveId = '';

	export let tasks: Task[] = [];
	export let disableAnimation = false;

	const openConfirmDeleteModal = (event: CustomEvent<{ taskId: string }>) => {
		confirmDeleteModalOpened = true;
		taskToRemoveId = event.detail.taskId;
	};

	const onConfirmDelete = async () => {
		console.log(taskToRemoveId);
		const success = await removeTask(taskToRemoveId);

		if (success) {
			confirmDeleteModalOpened = false;
			dispatch('refetchTasks');
		} else {
			// TODO: zareagować na ten błąd
			console.log('lipton');
		}
	};

	onDestroy(() => {
		resetTaskUpdateStore();
	});
</script>

<div class="task-list-container">
	{#each tasks as { name, active, _id } (_id)}
		<TaskEditable
			{name}
			{active}
			id={_id}
			{disableAnimation}
			on:deleteTask={openConfirmDeleteModal}
		/>
	{:else}
		<Center>
			<Loader size="lg" variant="dots" />
		</Center>
	{/each}
	{#if haveUpdates($updateTasksStore)}
		<div transition:scale class="button-container">
			<Button style="width: 100%;" color="violet" size="md">Zatwierdź zmiany</Button>
		</div>
	{/if}

	<ConfirmDelete
		bind:opened={confirmDeleteModalOpened}
		on:confirmDelete={onConfirmDelete}
	/>
</div>

<style>
	.task-list-container {
		padding-inline: 16px;
		max-width: 960px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.button-container {
		align-self: end;
		width: 100%;
		position: sticky;
		bottom: 10px;
	}
</style>
