<script>
	import { Modal } from '@svelteuidev/core';

	let opened = false;
</script>

<Modal
	{opened}
	centered
	on:close={() => {
		opened = false;
	}}
	title="Dodaj zadanie!"
>
	<!-- Modal Content -->
</Modal>
