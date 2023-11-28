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
        margin-bottom: 0px;
    }

    .title img {
        height: 50px;
        filter: invert();
        mix-blend-mode: difference;
    }

    .title h1 {
        margin-left: 5px;
        margin-top: 0px;
    }
</style>
