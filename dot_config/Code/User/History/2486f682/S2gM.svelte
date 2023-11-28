<script lang="ts">
	import { AppShell, AppBar, LightSwitch, Drawer, drawerStore } from '@skeletonlabs/skeleton';
</script>

<!-- <Drawer width="w-60">
	<Navmenu />
</Drawer> -->

<!-- App Shell -->
<AppShell
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
			background="shadow-md"
		>
			<!-- <svelte:fragment slot="lead">
				<HamburgerLines on:activate={menuActivate} on:deactivate={menuDeactivate} autoHide={true} />
			</svelte:fragment> -->
			<h1 class="font-bold text-3xl">JobManager</h1>
			<svelte:fragment slot="trail">
				<LightSwitch rounded="rounded" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<Navmenu />
	</svelte:fragment> -->
	<!-- (sidebarRight) -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
