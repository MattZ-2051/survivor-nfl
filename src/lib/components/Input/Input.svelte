<script lang="ts">
	import { cn } from '$utils/cn';

	export let className: string | undefined = undefined;
	export let type: string = 'text';
	export let value: string | number;
</script>

<div class="group/input rounded-lg p-[2px] transition duration-300">
	<input
		type="text"
		bind:value
		class={cn(
			`duration-400 flex h-10 w-full text-black rounded-md border-none px-3 py-2 text-sm shadow-input transition file:border-0
        file:bg-transparent file:text-sm file:font-medium placeholder:text-second-color
        focus-visible:outline-none focus-visible:ring-[3px]  focus-visible:ring-third-color disabled:cursor-not-allowed
         disabled:opacity-50 group-hover/input:shadow-none
         `,
			className
		)}
		{...$$restProps}
	/>
</div>
