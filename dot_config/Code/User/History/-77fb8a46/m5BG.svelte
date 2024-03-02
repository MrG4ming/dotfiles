<script lang="ts">
	import { page } from '$app/stores';
	import HamburgerLines from '$lib/HamburgerLines.svelte';
	import Navmenu from '$lib/Navmenu.svelte';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';

	console.log('Init');
	initializeStores();

	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	let drawerStore = getDrawerStore();

	let sidebarActive = false;
	function menuActivate() {
		console.log('Open');
		drawerStore.open();
		sidebarActive = true;
	}
	function menuDeactivate() {
		console.log('Open');
		drawerStore.close();
		sidebarActive = false;
	}
</script>

<Drawer width="w-60">
	<Navmenu />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52 dark:bg-surface-600/5">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div>
					<HamburgerLines
						on:activate={menuActivate}
						on:deactivate={menuDeactivate}
						alwaysHidden={$page.url.pathname == '/login' || $page.url.pathname == '/register'}
						autoResetButton={true}
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="headline">
				<strong class="text-xl uppercase flex self-center">Kuchentag</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/MrG4ming/"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
