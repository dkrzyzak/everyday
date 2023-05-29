<script lang="ts">
	import Progress from './Progress.svelte';
	import Task from './Task.svelte';

	interface Task {
		name: string;
		done: boolean;
	}

	let tasks: Task[] = [
		{
			name: 'pomedytować',
			done: false,
		},
		{
			name: 'wziąć kreatynę',
			done: true,
		},
		{
			name: 'ćwiczenia na łopatki',
			done: false,
		},
		{
			name: 'umyć zęby',
			done: false,
		},
	];

	let progress =
		tasks.reduce((doneCount, task) => doneCount + Number(task.done), 0) / tasks.length;

	console.log(progress);

	const handleTaskToggle = (event: CustomEvent<boolean>, index: number) => {
		const done = event.detail;

		tasks = tasks.map((task, taskIndex) => {
			if (taskIndex !== index) return task;
			return {
				...task,
				done,
			};
		});

		progress =
			tasks.reduce((doneCount, current) => doneCount + Number(current.done), 0) /
			tasks.length;
	};
</script>

<div class="tasks-container">
	{#each tasks as task, index}
		<Task
			name={task.name}
			done={task.done}
			on:toggleTask={(event) => handleTaskToggle(event, index)}
		/>
	{/each}

	<Progress value={progress} />
</div>

<style>
	.tasks-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
