<script>
    let titel = "Svelte Guide";
    let titelSwitch = false;

    const updateTitel = () => {
        if(titelSwitch) {
            titel = "Svelte Guide";
            titelSwitch = false;
        } else {
            titel = "Other Titel";
            titelSwitch = true;
        }
    }
</script>


<div class="index">
    <h1>{titel}</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <button on:click={updateTitel}>Change Title</button>
</div>


<style>
.index {
    text-align: center;
    display: block;
    margin: 20px auto;
}


</style>