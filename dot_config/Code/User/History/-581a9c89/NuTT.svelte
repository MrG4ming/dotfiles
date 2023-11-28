<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav pt-4 pb-4">
	<ul>
		<li>
			<a href="/" on:click={drawerClose}>
				<div class="badge dark:fill-on-surface-token w-9">
					<svg
						height="24"
						viewBox="0 0 24 24"
						width="24"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<path
							d="m12 4.5 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
						/>
					</svg>
				</div>
				Home
			</a>
		</li>
		<li>
			<a href="/login">
				<div class="badge dark:fill-on-surface-token w-9">
					<svg
						enable-background="new 0 0 24 24"
						width="22"
						height="24"
						viewBox="0 0 32 32"
						version="1.1"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<path
							d="M16.642 20.669c-0.391 0.39-0.391 1.023-0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.39-0.39-1.023-0.39-1.414 0s-0.391 1.024 0 1.414l3.617 3.617h-19.264c-0.552 0-1 0.448-1 1s0.448 1 1 1h19.326zM30.005 0h-18c-1.105 0-2.001 0.895-2.001 2v9h2.014v-7.78c0-0.668 0.542-1.21 1.21-1.21h15.522c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-15.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.014 0.003v9.030c0 1.105 0.896 2 2.001 2h18c1.105 0 2-0.895 2-2v-28c-0.001-1.105-0.896-2-2-2z"
						/>
					</svg>
				</div>
				Login
			</a>
		</li>
	</ul>
</nav>
