<script>
	import { IconEyeOff, IconEye } from '@tabler/icons-svelte';

	export let label = '';
	export let value = '';

	let hide = false;
</script>

<input type={hide ? 'password' : 'text'} class="input" />
