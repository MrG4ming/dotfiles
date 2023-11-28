<script>
	import { IconEyeOff, IconEye } from '@tabler/icons-svelte';

	export let label = '';
	export let value = '';
	export let error = false;
	export let placeholder = '';

	let showPassword = false;
</script>

<label class="label relative">
	<div class="p-1">{label}</div>
	<input class="input" type={showPassword ? 'text' : 'password'} {placeholder ?? ${label}} />
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
