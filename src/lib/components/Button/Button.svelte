<script lang="ts">
	import type { ButtonVariant } from './types';

	export let variant: ButtonVariant;
	export let label: string;
	export let classes: string = '';
	export let onClick: (() => void) | undefined = undefined;
</script>

<button
	class={`${variant} ${classes} px-4 py-2 rounded-md border text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md`}
  on:click={onClick}
>
	{label}
</button>

<style lang="postcss">
	.primary {
		@apply bg-third-color border border-third-color text-fifth-color;
	}

	.secondary {
	}
</style>
