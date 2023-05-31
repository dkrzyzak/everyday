<script>
	import { Alert, Modal, Button, TextInput, Group } from '@svelteuidev/core';
	import PlusIcon from '~icons/mdi/clipboard-plus';
	import SuccessIcon from '~icons/mdi/check-circle';
	import FailIcon from '~icons/mdi/close-circle';
	import { addNewTask } from '../api/tasks';

	let opened = false;
	let taskName = '';
	let success = false;
	let errorMsg = '';

	const closeModal = () => {
		opened = false;
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

<Modal {opened} centered on:close={closeModal} title="Dodaj zadanie!" size="xs">
	<TextInput label="Nazwa zadania" bind:value={taskName} on:input={onInputChange} />

	<Group grow position="center" style="margin-block: 10px;">
		<Button variant="outline" on:click={closeModal}>Anuluj</Button>
		<Button on:click={addTask} disabled={!taskName}>Dodaj</Button>
	</Group>

	{#if success}
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
	{/if}

	{#if errorMsg}
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
	{/if}
</Modal>

<div class="modal-button-container">
	<Button
		on:click={() => {
			opened = true;
		}}
		size="lg"
	>
		<PlusIcon style="font-size: 1.25em; margin-right: 5px;" />
		Dodaj zadanie
	</Button>
</div>

<style>
	.modal-button-container {
		position: absolute;
		top: 20px;
		right: 20px;
	}
</style>
