<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	//import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, LightSwitch, Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import HamburgerLines from '$lib/HamburgerLines.svelte';

	let sidebarActive = false;
	function menuActivate() {
		drawerStore.open();
		sidebarActive = true;
	}
	function menuDeactivate() {
		drawerStore.close();
		sidebarActive = false;
	}

	import Navmenu from '$lib/Navmenu.svelte';

	import { page } from '$app/stores';

	/* console.log($page.url.pathname, $page.url.pathname !== '/login'); */
</script>

<Drawer width="w-60">
	<Navmenu />
</Drawer>

<!-- App Shell -->
<AppShell
	slotSidebarLeft="w-0 md:w-52 dark:bg-surface-600/5"
	slotPageContent="dark:bg-surface-900 bg-surface-600/5"
	slotPageFooter="dark:bg-surface-900 bg-surface-600/5"
>
	<!-- <AppShell slotSidebarLeft="w-0 md:w-52 dark:bg-primary-900 bg-primary-600"> -->
	<svelte:fragment slot="header">
		<!-- background="dark:bg-primary-700 bg-primary-500" -->
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
					alwaysHidden={$page.url.pathname == '/login'}
					autoResetButton={true}
				/>
			</svelte:fragment>
			<h1 class="font-bold text-3xl">JobManager</h1>
			<svelte:fragment slot="trail">
				<LightSwitch rounded="rounded" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="mt-4">
		<slot />
	</div>
</AppShell>
