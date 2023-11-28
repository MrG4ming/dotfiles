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
	<!-- <div class="dummy {activated ? 'nav-menu-fill-active' : ''}" /> -->

	<div class="nav-center">
		<slot />
	</div>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;
		height: 55px;
		background: #1f1f66;
		z-index: 1;
	}

	.nav-menu {
		position: fixed;
		top: 55px;
		left: 0px;
		bottom: 0px;
		width: auto;
		min-width: 150px;
		height: 100vh;
		background-color: #191950;
		z-index: 1;

		transition: transform 0.2s ease-in-out;
		transform: translate(-100%);

		font-weight: bold;
	}
	.nav-menu-fill {
		position: fixed;
		top: 55px;
		right: 0px;
		bottom: 0px;
		width: 100%;
		height: 100vh;

		display: none;
		background-color: #000000a0;
		opacity: 0%;
		transition: opacity 0.2s ease-in-out;
	}

	.nav-menu-active {
		transform: translate(0%);
	}
	.nav-menu-fill-active {
		display: block;
		opacity: 100%;
	}

	.nav-menu ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		font-size: 20px;
		height: 100%;

		/* float: right; */

		display: flex;
		flex-direction: column;
	}
	.nav-menu ul li {
		padding-top: 5px;
		padding-left: 5px;
		padding-right: 5px;
		padding-bottom: 5px;
		cursor: pointer;
	}
	.nav-menu ul li:hover {
		background-color: #00000050;
	}
	.nav-menu ul li a {
		display: block;
		/* padding-left: 5px; */
		color: #f0f0f0;
	}

	.nav-center {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 100%;
	}
</style>
