<script lang="ts">
	import '../app.postcss';

	import { page } from '$app/stores';
	import HamburgerLines from '$lib/HamburgerLines.svelte';
	import Navmenu from '$lib/Navmenu.svelte';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';

	//console.log('Init');
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

<!-- <HamburgerLines
	on:activate={menuActivate}
	on:deactivate={menuDeactivate}
	alwaysHidden={$page.url.pathname == '/login' || $page.url.pathname == '/register'}
	autoResetButton={true}
/>

<strong class="text-xl uppercase flex self-center">Kuchentag</strong> -->

<!-- App Shell -->
<AppShell
	slotSidebarLeft="w-0 md:w-52 dark:bg-surface-600/5"
	slotPageContent="dark:bg-surface-900 bg-surface-600/5"
	slotPageFooter="dark:bg-surface-900 bg-surface-600/5"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="shadow-md dark:shadow-orange-500"
		>
			<svelte:fragment slot="lead">
				<HamburgerLines
					on:activate={menuActivate}
					on:deactivate={menuDeactivate}
					alwaysHidden={$page.url.pathname == '/login' || $page.url.pathname == '/register'}
					autoResetButton={true}
				/>
			</svelte:fragment>
			<strong class="text-xl uppercase flex self-center">Kuchentag</strong>
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
				<div>
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navmenu />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
