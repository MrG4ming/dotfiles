<script>
    import Navbar from "$lib/navbar.svelte";
import Title from "$lib/title.svelte";
    import '../styles/global.css'
</script>


<header>
    <Navbar><Title logo= /></Navbar>
</header>



<main>
    <!-- page conten -->
    <slot></slot>
</main>

<footer>
    <p>Copyright 2023 - MrG4ming</p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }

    main {

    }

    footer {
        text-align: center;
    }
</style>