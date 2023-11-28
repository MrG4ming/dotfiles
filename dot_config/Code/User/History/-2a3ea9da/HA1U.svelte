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
		meta: tableMapperValues(sourceData, ['_id', 'name', 'type', 'state', 'start', 'end', 'items'])
	};

	function selectionHandler(meta) {
		const selectedItem = meta.detail;
		const _id = selectedItem[0];
		const name = selectedItem[1];
		const type = selectedItem[2];
		const state = selectedItem[3];
		const start = selectedItem[4];
		const end = selectedItem[5];
		const items = selectedItem[6];

		console.log(_id, name, type, state, start, end, items);
	}
</script>

<div>
	<Table source={tableSimple} interactive={true} on:selected={selectionHandler} />
</div>
