<script>
    import { Video } from "flowbite-svelte";
    import Fish from "$lib/videos/fish.mp4"
</script>

<main>
    <center>
        <Video src={Fish} autoplay volume={100} trackSrc="fish.mp4" loop controls/>
    </center>
</main>