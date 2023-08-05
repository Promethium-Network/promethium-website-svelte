<script>
	import StaffCard from '../components/StaffCard.svelte';
    import StaffCardCollection from '../components/StaffCardCollection.svelte';

	let promise = fetch(
		'https://promethium-network-website-db.fly.dev/api/collections/staff/records/?filter=(active=true)&sort=+discord_username'
	).then((x) => x.json());
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main>
	<StaffCardCollection />
</main>
