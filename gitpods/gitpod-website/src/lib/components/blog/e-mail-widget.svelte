<script lang="ts">
	import { trackEvent, trackIdentity } from '../segment.svelte';
	import Input from '$lib/components/ui-library/input';
	import Button from '$lib/components/ui-library/button';
	import Card from '$lib/components/ui-library/card';
	import type { Form } from '$lib/types/form';

	let resultMessage: string;
	let isSubmittedOnce = false;
	let clazz = '';
	export { clazz as class };
	const type = 'blog-email';

	const formData: Form = {
		email: {
			el: null,
			valid: false,
			value: '',
		},
	};

	let isFormDirty = false;
	$: isFormValid = Object.values(formData).every((field) => field.valid);

	const submitFeedback = async () => {
		isFormDirty = true;
		if (!isFormValid) {
			return;
		}

		isSubmittedOnce = true;

		await trackIdentity({
			email_untrusted: formData.email.value,
		});

		await trackEvent('email_submitted', {
			email: formData.email.value,
		});

		const response = await fetch('/api/signup', {
			method: 'post',
			body: JSON.stringify({
				type,
				email: formData.email.value,
			}),
		});

		if (response.status === 201) {
			resultMessage = "Thanks for signing up, we'll reach out to you";
		} else if (response.status === 409) {
			resultMessage =
				'Thanks for signing up, it seems like you already signed up';
		} else {
			resultMessage = 'Oh no, something went wrong :(.';
		}
		setTimeout(() => {
			formData.email.value = '';
			resultMessage = '';
		}, 5000);
	};
</script>

<div class={clazz}>
	<Card size="small" class="max-w-md p-x-small m-auto">
		{#if resultMessage}
			<p class="text-center">{resultMessage}</p>
		{:else}
			<form class="space-y-4" on:submit|preventDefault={submitFeedback}>
				<div class="flex justify-center space-x-6" />
				<Input
					hasError={isFormDirty && !formData.email.valid}
					label="Receive the next company building blog post via email"
					bind:value={formData.email.value}
					bind:element={formData.email.el}
					on:change={() => {
						formData.email.valid =
							formData.email.value &&
							formData.email.el.validity.valid;
					}}
					cols="30"
					name="Email"
					type="email"
					id="email"
				/>
				<div>
					<p class="!text-sm no-prose">
						By submitting this form, I confirm that I acknowledge
						the collection and processing of personal data by
						Gitpod, as further described in the <a
							class="!underline"
							href="/privacy">Privacy Policy.</a
						>
					</p>
					<span>
						<Button
							variant="primary"
							size="medium"
							disabled={isSubmittedOnce}
							type="submit"><span>Send</span></Button
						>
					</span>
				</div>
			</form>
		{/if}
	</Card>
</div>
