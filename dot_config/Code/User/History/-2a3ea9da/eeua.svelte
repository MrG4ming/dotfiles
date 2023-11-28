<script lang="ts">
	import { JobState, JobType, type IJob } from '$lib/Job';
	import { Table, type TableSource, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	const sourceData = data?.jobs;

	//console.log('Source data: ', sourceData);

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Type', 'State', 'Start', 'End', 'Items'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'type', 'state', 'start', 'end', 'items']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['_id', 'name', 'start', 'end', 'type', 'state', 'items'])
	};

	function selectionHandler(meta) {
		const selectedItem = meta.detail;
		console.log(selectedItem[0]);
	}
</script>

<div>
	<Table source={tableSimple} interactive={true} on:selected={selectionHandler} />
</div>
