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

    .title img {
        height: 25px;
        mix-blend-mode: multiply;
        color: white;
    }

    .title h1 {
        margin-left: 5px;
    }
</style>
