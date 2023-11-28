<script>
    export let title = "Svelte Guide";
</script>


<div class="title">
    <img src="/controller.png" alt="Controller">
    <h1>{title}</h1>    
</div>


<style>
    .title {
        display: flex;
    }

    .text img {
        height: 25px;
        mix-blend-mode: multiply;
    }

    .title h1 {
        margin-left: 5px;
    }
</style>
