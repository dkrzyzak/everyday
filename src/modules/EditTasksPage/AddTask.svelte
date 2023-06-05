<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Alert, Modal, Button, TextInput, Group } from '@svelteuidev/core';
	import SuccessIcon from '~icons/mdi/check-circle';
	import FailIcon from '~icons/mdi/close-circle';
	import { addNewTask } from '../../api/tasks';
	import { scale } from 'svelte/transition';

	const dispatch = createEventDispatcher<{ refetchTasks: {} }>();

	export let modalOpened = false;
	let taskName = '';
	let success = false;
	let errorMsg = '';

	const closeModal = () => {
		success = false;
		errorMsg = '';
		modalOpened = false;
	};

	const addTask = async () => {
		if (!taskName) {
			return;
		}

		try {
			const result = await addNewTask(taskName);
			if (result) {
				success = true;
				taskName = '';
				dispatch('refetchTasks');
			} else {
				errorMsg = 'Nie udało się dodać zadania. Sprawdź konsolę.';
			}
		} catch {
			errorMsg = 'Nie udało się dodać zadania. Sprawdź konsolę.';
		}
	};

	const onInputChange = () => {
		if (success) {
			success = false;
		}

		if (errorMsg) {
			errorMsg = '';
		}
	};
</script>

<Modal
	opened={modalOpened}
	centered
	on:close={closeModal}
	title="Dodaj zadanie!"
	size="xs"
>
	<TextInput label="Nazwa zadania" bind:value={taskName} on:input={onInputChange} />

	<Group grow position="center" style="margin-block: 10px;">
		<Button variant="outline" on:click={closeModal}>Anuluj</Button>
		<Button on:click={addTask} disabled={!taskName}>Dodaj</Button>
	</Group>

	{#if success}
		<div transition:scale>
			<Alert
				icon={SuccessIcon}
				title="Sukces!"
				color="green"
				withCloseButton
				closeButtonLabel="Zamknij"
				on:close={() => {
					success = false;
				}}>Dodano zadanie!</Alert
			>
		</div>
	{/if}

	{#if errorMsg}
		<div transition:scale>
			<Alert
				icon={FailIcon}
				title="Ajajaj"
				color="red"
				withCloseButton
				closeButtonLabel="Zamknij"
				on:close={() => {
					errorMsg = '';
				}}
			>
				{errorMsg}
			</Alert>
		</div>
	{/if}
</Modal>
