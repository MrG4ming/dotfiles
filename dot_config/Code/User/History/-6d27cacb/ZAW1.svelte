<script>
    export let data;
    let { guides } = data;

    const deleteGuide = (id) => {
        console.log("Delete: " + id);
        guides = guides.filte((guide) => {
            return guide.id != id;
        });
    }
</script>


<div class="guides">
    <ul>
        {#each guides as guide}
            <li>
                <div>
                    <button on:click={() => deleteGuide(guide.id)}>Remove Guide</button>
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
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        max-width: fit-content;

        border: 1px rgba(255, 255, 255, 0.5) dashed;
    }
    .guides ul li:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .guides ul li a {
        color: #f0f0f0;
    }
</style>