<script lang>
	export let name = null;
	export let label = '';
	export let value = false;
	export let error = false;
</script>

<div class="flex flex-row">
	<input class="input {error && 'input-error'}" type="checkbox" name={name ?? `email`} bind:value />
	<div class="w-fit">{label}</div>
</div>
