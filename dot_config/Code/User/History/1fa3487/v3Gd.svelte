<script>
    let title = "";
    let content = "";
</script>


<div class="guide">
    <form>
        <input type="text" placeholder="Title" bind:value={title}>
        <input type="text" placeholder="Content" bind:value={content}>
        <button>Add Guide</button>
    </form>
</div>

<style>
    .guide {
        margin-top: 10px;
    }
    .guide input {
        margin-bottom: 5px;
        background-color: #0f0f30;
        color: #f0f0f0;
        border-width: 1px;
        padding: 5px;
    }
</style>