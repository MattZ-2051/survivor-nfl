<script lang="ts">
	import type { ButtonType } from './types';
	import clsx from 'clsx';

	export let type: ButtonType;
	export let label: string;

	export let onClick: (() => void) | undefined = undefined;
	export let _class: string | undefined = undefined;
	export let redirectTo: string | undefined = undefined;
	export let form: boolean = false;
	const buttonTypeMap: Record<ButtonType, Record<string, string>> = {
		primary: {
			class:
				'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
		},
		outlined: {
			class:
				'inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
		}
	};
</script>

{#if redirectTo}
	<a
		data-mdb-ripple="true"
		data-mdb-ripple-color="light"
		class={clsx(buttonTypeMap[type].class, _class)}
		href={redirectTo}
	>
		{label}
	</a>
{:else}
	<button
		type={form ? 'submit' : 'button'}
		data-mdb-ripple="true"
		data-mdb-ripple-color="light"
		class={clsx(buttonTypeMap[type].class, _class)}
		on:click={onClick}
	>
		{label}
	</button>
{/if}
