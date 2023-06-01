<script lang="ts">
	import { onMount } from 'svelte';
	import { getAllTasks } from '../../api/tasks';
	import type { Task } from '../../api/models';
	import TaskEditable from './TaskEditable.svelte';
	import { Container, Loader } from '@svelteuidev/core';

	let tasks: Task[] = [];

	onMount(async () => {
		getAllTasks().then((apiTasks) => {
			console.log(apiTasks);
			tasks = apiTasks;
		});
	});
</script>

<Container size="md">
	{#each tasks as task}
		<TaskEditable name={task.name} active={task.active} />
	{:else}
		<Loader size="lg" variant="dots" />
	{/each}
</Container>
