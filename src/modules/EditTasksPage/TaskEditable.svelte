<script lang="ts">
	import { Badge, Button, Card, Group, Text } from '@svelteuidev/core';

	export let name = '';
	export let active = false;

	const onToggleActive = () => {
		active = !active;
	};
</script>

<Card shadow="sm" padding="lg" style="margin-bottom: 20px;">
	<Card.Section>
		<Group position="apart">
			<Text size="xl" weight={500} contenteditable on:blur={console.log}>{name}</Text>
			{#if active}
				<Badge size="lg" variant="light" on:click={onToggleActive}>Aktywne</Badge>
			{:else}
				<Badge size="lg" color="gray" variant="light" on:click={onToggleActive}
					>Nieaktywne</Badge
				>
			{/if}
		</Group>
	</Card.Section>
	<!-- <Button variant="light" color="blue" fullSize>Book classic tour now</Button> -->
</Card>
