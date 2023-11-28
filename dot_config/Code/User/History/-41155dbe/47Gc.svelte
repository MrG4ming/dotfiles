<script lang="ts">
	import { AppShell, AppBar, LightSwitch, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { redirect, type RequestEvent } from '@sveltejs/kit';

	import Navmenu from '$lib/Navmenu.svelte';
	import { handleLoginRedirect } from '../../AuthenticationHandler';

	export const load = async (event: RequestEvent) => {
		if (!event.locals.user) {
			throw redirect(302, handleLoginRedirect(event));
		}
	};
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
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
