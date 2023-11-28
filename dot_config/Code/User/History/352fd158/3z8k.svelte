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
        mix-blend-mode: multiply;
    }

    .title h1 {
        margin-left: 5px;
    }


    body {
        background-color: rgb(40, 40, 40);
    }
</style>
