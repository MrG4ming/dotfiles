<script lang="ts">
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import { IconClipboard, IconClipboardData } from '@tabler/icons-svelte';

	let drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<div class="flex flex-col h-full">
	<div class="flex-shrink">
		<nav class="list-nav h-full pt-4 pb-4">
			<ul>
				<li>
					<a href="/" on:click={drawerClose}>
						<div class="badge dark:fill-on-surface-token btn-icon-sm m-0 p-0">
							<svg
								height="24"
								viewBox="0 0 24 24"
								width="24"
								focusable="false"
								style="pointer-events: none; display: block; width: 100%; height: 100%;"
							>
								<path
									d="m12 4.5 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
								/>
							</svg>
						</div>
						Home
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="flex-grow"></div>
	<div class="flex-shrink">
		<nav class="list-nav h-full pt-4 pb-4">
			<ul>
				<li>
					<a href="/logout" on:click={drawerClose}>
						<div class="badge dark:fill-on-surface-token btn-icon-sm p-0 pr-2 m-0">
							<svg
								enable-background="new 0 0 24 24"
								width="24"
								height="24"
								viewBox="0 0 32 32"
								version="1.1"
								style="pointer-events: none; display: block; width: 100%; height: 100%;"
							>
								<path
									d="M3.651 16.989h17.326c0.553 0 1-0.448 1-1s-0.447-1-1-1h-17.264l3.617-3.617c0.391-0.39 0.391-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.196 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.391-0.39 0.391-1.023 0-1.414zM29.989 0h-17c-1.105 0-2 0.895-2 2v9h2.013v-7.78c0-0.668 0.542-1.21 1.21-1.21h14.523c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-14.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.013 0.003v9.030c0 1.105 0.895 2 2 2h16.999c1.105 0 2.001-0.895 2.001-2v-28c-0-1.105-0.896-2-2-2z"
								/>
							</svg>
						</div>
						Logout
					</a>
				</li>
				<li>
					<div class="w-full items-center">
						<LightSwitch rounded="rounded" title="Switch darkmode on/off" />
					</div>
				</li>
			</ul>
		</nav>
	</div>
</div>
