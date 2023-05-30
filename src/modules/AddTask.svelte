<script>
	import { Modal, Button, TextInput, Group } from '@svelteuidev/core';
	import PlusIcon from '~icons/mdi/clipboard-plus';

	let opened = false;
	let taskName = '';

	const closeModal = () => {
		opened = false;
	};
</script>

<Modal {opened} centered on:close={closeModal} title="Dodaj zadanie!" size="xs">
	<TextInput label="Nazwa zadania" bind:value={taskName} />
	<Group position="center" style="margin-top: 10px;">
		<Button variant="outline" on:click={closeModal}>Anuluj</Button>
		<Button>Dodaj</Button>
	</Group>
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
