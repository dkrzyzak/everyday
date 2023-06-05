<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Group, Modal } from '@svelteuidev/core';

	const dispatch = createEventDispatcher<{ confirmDelete: {} }>();

	export let opened = false;

	const closeModal = () => {
		opened = false;
	};

	const confirmDelete = () => {
		dispatch('confirmDelete');
	};
</script>

<Modal centered {opened} title="Na pewno?" size="xs" on:close={closeModal}>
	<Group grow position="center" style="margin-block: 10px;">
		<Button variant="outline" on:click={closeModal}>Anuluj</Button>
		<Button on:click={confirmDelete} color="red">Potwierdź</Button>
	</Group>
</Modal>
