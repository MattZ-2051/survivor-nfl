<script lang="ts">
	import { cn } from '$utils/cn';

	export let className: string | undefined = undefined;
</script>

<label
	class={cn(
		'text-sm font-medium leading-none text-fifth-color peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white',
		className
	)}
	{...$$restProps}
>
	<slot />
</label>
