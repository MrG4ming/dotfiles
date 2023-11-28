<script>
	import { IconEyeOff, IconEye } from '@tabler/icons-svelte';

	let hide = false;
</script>

<input type={hide ? 'password' : 'text'} class="input" />
