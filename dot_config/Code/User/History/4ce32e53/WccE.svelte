<script lang="ts">
	import { AppShell, AppBar, LightSwitch, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	import Navmenu from '$lib/Navmenu.svelte';
</script>

<!-- App Shell -->
<AppShell
	slotSidebarLeft="w-0 md:w-52 dark:bg-surface-600/5"
	slotPageContent="dark:bg-surface-900 bg-surface-600/5"
	slotPageFooter="dark:bg-surface-900 bg-surface-600/5"
>
	<svelte:fragment slot="sidebarLeft">
		<Navmenu />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<strong class="opacity-25 absolute right-0">©MrG4ming</strong>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
