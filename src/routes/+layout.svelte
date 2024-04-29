<script>
	import '../app.css';
	import { Navbar } from '$lib/components/NavbarMenu';
</script>

<Navbar />
<div class="p-12 w-full flex justify-center">
	<div class="w-full max-w-7xl">
		<slot />
	</div>
</div>
