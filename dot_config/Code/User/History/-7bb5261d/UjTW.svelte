<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	let navButton: HTMLInputElement;

	export let autoHide: Boolean = false;

	const onClick = () => {
		if (navButton.checked) {
			dispatch('activate');
			if (autoHide) navButton.checked = false;
		} else {
			dispatch('deactivate');
		}
	};
</script>

<div class="{autoHide ? 'md:hidden' : ''} hamburger-lines">
	<input class="hamburger-button" type="checkbox" bind:this={navButton} on:click={onClick} />
	<div class="hamburger-lines">
		<span class="line line1" />
		<span class="line line2" />
		<span class="line line3" />
	</div>
</div>

<style>
	.hamburger-lines {
	}

	.hamburger-button {
		position: absolute;
		display: block;
		height: 30px;
		width: 30px;
		top: 10px;
		left: 20px;
		z-index: 5;
		opacity: 0;
	}

	.hamburger-lines {
		height: 23px;
		width: 35px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		cursor: pointer;
	}

	.hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background-color: #f0f0f0;
	}

	.hamburger-lines .line1 {
		transform-origin: 0% 0%;
		transition: transform 0.2s ease-in-out;
	}

	.hamburger-lines .line2 {
		transition: transform 0.2s ease-in-out;
	}

	.hamburger-lines .line3 {
		transform-origin: 0% 100%;
		transition: transform 0.2s ease-in-out;
	}

	.hamburger-button[type='checkbox']:checked ~ .hamburger-lines .line1 {
		transform: rotate(35deg);
	}

	.hamburger-button[type='checkbox']:checked ~ .hamburger-lines .line2 {
		transform: scaleY(0);
	}

	.hamburger-button[type='checkbox']:checked ~ .hamburger-lines .line3 {
		transform: rotate(-35deg);
	}
</style>
