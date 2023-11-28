<script>
    import { createEventDispatcher } from "svelte";

    let title = "";
    let content = "";
    let isErrorTitle = false;
    let isErrorContent = false;
    
    const handleSubmit = () => {
        isErrorContent = content === "";
        isErrorTitle = title === "";

        if(isErrorTitle || isErrorContent) return;

        console.log(title, content);
    }
</script>


<div class="guide">
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <input class:error={isErrorTitle} type="text" placeholder="Title" bind:value={title}>
            <input class:error={isErrorContent} type="text" placeholder="Content" bind:value={content}>
        </div>
        <button>Add Guide</button>
    </form>
</div>

<style>
    .guide {
        margin-top: 10px;
        text-align: center;
    }
    .guide input {
        margin-bottom: 5px;
        background-color: #0f0f30;
        color: #f0f0f0;
        border-width: 1px;
        padding: 5px;
        outline: none;
    }
    .guide button {
        background-color: #0f0f30;
        color: #f0f0f0;
        border: 1px rgba(255, 255, 255, 0.5) solid;        
        padding: 5px;
        
    }

    .error {
        border-color: red;
    }
</style>