<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import { loginFx } from '$store/user';
	import { routes } from '../routes';

	let username: string = '';
	let password: string = '';

	const handleLogin = () => {
		loginFx({ username, password });
	};

</script>

<div class="w-full h-screen flex items-center justify-center">
	<div class="flex justify-center bg-white p-12 rounded-lg">
		<div>
			<form method="post">
				<p class="text-center text-5xl font-bold mb-16">Login</p>
				<div class="mb-6 xl:w-96">
					<Input
						name="floatingUsername"
						placeholder="Username"
						type="text"
						label="Username"
						bind:value={username}
					/>
				</div>
				<div class="mb-2 xl:w-96">
					<Input
						name="floatingPassword"
						placeholder="Password"
						type="password"
						label="Password"
						bind:value={password}
					/>
				</div>
				<div class="w-full flex text-xs opacity-70 mb-4">
					<p>{"Don't have an account?"}</p>
					<a class="ml-1 underline hover:text-blue-500" href={routes.signup}> Signup </a>
				</div>
				<div class="w-full">
					<Button
						label="Login"
						type="primary"
						_class="w-full mt-12 !text-base"
						onClick={handleLogin}
					/>
				</div>
			</form>
		</div>
	</div>
</div>
