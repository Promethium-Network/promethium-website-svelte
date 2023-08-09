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
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	</div>

	<div class="container mx-auto py-10">
		{#await promise}
			<Spinner color="purple" />
		{:then data}
			<div class="flex justify-between justify-items-center">
				<StaffCard
					name={data.items[2].name}
					role={data.items[2].role}
					bio={data.items[2].bio}
					profilePicUrl={data.items[2].profile_pic_url}
					color="red"
				/>
				<StaffCard
					name={data.items[0].name}
					role={data.items[0].role}
					bio={data.items[0].bio}
					profilePicUrl={data.items[0].profile_pic_url}
					color="red"
				/>
			</div>
			<hr
				class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
			/>
			<div class="flex justify-between justify-items-center">
				<StaffCard
					name={data.items[1].name}
					role={data.items[1].role}
					bio={data.items[1].bio}
					profilePicUrl=""
					color="blue"
				/>
			</div>
		{:catch error}
			<h1>We are sorry, but an error has occured. Please try again later.</h1>
			{console.log(error)}
			{alert(error.message)}
		{/await}
	</div>
</div>
