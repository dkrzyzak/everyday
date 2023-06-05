<script lang="ts">
	import { Badge, Button, Text } from '@svelteuidev/core';
	import DeleteIcon from '~icons/mdi/delete';
	import { toggleActiveState, updateName } from '../../stores/updateTasks';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ deleteTask: { taskId: string } }>();

	export let name = '';
	export let active = false;
	export let id = '';
	const initialActive = active;
	const initialName = name;
	console.log(initialName, initialActive);

	const onToggleActive = () => {
		active = !active;

		toggleActiveState(id, active);
	};

	const onNameBlur = (event: Event) => {
		const target = event.target as HTMLDivElement;
		updateName(id, initialName, target.textContent);
	};

	const onDeleteIconClick = () => {
		dispatch('deleteTask', {
			taskId: id,
		});
	};
</script>

<div class="task-container">
	<Text size="xl" weight={500} contenteditable spellcheck={false} on:blur={onNameBlur}
		>{name}</Text
	>

	<div class="buttons-container">
		{#if active}
			<Badge
				size="lg"
				variant="light"
				style="cursor: pointer;"
				on:click={onToggleActive}>Aktywne</Badge
			>
		{:else}
			<Badge
				size="lg"
				color="gray"
				variant="light"
				style="cursor: pointer;"
				on:click={onToggleActive}>Nieaktywne</Badge
			>
		{/if}
		<Button
			size="sm"
			compact
			ripple
			radius="lg"
			color="red"
			on:click={onDeleteIconClick}><DeleteIcon /></Button
		>
	</div>
</div>

<style>
	.task-container {
		margin-bottom: 20px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}
	.buttons-container {
		display: flex;
		justify-content: end;
		gap: 10px;
		align-items: center;
		min-width: 160px;
	}
</style>
