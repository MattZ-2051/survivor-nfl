<script lang="ts">
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '.';

	let active: string | null = null;
</script>

<div class="relative flex w-full items-center">
	<div class={'mt-4 mx-auto w-full max-w-7xl'}>
		<NavbarMenu>
			<a href="/" class="navbarLink">Home</a>
			<a href="/games" class="navbarLink">Games</a>
			<MenuItem {active} item="Products">
				<div class="grid grid-cols-2 gap-10 p-4 text-sm">
					<ProductItem
						title="Algochurn"
						href="#"
						src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Prepare for tech interviews like never before."
					/>
					<ProductItem
						title="Tailwind Master Kit"
						href="#"
						src="https://images.pexels.com/photos/733071/pexels-photo-733071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Production ready Tailwind css components for your next project"
					/>
					<ProductItem
						title="Moonbeam"
						href="#"
						src="https://images.pexels.com/photos/730424/pexels-photo-730424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Never write from scratch again. Go from idea to blog in minutes."
					/>
					<ProductItem
						title="Rogue"
						href="#"
						src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
					/>
				</div>
			</MenuItem>
			<MenuItem {active} item="My Account">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="/myaccount">Settings</HoveredLink>
					<HoveredLink href="#">Logout</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
</div>

<style lang="postcss">
	.navbarLink {
		@apply hover:scale-110 hover:cursor-pointer;
	}
</style>
