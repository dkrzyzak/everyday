<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { Link } from 'svelte-routing';
	import PlusIcon from '~icons/mdi/clipboard-plus';
	import EditIcon from '~icons/mdi/clipboard-edit';
	import RightCorner from '../../components/RightCorner.svelte';
	import Day from './Day.svelte';
	import AddTask from './AddTask.svelte';

	let modalOpened = false;

	const onOpenModal = () => {
		modalOpened = true;
	};
</script>

<Day />
<AddTask bind:modalOpened />

<RightCorner>
	<Button on:click={onOpenModal} size="lg">
		<PlusIcon style="font-size: 1.25em; margin-right: 5px;" />
		Dodaj zadanie
	</Button>

	<Link to="/edit">
		<Button size="lg" variant="outline" style="text-decoration: none;">
			<EditIcon style="font-size: 1.25em; margin-right: 5px;" />
			Edytuj zadania</Button
		>
	</Link>
</RightCorner>
