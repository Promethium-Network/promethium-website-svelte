<script>
	import StaffCard from './StaffCard.svelte';

	import { Spinner } from 'flowbite-svelte';

	let promise = fetch(
		'https://promethium-network-website-db.fly.dev/api/collections/staff/records/?filter=(active=true)&sort=+discord_username'
	).then((x) => x.json());
</script>

<div>
	<div>
		<h1
			class="text-center font-semibold whitespace-nowrap text-5xl dark:text-white"
		>
			Staff
		</h1>
	</div>

	<div class="container mx-auto py-10">
		{#await promise}
			<Spinner color="purple" />
		{:then data}
			<div class="flex justify-between justify-items-center">
				<StaffCard
					name={data.items[1].name}
					role={data.items[1].role}
					bio={data.items[1].bio}
					profilePicUrl={data.items[1].profile_pic_url}
				/>
				<StaffCard
					name={data.items[0].name}
					role={data.items[0].role}
					bio={data.items[0].bio}
					profilePicUrl={data.items[0].profile_pic_url}
				/>
			</div>
		{:catch error}
			{console.log(error)}
			{alert('ERROR PLEASE CONTACT GUS')}
		{/await}
	</div>
</div>
