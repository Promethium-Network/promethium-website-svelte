<script>
  import "../app.postcss";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Navbar />

<slot />

<Footer />