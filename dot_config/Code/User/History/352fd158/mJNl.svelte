<script>
    export let title = "Svelte Guide";
    export let logo = "false";
</script>


<div class="title">
    {#if logo.toUpperCase() === "true".toUpperCase()}
        <img src="/controller.png" alt="Controller">
        <h1>{title}</h1>
        <img src="/controller.png" alt="Controller">
    {:else}
        <h1>{title}</h1>
    {/if}
</div>


<style>
    .title {
        display: flex;
        margin-bottom: 0px;
    }

    .title img {
        height: 50px;
        filter: invert();
        mix-blend-mode: lighten;
        margin-top: 2px;
    }

    .title h1 {
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 10px;
        font-size: 30px;
    }
</style>
