<script lang="ts">
	import TabContainer from './TabContainer.svelte';
	import TabContent from './TabContent.svelte';

	const tabs = [
		{
			title: 'All Games',
			value: 'all',
			content: TabContent
		},
		{
			title: 'Active Games',
			value: 'active',
			content: TabContent
		},
		{
			title: 'Upcoming Games',
			value: 'upcoming',
			content: TabContent
		},
		{
			title: 'Join Game',
			value: 'join',
			content: TabContent
		}
	];
</script>

<div
	class="relative flex w-full flex-col items-start justify-start [perspective:1000px] md:h-[50vh]"
>
	<TabContainer
		propTabs={tabs}
		contentClassName="rounded-2xl bg-gradient-to-br from-third-color to-second-color p-10 text-xl font-bold md:text-4xl mt-20"
		containerClassName="bg-secondary-color border border-third-color w-fit rounded-full"
		tabClassName="w-[180px] whitespace-nowrap"
	/>
</div>
