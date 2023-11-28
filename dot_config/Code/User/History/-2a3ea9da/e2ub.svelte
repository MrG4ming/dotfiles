<script lang="ts">
	import { JobState, JobType } from '$lib/Job';
	import { Table, type TableSource, tableMapperValues } from '@skeletonlabs/skeleton';

	let obj1 = {
		_id: '1',
		name: 'Test1',
		start: new Date(),
		end: new Date(),
		type: JobType.SELF_PICKUP,
		state: JobState.CONFIRMED,
		items: []
	};
	let obj2 = {
		_id: '2',
		name: 'Test2',
		start: new Date(),
		end: new Date(),
		type: JobType.FULL_SERVICE,
		state: JobState.OFFER,
		items: []
	};

	console.log('Job created!', obj1);

	const sourceData = [obj1, obj1, obj2];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Start', 'End', 'Type', 'State', 'Items'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'start', 'end', 'type', 'state', 'items']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['_id', 'name', 'start', 'end', 'type', 'state', 'items'])
	};

	console.log('Test');
</script>

<div>
	<Table source={tableSimple} />
</div>
