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
        height: 40px;
        mix-blend-mode: hard-light;
    }

    .title h1 {
        margin-left: 5px;
        margin-top: 0px;
    }
</style>
