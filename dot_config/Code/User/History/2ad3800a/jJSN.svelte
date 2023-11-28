<script>
	import MailInput from '$lib/InputFields/MailInput.svelte';
	import PasswordInput from '$lib/InputFields/PasswordInput.svelte';

	export let form;
</script>

<form method="POST" action="?/login" class="flex justify-center items-center h-full w-full">
	<div class="card shadow-lg dark:shadow-cyan-500 p-4 w-96">
		<h1 class="font-bold text-xl text-center">Login</h1>
		<div class="p-1">
			<MailInput label="E-Mail" error={form?.error ?? false} value={form?.email ?? ''} />
		</div>
		<div class="p-1">
			<PasswordInput label="Password" error={form?.error ?? false} value={form?.password ?? ''} />
		</div>
		<div class="p-1 mt-5 flex gap-40">
			<button type="reset" class="input opacity-70 hover:opacity-100">Cancel</button>
			<button type="submit" class="input variant-soft-success">Submit</button>
		</div>
	</div>
</form>
