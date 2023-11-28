<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	let navButton: HTMLInputElement;

	export let alwaysHidden: Boolean = true;
	export let autoHide: Boolean = true;
	export let autoResetButton: Boolean = false;

	const onClick = () => {
		if (navButton.checked) {
			dispatch('activate');
			if (autoResetButton) navButton.checked = false;
		} else {
			dispatch('deactivate');
		}
	};
</script>

<div
	class="{alwaysHidden ? 'invisible' : ''}
	{autoHide && !alwaysHidden ? 'md:invisible' : ''} hamburger-lines"
>
	<input class="hamburger-button" type="checkbox" bind:this={navButton} on:click={onClick} />
	<div class="hamburger-lines">
		<span class="line line1 dark:bg-surface-100 bg-surface-600" />
		<span class="line line2 dark:bg-surface-100 bg-surface-600" />
		<span class="line line3 dark:bg-surface-100 bg-surface-600" />
	</div>
</div>

<style>
	.hamburger-lines {
		display: block;
		position: absolute;
		height: 23px;
		width: 35px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		cursor: pointer;
	}

	.hamburger-button {
		display: block;
		height: 100%;
		width: 100%;
		z-index: 5;
		opacity: 0;
	}

	.hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		/* background-color: #f0f0f0; */
		/* background-color: rgba(var(--color-surface-100) / 1); */
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
