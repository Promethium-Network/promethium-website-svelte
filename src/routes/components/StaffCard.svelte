<script lang="ts">
	import {
		Avatar,
		Badge,
		Button,
		Card,
		Dropdown,
		DropdownItem,
		MenuButton,
	} from 'flowbite-svelte';

	export let name: string;
	export let role: string;
	export let bio: string;
	export let profilePicUrl: string;
	export let color:
		| 'red'
		| 'yellow'
		| 'green'
		| 'indigo'
		| 'purple'
		| 'pink'
		| 'blue'
		| 'dark'
		| 'primary'
		| 'none'
		| undefined;
</script>

<Card padding="md" size="md">
	<div class="flex flex-col items-center pb-4">
		<Avatar size="lg" src={profilePicUrl} />
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
			{name}
		</h5>
		<Badge border {color} rounded>{role}</Badge>
		<p
			class="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line text-start"
		>
			{bio}
		</p>
	</div>
</Card>
