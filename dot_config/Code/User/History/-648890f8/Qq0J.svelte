<script lang>
	export let label = '';
	export let value = '';
	export let error = false;
	export let type = 'text';

	export let placeholder = null;
</script>

<label class="label relative">
	<div class="p-1">{label}</div>
	<input
		class="input {error && 'input-error'}"
		{type}
		placeholder={placeholder ?? `${label}...`}
		bind:value
	/>
</label>
