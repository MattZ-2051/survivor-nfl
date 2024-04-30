<script lang="ts">
	import { cn } from '$utils/cn';
	import Input from '$lib/components/Input/Input.svelte';
	import { goto } from '$app/navigation';
	import InputLabel from '$lib/components/Input/InputLabel.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { loginUser } from '$supabase/auth';

	let email: string = '';
	let password: string = '';

	const handleLogin = async () => {
		if (!email.length && !password.length) return;
		try {
			await loginUser({ email, password });
			await goto('/home');
		} catch {
			return;
		}
	};
</script>

<h2 class="text-3xl font-bold text-center">Login</h2>
<form class="my-8" on:submit={handleLogin}>
	<div class={'mb-4 flex w-full flex-col space-y-2'}>
		<InputLabel htmlFor="email">Email</InputLabel>
		<Input id="email" placeholder="email" type="text" bind:value={email} />
	</div>
	<div class={cn('mb-4 flex w-full flex-col space-y-2')}>
		<InputLabel htmlFor="password">Password</InputLabel>
		<Input id="password" placeholder="••••••••" type="password" bind:value={password} />
	</div>

	<div
		class="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
	/>
	<div>
		<Button variant="primary" classes="!w-full" label="Login" />
	</div>
	<div class="flex items-center mt-4">
		<p class="mr-1">Don't have an account?</p>
		<a class="hover:underline hover:cursor-pointer" href="/signup">Signup</a>
	</div>
</form>
