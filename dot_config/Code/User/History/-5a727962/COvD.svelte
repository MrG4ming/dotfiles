<script lang>
	export let name = null;
	export let label = '';
	export let value = false;
	export let error = false;
</script>

<label class="label relative flex flex-row items-center">
	<input
		class="checkbox {error && 'variant-ghost-error'}"
		type="checkbox"
		name={name ?? `checkbox`}
		bind:value
	/>
	<div class="p-0 m-0 pl-2 select-none">{label}</div>
</label>
