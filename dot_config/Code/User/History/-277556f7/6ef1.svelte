<script>
	export let activated = false;
</script>

<nav>
	<div class="nav-menu {activated && 'nav-menu-activated'}">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a data-sveltekit-preload-data href="/guides">Guides</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->

	<div class="nav-center">
		<slot />
	</div>
</nav>
