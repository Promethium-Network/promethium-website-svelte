<script>
	import StaffCard from './StaffCard.svelte';

    import { Spinner } from 'flowbite-svelte';


	let promise = fetch(
		'https://promethium-network-website-db.fly.dev/api/collections/staff/records/?filter=(active=true)&sort=+discord_username'
	).then((x) => x.json());
</script>

<div>
    {#await promise}
        <Spinner color='purple' size={8} class='text-center'/>
    {:then data} 
        
    {:catch error}
        {alert('DB CONNECTION LOST')}
    {/await}
</div>
