<script lang="ts">
	import LoginForm from '$lib/components/pages/login/components/loginform.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<LoginForm {data} />
