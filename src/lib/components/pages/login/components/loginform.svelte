<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { toast } from 'svelte-sonner';
	import { authFormSchema, type AuthFormSchema } from '$lib/form-schemas/';
	import { type Infer, superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: { form: SuperValidated<Infer<AuthFormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(authFormSchema),
		onError({ result }) {
			toast.error(result.error.message);
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Card.Root class="dark w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account.</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" id="loginForm" use:enhance>
				<div class="grid gap-2">
					<Form.Field {form} name="email">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Email</Form.Label>
								<Input bind:value={$formData.email} placeholder="m@example.com" {...props} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div class="mt-4 grid gap-2">
					<Form.Field {form} name="password">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Password</Form.Label>
								<Input
									type="password"
									placeholder="Pass@123"
									{...props}
									bind:value={$formData.password}
								/>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Button class="mt-6 w-full" type="submit">Sign in</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
