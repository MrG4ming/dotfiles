<script lang>
	export let name = null;
	export let label = '';
	export let value = false;
	export let error = false;
</script>

<label class="label relative flex flex-row">
	<input
		class="checkbox {error && 'variant-ghost-error'}"
		type="checkbox"
		name={name ?? `email`}
		bind:value
	/>
	<div class="p-1">{label}</div>
</label>
