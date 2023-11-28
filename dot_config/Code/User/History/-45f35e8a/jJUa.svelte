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
	<input type={showPassword ? 'text' : 'password'} class="input" />
</label>
