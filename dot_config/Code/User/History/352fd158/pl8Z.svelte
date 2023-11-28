<script>
    export let title = "Svelte Guide";
</script>


<div class="title">
    <img src="/controller.png" alt="Controller">
    <h1>{title}</h1>
    <img src="/controller.png" alt="Controller">
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
    }

    .title h1 {
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        font-size: 30px;
    }
</style>
