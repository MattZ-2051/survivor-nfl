<script>
	import Header from '$lib/layout/Header/Header.svelte';
	import '../app.css';
</script>

<div class="">
	<Header />
	<div class="p-12">
		<slot />
	</div>
</div>
