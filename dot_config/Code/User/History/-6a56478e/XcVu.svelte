<script>
    import Title from "$lib/title.svelte";
    import '../styles/global.css'
</script>


<header>
    <Title />
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