<script lang>
	export let name = null;
	export let label = '';
	export let value = false;
	export let error = false;
</script>

<div class="flex flex-row">
	<input
		class="checkbox {error && 'input-error'}"
		type="checkbox"
		name={name ?? `email`}
		bind:value
	/>
	<div class="p-1">{label}</div>
</div>
