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
		type: 1
	};

	console.log('Job created!', obj1);

	const sourceData = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Start', 'End', 'Type', 'State', 'Items'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight'])
	};
</script>

<div>
	<Table source={tableSimple} />
</div>
