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
				<div class="badge dark:fill-on-surface-token btn-icon-sm m-0 p-0">
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
			<a href="/jobs" on:click={drawerClose}>
				<div class="badge dark:fill-on-surface-token btn-icon-sm m-0 p-0">
					<svg
						height="24"
						viewBox="0 0 24 24"
						width="24"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
						fill="none"
					>
						<path
							d="m12 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M15 12H12M15 16H12M9 12H9.01M9 16H9.01"
							stroke="#00000000"
						/>
					</svg>
				</div>
				Jobs
			</a>
		</li>
		<li>
			<a href="/logout" on:click={drawerClose}>
				<div class="badge dark:fill-on-surface-token btn-icon-sm p-0 pr-2 m-0">
					<svg
						enable-background="new 0 0 24 24"
						width="24"
						height="24"
						viewBox="0 0 32 32"
						version="1.1"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<path
							d="M3.651 16.989h17.326c0.553 0 1-0.448 1-1s-0.447-1-1-1h-17.264l3.617-3.617c0.391-0.39 0.391-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.196 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.391-0.39 0.391-1.023 0-1.414zM29.989 0h-17c-1.105 0-2 0.895-2 2v9h2.013v-7.78c0-0.668 0.542-1.21 1.21-1.21h14.523c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-14.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.013 0.003v9.030c0 1.105 0.895 2 2 2h16.999c1.105 0 2.001-0.895 2.001-2v-28c-0-1.105-0.896-2-2-2z"
						/>
					</svg>
				</div>
				Logout
			</a>
		</li>
	</ul>
</nav>
