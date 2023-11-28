<script lang="ts">
	import type { IJob } from '$lib/Job';
	import { Table, type TableSource, tableMapperValues } from '@skeletonlabs/skeleton';
	import { type DBRef, ObjectId } from 'mongodb';

	let obj1: IJob = {
		_id: new ObjectId('64f48966c9e7a04375b0ee6b'),
		name: 'Test1',
		state: 1,
		start: new Date(),
		end: new Date(),
		type: 1,
		items: []
	};

	console.log('Job created!', obj1);

	const sourceData = [obj1, obj1, obj1];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Start', 'End', 'Type', 'State'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'start', 'end', 'type', 'state']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['_id', 'name', 'start', 'end', 'type', 'state'])
	};
</script>

<div>
	<Table source={tableSimple} />
</div>
