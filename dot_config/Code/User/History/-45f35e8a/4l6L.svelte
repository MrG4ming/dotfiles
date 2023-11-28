<script lang>
	import { IconEyeOff, IconEye } from '@tabler/icons-svelte';

	export let name = null;
	export let label = '';
	export let value = '';
	export let error = false;

	export let placeholder = null;

	let showPassword = false;
</script>

<label class="label relative">
	<div class="p-1">{label}</div>
	{#if showPassword}
		<input
			class="input {error && 'input-error'}"
			type="text"
			name={name ?? `password`}
			placeholder={placeholder ?? `${label}...`}
			bind:value
		/>
	{:else}
		<input
			class="input {error && 'input-error'}"
			type="password"
			placeholder={placeholder ?? `${label}...`}
			bind:value
		/>
	{/if}
	<button
		class="absolute top-10 right-3 opacity-60"
		on:click={() => {
			showPassword = !showPassword;
		}}
	>
		{#if showPassword}
			<IconEyeOff />
		{:else}
			<IconEye />
		{/if}
	</button>
</label>
