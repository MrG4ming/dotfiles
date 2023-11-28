<script>
	import { IconEyeOff, IconEye } from '@tabler/icons-svelte';

	export let label = '';
	export let value = '';
	export let error = false;
	export let placeholder = null;

	let showPassword = false;
</script>

<label class="label relative">
	<div class="p-1">{label}</div>
	{#if showPassword}
		<input class="input" type="text" placeholder={placeholder ?? `${label} ...`} bind:value />
	{:else}
		<input class="input" type="password" placeholder={placeholder ?? `${label}`} bind:value />
	{/if}
	<button
		class="absolute top-4 right-4 opacity-60"
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
