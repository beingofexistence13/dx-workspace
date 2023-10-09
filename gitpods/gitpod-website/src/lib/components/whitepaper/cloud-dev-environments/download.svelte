<script lang="ts">
	import type { EmailToType } from '$lib/api/api';
	import InputsHalf from '$lib/components/contact/inputs-half.svelte';
	import Input from '$lib/components/ui-library/input/input.svelte';
	import type { Form } from '$lib/types/form';
	import { scrollToElement } from '$lib/utils/helpers';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui-library/button/button.svelte';
	import SubmissionSuccess from '$lib/components/submission-success.svelte';
	import { goto } from '$app/navigation';
	import { trackEvent } from '$lib/components/segment.svelte';

	let clazz = '';
	export { clazz as class };

	export let toType: EmailToType;
	export let eventType: string;

	const formData: Form = {
		name: {
			el: null,
			valid: false,
			value: '',
		},
		email: {
			el: null,
			valid: false,
			value: '',
		},
	};

	let isFormDirty = false;
	let isEmailSent = false;
	let isSubmissionInProgress: boolean = false;
	let sectionStart: HTMLElement;
	$: isFormValid = Object.values(formData).every((field) => field.valid);

	const handleSubmit = async () => {
		isFormDirty = true;
		if (!isFormValid) {
			await tick();
			scrollToElement(sectionStart, '.error');
			return;
		}
		isSubmissionInProgress = true;

		trackEvent('whitepaper_downloaded', {
			name: formData.name.value,
			email: formData.email.value,
		});

		goto(
			'https://drive.google.com/uc?export=download&id=1ATli6smC3WO6vRLFXWVIEIzx3M8u0OkM',
		);

		try {
			const response = await fetch('/api/download-whitepaper', {
				method: 'POST',
				body: JSON.stringify({
					type: toType,
					name: formData.name.value,
					email: formData.email.value,
				}),
			});

			if (response.ok) {
				isEmailSent = true;
				isSubmissionInProgress = false;
				setTimeout(() => {
					sectionStart.scrollIntoView({
						block: 'center',
						inline: 'center',
					});
				});
			} else if (response.status === 409) {
				isSubmissionInProgress = false;
			} else {
				console.error(response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div bind:this={sectionStart}>
	{#if isEmailSent}
		<SubmissionSuccess class="-mb-x-small" title="Thanks for downloading" />
	{:else}
		<form
			class="space-y-micro md:space-y-xx-small {clazz}"
			on:submit|preventDefault={handleSubmit}
			novalidate
		>
			<h2 class="h5 !mt-0">Download {eventType}</h2>
			<InputsHalf>
				<div>
					<Input
						hasError={isFormDirty && !formData.name.valid}
						label="Full name*"
						id="name"
						name="full-name"
						bind:value={formData.name.value}
						bind:element={formData.name.el}
						type="text"
						autocomplete="name"
						on:change={() => {
							formData.name.valid =
								formData.name.value &&
								formData.name.el.checkValidity();
						}}
					/>
				</div>
				<div>
					<Input
						hasError={isFormDirty && !formData.email.valid}
						label="Work email*"
						id="email"
						name="work-email"
						bind:value={formData.email.value}
						bind:element={formData.email.el}
						type="email"
						autocomplete="email"
						on:change={() => {
							formData.email.valid =
								formData.email.value &&
								formData.email.el.checkValidity();
						}}
					/>
				</div>
			</InputsHalf>
			<div>
				<p class="!text-sm max-w-lg">
					By submitting this form, I confirm that I acknowledge the
					collection and processing of personal data by Gitpod, as
					further described in the <a
						class="!underline"
						href="/privacy">Privacy Policy.</a
					>
				</p>
			</div>
			<Button
				class="flex gap-micro"
				variant="primary"
				size="large"
				type="submit"
				isLoading={isSubmissionInProgress}
				disabled={(isFormDirty && !isFormValid) ||
					isSubmissionInProgress}
			>
				<img src="/svg/download.svg" alt="download icon" />
				Download now
			</Button>
			{#if isFormDirty && !isFormValid}
				<legend class="text-xs text-error block mt-1 mb-2">
					Please fill out all required fields above
				</legend>
			{/if}
		</form>
	{/if}
</div>
