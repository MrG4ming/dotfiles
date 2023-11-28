<script>
	import { getSessionsForUser } from '$db/sessions';
	import MailInput from '$lib/InputFields/MailInput.svelte';
	import PasswordInput from '$lib/InputFields/PasswordInput.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	export let form;

	let loading = false;

	$: if (form) loading = false;

	function onSubmitClick() {
		loading = true;
		console.log('Lul');
		getSessionsForUser('test@123.abc');
	}
</script>

<form method="POST" action="?/login" class="flex justify-center items-center h-full w-full">
	<div class="card shadow-lg dark:shadow-cyan-500 p-4 w-96">
		<h1 class="font-bold text-xl text-center">Login</h1>
		{#if form?.error}
			<div class="mt-2 rounded pl-2 pr-2 pt-0 pb-0 text-center variant-soft-error">
				<span>{form?.message}</span>
			</div>
		{/if}
		<div class="p-1">
			<MailInput label="E-Mail" error={form?.error ?? false} value={form?.email ?? ''} />
		</div>
		<div class="p-1">
			<PasswordInput label="Password" error={form?.error ?? false} value={form?.password ?? ''} />
		</div>
		<div class="p-1 mt-5 flex gap-40">
			<button type="reset" class="input opacity-70 hover:opacity-100 variant-ghost-error">
				Cancel
			</button>
			<button type="submit" class="input variant-ghost-success" on:click={onSubmitClick}>
				{#if !loading}
					Submit
				{:else}
					<div class="flex justify-center">
						<ProgressRadial
							value={undefined}
							width="w-5"
							stroke={150}
							meter="stroke-surface-800/80 dark:stroke-surface-50"
							track="stroke-surface-500/30 dark:stroke-surface-200/30"
						/>
					</div>
				{/if}
			</button>
		</div>
	</div>
</form>
