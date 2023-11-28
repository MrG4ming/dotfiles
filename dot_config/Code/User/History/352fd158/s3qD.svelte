<script>
    let title = "Svelte Guide";
    let titelInput = "";
    let titelSwitch = 0;

    const updateTitel = (changeTo = -1) => {
        if(changeTo == -1) {
            if(titelSwitch == 0) {
                title = "Svelte Guide";
                titelSwitch = 1;
            } else if(titelSwitch == 1) {
                title = "Other Titel";
                titelSwitch = 2;
            } else if(titelSwitch == 2) {
                if(titelInput != "") {
                    title = titelInput;
                } else {
                    title = "Custom Title";
                }
                titelSwitch = 0;
            }
        } else {
            titelSwitch = changeTo;
            updateTitel();
        }
    }
</script>


<div class="title">
    <div class="title-text">
        <img src="/controller.png" alt="Controller">
        <h1>{title}</h1>    
    </div>
    <button on:click={() => updateTitel}>Change Title</button>
    <input type="text" placeholder="Custom Text" bind:value={titelInput} on:input={() => updateTitel(2)}>
</div>


<style>
    .title {
        display: flex;
        flex-wrap: wrap;
    }

    .title-text img {
        display: inline-block;

        mix-blend-mode: multiply;
    }
    
    .title-text h1 {
        margin-left: 10px;
    }

    .title-text {
        display: flex;
        flex-basis: 100%;
    }

    .title button {
        background-color: rgb(40, 40, 40);
        border-color: transparent;
        border-radius: 5px;
    }
    .title button:hover {
        background-color: rgb(50, 50, 50);
    }

    .title input {
        background-color: rgb(40, 40, 40);
        margin-left: 5px;
        border: transparent;

    }

</style>
