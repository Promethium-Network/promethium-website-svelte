<script lang="ts">
	import { Avatar, Badge, Spinner, Tooltip } from 'flowbite-svelte';

	let promise = fetch(
		'https://promethium-network-website-db.fly.dev/api/collections/staff/records/?filter=(active=true)&sort=+discord_username'
	).then((x) => x.json());
</script>

<!-- TODO: Improve this, currently the stuff is hardcoded and i will change that at a later date. -->
<!-- TODO: Completely rewrite this (not in prod) -->
<div class="flex flex-wrap justify-center space-x-4">
	{#await promise}
		<Spinner color="purple" />
	{:then data}
		<Avatar src={data.items[0].profile_pic_url} size="lg" rounded />
		<Tooltip placement="bottom"
			>{data.items[0].discord_username}<br />
			<Badge color="red">{data.items[0].role}</Badge></Tooltip
		>
		<Avatar src={data.items[2].profile_pic_url} size="lg" rounded />
		<Tooltip placement="bottom"
			>{data.items[2].name}<br /><Badge color="red">{data.items[2].role}</Badge
			></Tooltip
		>
	{:catch error}
		<h1>We are sorry, but an error has occured. Please try again later.</h1>
		{console.log(error)}
		{alert(error.message)}
	{/await}
</div>
