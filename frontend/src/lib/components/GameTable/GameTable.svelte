<script lang="ts">
	import { onMount } from 'svelte';
	import { Table, initTe } from 'tw-elements';

	onMount(() => {
		initTe({ Table });
	});
</script>

<div class="flex flex-col bg-white rounded-lg">
	<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full text-left text-sm font-light">
					<thead class="border-b font-medium dark:border-neutral-500">
						<tr>
							<th scope="col" class="px-6 py-4">Name</th>
							<th scope="col" class="px-6 py-4">Players</th>
							<th scope="col" class="px-6 py-4">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr
							class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
						>
							<td class="whitespace-nowrap px-6 py-4 font-medium">test Name</td>
							<td class="whitespace-nowrap px-6 py-4">10</td>
							<td class="whitespace-nowrap px-6 py-4">Joinable</td>
						</tr>
						<tr
							class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
						>
							<td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
							<td class="whitespace-nowrap px-6 py-4">Jacob</td>
							<td class="whitespace-nowrap px-6 py-4">Thornton</td>
						</tr>
						<tr
							class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
						>
							<td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
							<td class="whitespace-nowrap px-6 py-4">Larry</td>
							<td class="whitespace-nowrap px-6 py-4">Wild</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
