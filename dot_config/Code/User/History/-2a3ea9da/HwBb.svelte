<script lang="ts">
	import { JobState, JobType, type IJob } from '$lib/Job';
	import { Table, type TableSource, tableMapperValues } from '@skeletonlabs/skeleton';
	import { DBRef, ObjectId } from 'mongodb';

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
	let obj3 = {
		_id: '3',
		name: 'Test3',
		start: new Date(),
		end: new Date(),
		type: JobType.DELIVERY,
		state: JobState.COMPLETED,
		items: [
			new DBRef('inventory', new ObjectId('abcd'), 'jobmanager'),
			new DBRef('inventory', new ObjectId('abcd'), 'jobmanager'),
			new DBRef('inventory', new ObjectId('abcd'), 'jobmanager')
		]
	};

	const sourceData = [obj1, obj2, obj3];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Type', 'State', 'Start', 'End', 'Items'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'type', 'state', 'start', 'end', 'items']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['_id', 'name', 'start', 'end', 'type', 'state', 'items'])
	};

	console.log('Test');

	function selectionHandler(meta) {
		const selectedItem = meta.detail;
	}
</script>

<div>
	<Table source={tableSimple} interactive={true} on:selected={selectionHandler} />
</div>
