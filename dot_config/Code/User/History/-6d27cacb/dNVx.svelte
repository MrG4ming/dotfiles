<script>
  import AddGuide from "$lib/addGuide.svelte";

    export let data;
    let { guides } = data;

    const deleteGuide = (/** @type {string} */ id) => {
        console.log("Delete: " + id);
        guides = guides.filter((/** @type {{ id: string; }} */ guide) => guide.id != id);
    }
    const addGuide = (guide) {

    }
</script>


<div class="guides">
    <AddGuide on:addGuide={addGuide} />
    <ul>
        {#each guides as guide (guide.id)}
            <li>
                <button on:click={() => deleteGuide(guide.id)}>Remove Guide</button>
                <div>
                    <a data-sveltekit-preload-data href=/guides/{guide.id}>{guide.title}</a>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides ul {
        list-style-type: none;
    }

    .guides ul li {
        display: flex;
    }

    .guides ul li div {

        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        max-width: fit-content;

        border: 1px rgba(255, 255, 255, 0.5) dashed;
    }
    .guides ul li div:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .guides ul li a {
        color: #f0f0f0;
    }

    .guides button {
        /* background-color: #0f0f30; */
        background-color: #300f0f;
        color: #f0f0f0;
        border: 1px rgba(255, 20, 20, 1) solid;
        margin: 10px 10px 10px 0px;

        width: min-content;
        height: fit-content;
        align-self: center;
    }

    .guides button:hover {
        background-color: rgba(255, 0, 0, 0.4);
    }
</style>