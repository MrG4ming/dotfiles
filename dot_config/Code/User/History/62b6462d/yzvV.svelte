<script>
    let titel = "Svelte Guide";
    let titelInput = "";
    let titelSwitch = 0;

    const updateTitel = () => {
        if(titelSwitch == 2) {
            titel = "Svelte Guide";
            titelSwitch = 0;
        } else if(titelSwitch == 0) {
            titel = "Other Titel";
            titelSwitch = 1;
        } else if(titelSwitch == 1) {
            titel = titelInput;
            titelSwitch = 2;
        }
    }
</script>


<div class="index">
    <h1>{titel}</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <button on:click={updateTitel}>Change Title</button>
    <input type="text" bind:value={titelInput}>
</div>


<style>
.index {
    text-align: center;
    display: block;
    margin: 20px auto;
}


</style>