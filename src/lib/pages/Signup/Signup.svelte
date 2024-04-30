<script lang="ts">
	import { cn } from '$utils/cn';
	import Input from '$lib/components/Input/Input.svelte';
	import InputLabel from '$lib/components/Input/InputLabel.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { createUser } from '$supabase/api/auth';
	import { goto } from '$app/navigation';

	let username: string = '';
	let password: string = '';
	let email: string = '';
	let confirmPassword: string = '';

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		console.log(username, password, confirmPassword);
		if (
			email.length > 0 &&
			username.length > 0 &&
			password.length > 0 &&
			password === confirmPassword
		) {
			await createUser({ email, username, password });
			await goto('/');
			return;
		} else {
			return;
		}
	};
</script>

<h2 class="text-3xl font-bold text-center">Signup</h2>
<form class="my-8" on:submit={handleSubmit}>
	<!-- <div class="flex flex-col mb-4 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
		<div class={'flex w-full flex-col space-y-2'}>
			<InputLabel htmlFor="firstname">First name</InputLabel>
			<Input id="firstname" placeholder="Tyler" type="text" />
		</div>
		<div class={'flex w-full flex-col space-y-2'}>
			<InputLabel htmlFor="lastname">Last name</InputLabel>
			<Input id="lastname" placeholder="Durden" type="text" />
		</div>
	</div> -->
	<div class={'mb-4 flex w-full flex-col space-y-2'}>
		<InputLabel htmlFor="email">Email</InputLabel>
		<Input bind:value={email} id="email" placeholder="email" type="text" />
	</div>
	<div class={'mb-4 flex w-full flex-col space-y-2'}>
		<InputLabel htmlFor="email">Username</InputLabel>
		<Input bind:value={username} id="username" placeholder="username" type="text" />
	</div>
	<div class={cn('mb-4 flex w-full flex-col space-y-2')}>
		<InputLabel htmlFor="password">Password</InputLabel>
		<Input bind:value={password} id="password" placeholder="••••••••" type="password" />
	</div>
	<div class={cn('mb-8 flex w-full flex-col space-y-2')}>
		<InputLabel htmlFor="twitterpassword">Confirm Password</InputLabel>
		<Input
			bind:value={confirmPassword}
			id="confirmpassword"
			placeholder="••••••••"
			type="password"
		/>
	</div>

	<div
		class="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
	/>
	<div>
		<Button variant="primary" classes="!w-full" label="Signup" />
	</div>
	<div class="flex items-center mt-4">
		<p class="mr-1">Already have an account?</p>
		<a class="hover:underline hover:cursor-pointer" href="/login">Login</a>
	</div>
</form>
